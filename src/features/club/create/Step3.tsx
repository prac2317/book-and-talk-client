import * as styles from './Step3.css';
import { StepProps } from '@type/club.ts';
import { useEffect, useRef, useState } from 'react';
import LocationSearch from '@features/map/LocationSearch.tsx';

interface Address {
  id: string;
  place_name: string;
  category_name: string;
  category_group_code: string;
  category_group_name: string;
  phone: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
  place_url: string;
  distance: string;
}

const Step3 = ({ goToNextStep, formInput, setFormInput }: StepProps) => {
  const [address, setAddress] = useState<Address>({
    id: '',
    place_name: '',
    category_name: '',
    category_group_code: '',
    category_group_name: '',
    phone: '',
    address_name: '',
    road_address_name: '',
    x: '',
    y: '',
    place_url: '',
    distance: '',
  });
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  const mapInstanceRef = useRef<naver.maps.Map>(null);
  const infoWindowInstanceRef = useRef<naver.maps.InfoWindow>(null);

  useEffect(() => {
    if (mapContainerRef.current === null) {
      return;
    }

    const map: naver.maps.Map = new window.naver.maps.Map(mapContainerRef.current);
    const infoWindow: naver.maps.InfoWindow = new window.naver.maps.InfoWindow({
      position: map.getCenter(),
      content: '',
    });

    mapInstanceRef.current = map;
    infoWindowInstanceRef.current = infoWindow;
  }, []);

  function markAddress() {
    setLatitude(address.y);
    setLongitude(address.x);

    let point = new window.naver.maps.Point(Number(address.x), Number(address.y));

    if (mapInstanceRef.current === null) {
      return;
    }
    if (infoWindowInstanceRef.current === null) {
      return;
    }
    const map: naver.maps.Map = mapInstanceRef.current;
    const infoWindow: naver.maps.InfoWindow = infoWindowInstanceRef.current;

    if (infoWindow) {
      infoWindow.setContent(
        [
          '<div style="padding:10px;min-width:200px;line-height:150%;">',
          '<h4 style="margin-top:5px;">검색 주소 : ' + address.address_name + '</h4><br />',
          '</div>',
        ].join('\n'),
      );
    }
    if (map) {
      console.log(map);
      console.log(point);
      map.setCenter(point);
      infoWindow.open(map, point);
    }
  }

  return (
    <>
      <form className={styles.container} style={{ display: isOpen ? 'none' : 'block' }}>
        <div className={styles.locationWrapper}>
          <h1 className={styles.title}>모임활동 장소를 정해주세요</h1>
          <input className={styles.locationSearchBar} placeholder="지역을 검색해주세요." onClick={() => { setIsOpen(true) }} />
          <div ref={mapContainerRef} id="map" style={{ width: '100%', height: '400px' }} />
          <div>{address?.address_name}</div>
          <button
            onClick={() => {
              setFormInput({
                ...formInput,
                address: address.address_name,
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
        </div>
        <div>
          <button className={styles.primaryButton} onClick={goToNextStep}>
            다음
          </button>
        </div>
      </form>

      {isOpen && (
        <LocationSearch
          setIsOpen={setIsOpen}
          setAddress={setAddress}
          markAddress={markAddress}
        />
      )}

    </>
  );
};

export default Step3;
