import * as styles from './LocationMapView.css';
import { FormInput } from '@type/club.ts';

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

//todo: 타입 다시 정리 및 분리하기
interface LocationMapViewProps {
    mapContainerRef: React.RefObject<HTMLDivElement | null>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationMapView = ({ mapContainerRef, setIsOpen }: LocationMapViewProps) => {

    return (
        <>
            <input className={styles.locationSearchBar} placeholder="지역을 검색해주세요." onClick={() => { setIsOpen(true) }} />
            <div
                className={styles.map}
                ref={mapContainerRef} />
        </>

    )

}

export default LocationMapView;