import * as styles from './Step3.css';
import { StepProps } from '@type/club.ts';
import { useEffect, useRef, useState } from 'react';

const Step3 = ({ goToNextStep, formInput, setFormInput }: StepProps) => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const mapRef = useRef(null);

  const mapInsanceRef = useRef(null);
  const infoWindowInstanceRef = useRef(null);

  useEffect(() => {
    const map = new window.naver.maps.Map(mapRef.current);
    const infoWindow = new window.naver.maps.InfoWindow();

    mapInsanceRef.current = map;
    infoWindowInstanceRef.current = infoWindow;
  }, []);

  function searchAddress() {
    window.naver.maps.Service.geocode({ query: address }, function (status, response) {
      if (status === window.naver.maps.Service.Status.ERROR) {
        return alert('Something Wrong!');
      }

      if (response.v2.meta.totalCount === 0) {
        return alert('totalCount' + response.v2.meta.totalCount);
      }

      var htmlAddresses = [],
        item = response.v2.addresses[0],
        point = new window.naver.maps.Point(item.x, item.y);

      if (item.roadAddress) {
        htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
      }

      if (item.jibunAddress) {
        htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
      }

      if (item.englishAddress) {
        htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
      }

      const map = mapInsanceRef.current;
      const infoWindow = infoWindowInstanceRef.current;
      if (map === null || infoWindow === null) {
        return;
      }

      if (infoWindow) {
        infoWindow.setContent(
          [
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 주소 : ' + address + '</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>',
          ].join('\n'),
        );
      }

      if (map) {
        map.setCenter(point);
        infoWindow.open(map, point);

        if (item.roadAddress) {
          setAddress(item.roadAddress);
        }
        setLatitude(item.y);
        setLongitude(item.x);
      }
    });
  }

  return (
    <form className={styles.container}>
      <div className={styles.locationWrapper}>
        <h1 className={styles.title}>모임활동 장소를 정해주세요</h1>
        <div ref={mapRef} id="map" style={{ width: '100%', height: '400px' }} />
        <input className={styles.locationSearchBar} placeholder="지역을 검색해주세요." />
        <div>
          <input onChange={(e) => setAddress(e.target.value)} />
          <button onClick={searchAddress} type="button">
            입력
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setFormInput({
              ...formInput,
              address: address,
              latitude: latitude,
              longitude: longitude,
            });
            console.log(location);
            console.log(typeof latitude);
            console.log(typeof longitude);
          }}
          type="button"
        >
          주소 입력
        </button>
        <button className={styles.primaryButton} onClick={goToNextStep}>
          다음
        </button>
      </div>
    </form>
  );
};

export default Step3;
