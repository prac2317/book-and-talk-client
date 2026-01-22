import * as styles from './LocationMapView.css';

//todo: 타입 다시 정리 및 분리하기
interface LocationMapViewProps {
    mapContainerRef: React.RefObject<HTMLDivElement | null>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationMapView = ({ mapContainerRef, setIsOpen }: LocationMapViewProps) => {

    return (
        <div className={styles.container}>
            <input className={styles.locationSearchBar} placeholder="지역을 검색해주세요." onClick={() => { setIsOpen(true) }} />
            <div
                className={styles.map}
                ref={mapContainerRef} />
        </div>

    )

}

export default LocationMapView;