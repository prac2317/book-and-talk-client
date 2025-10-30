import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './MapSearchPage.css';
import images from '@assets/icons/images';
import { ClubOverview } from '@type/club.ts';
import { fetchNearbyClubList } from '@api/club.ts';
import ClubCard from '@features/club/components/ClubCard.tsx';

interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

const MapSearchPage = () => {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const infoWindowInstanceRef = useRef(null);

  const markerRef = useRef(null);
  const clubMarkersRef = useRef([]);

  const [selectedLocation, setSelectedLocation] = useState<Location>(null);
  const [nearbyClubs, setNearbyClubs] = useState<ClubOverview[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const map = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(37.5665, 126.978), // 서울 중심
      zoom: 12,
    });
    const infoWindow = new window.naver.maps.InfoWindow();

    mapInstanceRef.current = map;
    infoWindowInstanceRef.current = infoWindow;

    window.naver.maps.Event.addListener(map, 'click', handleMapClick);
  }, []);

  const handleMapClick = (e) => {
    const clickedLat = e.coord.lat();
    const clickedLng = e.coord.lng();

    console.log('클릭한 위치:', clickedLat, clickedLng);

    window.naver.maps.Service.reverseGeocode(
      {
        coords: new window.naver.maps.LatLng(clickedLat, clickedLng),
      },
      (status, response) => {
        if (status !== window.naver.maps.Service.Status.OK) {
          console.error('역지오코딩 실패');
          return;
        }

        const result = response.v2.address;
        const address = result.roadAddress || result.jibunAddress || '주소를 찾을 수 없습니다.';

        setSelectedLocation({
          latitude: clickedLat,
          longitude: clickedLng,
          address: address,
        });

        const map = mapInstanceRef.current;
        const infoWindow = infoWindowInstanceRef.current;

        if (!map || !infoWindow) return;

        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(clickedLat, clickedLng),
          map: map,
        });

        markerRef.current = marker;

        infoWindow.setContent(`
      <div style="padding:10px;min-width:200px;line-height:150%;">
        <h4 style="margin-top:5px;">선택한 위치</h4>
        <p>위도: ${clickedLat.toFixed(6)}</p>
        <p>경도: ${clickedLng.toFixed(6)}</p>
        <p>주소: ${address}</p>
      </div>
    `);

        map.setCenter(new window.naver.maps.LatLng(clickedLat, clickedLng));
        infoWindow.open(map, new window.naver.maps.LatLng(clickedLat, clickedLng));
      },
    );
  };

  const handleSearch = async () => {
    if (!selectedLocation) {
      alert('지도에서 위치를 먼저 선택해주세요!');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetchNearbyClubList(
        selectedLocation.latitude,
        selectedLocation.longitude,
        0, // 첫 페이지
        10, // 한 페이지에 10개
      );

      console.log('근처 모임 검색 결과:', res);

      setNearbyClubs(res.data);
      setCurrentPage(0);
      setTotalPages(res.totalPages || 0);
      setTotalCount(res.totalCount || 0);

      displayClubMarkers(res.data);
    } catch (error) {
      console.error('근처 모임 검색 실패:', error);
      alert('근처 모임을 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (!selectedLocation || currentPage >= totalPages - 1) {
      return;
    }

    setIsLoading(true);

    try {
      const nextPage = currentPage + 1;
      const res = await fetchNearbyClubList(
        selectedLocation.latitude,
        selectedLocation.longitude,
        nextPage,
        10,
      );

      console.log(`${nextPage}페이지 로드 완료:`, res);

      const updatedClubs = [...nearbyClubs, ...res.data];
      setNearbyClubs(updatedClubs);
      setCurrentPage(nextPage);

      displayClubMarkers(updatedClubs);
    } catch (error) {
      console.error('추가 모임 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayClubMarkers = (clubs: ClubOverview[]) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // 기존 모임 마커들 제거
    clubMarkersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    clubMarkersRef.current = [];

    // 새로운 마커들 생성
    clubs.forEach((club) => {
      if (!club.latitude || !club.longitude) return;

      const position = new window.naver.maps.LatLng(
        parseFloat(club.latitude),
        parseFloat(club.longitude),
      );

      const marker = new window.naver.maps.Marker({
        position: position,
        map: map,
        title: club.name,
        // 모임 마커는 다른 색상이나 아이콘으로 구분
        icon: {
          content: `
            <div style="
              background-color: #4285F4;
              color: white;
              padding: 8px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              white-space: nowrap;
            ">
              ${club.name}
            </div>
          `,
          anchor: new window.naver.maps.Point(0, 0),
        },
      });

      // 마커 클릭 이벤트: 모임 상세 페이지로 이동
      window.naver.maps.Event.addListener(marker, 'click', () => {
        navigate(`/clubs/${club.clubId}`);
      });

      clubMarkersRef.current.push(marker);
    });

    // 모든 마커가 보이도록 지도 영역 조정 (선택사항)
    if (clubs.length > 0) {
      const bounds = new window.naver.maps.LatLngBounds();

      // 선택한 위치도 포함
      if (selectedLocation) {
        bounds.extend(
          new window.naver.maps.LatLng(selectedLocation.latitude, selectedLocation.longitude),
        );
      }

      // 모든 모임 위치 포함
      clubs.forEach((club) => {
        if (club.latitude && club.longitude) {
          bounds.extend(
            new window.naver.maps.LatLng(parseFloat(club.latitude), parseFloat(club.longitude)),
          );
        }
      });

      map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.iconButton} onClick={() => navigate(-1)}>
          <img src={images.backImage} alt="back" />
        </button>
        <span className={styles.title}>주변 모임 찾기</span>
      </div>

      <div className={styles.mapContainer}>
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />

        {selectedLocation && (
          <div className={styles.searchButtonContainer}>
            <button className={styles.searchButton} onClick={handleSearch} disabled={isLoading}>
              {isLoading ? '검색중...' : '이 위치에서 검색'}
            </button>
          </div>
        )}
      </div>

      <div className={styles.resultsContainer}>
        {selectedLocation && (
          <div className={styles.locationInfo}>
            <strong>선택한 위치:</strong>
            <br />
            {selectedLocation.address ||
              `위도: ${selectedLocation.latitude.toFixed(6)}, 경도: ${selectedLocation.longitude.toFixed(6)}`}
          </div>
        )}

        {nearbyClubs.length > 0 && (
          <>
            <div className={styles.resultsHeader}>
              <span className={styles.resultsTitle}>주변 모임</span>
              <span className={styles.resultsCount}>총 {totalCount}개</span>
            </div>

            <div className={styles.clubList}>
              {nearbyClubs.map((club) => (
                <ClubCard
                  key={club.clubId}
                  clubId={club.clubId}
                  bookTitle={club.bookTitle}
                  name={club.name}
                  currentParticipants={club.currentParticipants}
                  maxParticipants={club.maxParticipants}
                  status={club.status}
                  startDate={club.startDate}
                  clubImage={club.clubImage}
                />
              ))}
            </div>

            {currentPage < totalPages - 1 && (
              <button
                className={styles.loadMoreButton}
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? '로딩중...' : '더보기'}
              </button>
            )}
          </>
        )}

        {!isLoading && nearbyClubs.length === 0 && selectedLocation && (
          <div className={styles.emptyState}>검색 버튼을 눌러 주변 모임을 찾아보세요</div>
        )}
      </div>
    </div>
  );
};

export default MapSearchPage;
