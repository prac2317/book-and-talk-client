import * as styles from './Step3.css';
import { StepProps } from '@type/club.ts';
import { useState } from 'react';
import LocationSearch from '@features/map/LocationSearch.tsx';
import { useMap } from '@hooks/useMap.ts'

const Step3 = ({ goToNextStep, formInput, setFormInput }: StepProps) => {

  const { address, setAddress, latitude, longitude, mapContainerRef, markAddress } = useMap();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.locationWrapper}>
          <h1 className={styles.title}>모임활동 장소를 정해주세요</h1>
          <div style={{ display: isOpen ? 'none' : 'block' }}>
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
                console.log(latitude);
                console.log(longitude);
                console.log(typeof latitude);
                console.log(typeof longitude);
              }}
              type="button"
            >
              주소 입력
            </button>
          </div>

          {isOpen && (
            <LocationSearch
              setIsOpen={setIsOpen}
              setAddress={setAddress}
              markAddress={markAddress}
            />
          )}
        </div>
        <div>
          <button className={styles.primaryButton} onClick={goToNextStep}>
            다음
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;
