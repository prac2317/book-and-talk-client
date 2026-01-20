import * as styles from './Step3.css';
import { StepProps } from '@type/club.ts';
import { useState } from 'react';
import LocationSearch from '@features/map/LocationSearch.tsx';
import { useMap } from '@hooks/useMap.ts'
import LocationMapView from '@features/map/LocationMapView';

const Step3 = ({ goToNextStep, formInput, setFormInput }: StepProps) => {

  const { setAddress, mapContainerRef, markAddress, mapContainerOpenlayersRef, markAddressOpenLayers } = useMap();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.locationWrapper}>
          <h1 className={styles.title}>모임활동 장소를 정해주세요</h1>
          <div
            ref={mapContainerOpenlayersRef}
            style={{ width: '100%', height: "400px" }}
          />
          <div style={{ display: isOpen ? 'none' : 'block' }}>
            {/* todo: props 너무 많이 전달하는지 다시 생각해보기*/}
            <LocationMapView
              mapContainerRef={mapContainerRef}
              setIsOpen={setIsOpen}
            />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }}>
            <LocationSearch
              setIsOpen={setIsOpen}
              setAddress={setAddress}
              markAddress={markAddress}
              markAddressOpenLayers={markAddressOpenLayers}
              formInput={formInput}
              setFormInput={setFormInput}
            />
          </div>
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
