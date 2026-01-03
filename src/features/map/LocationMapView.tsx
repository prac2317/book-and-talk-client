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
    address: Address;
    latitude: string;
    longitude: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    formInput: FormInput;
    setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
}

const LocationMapView = ({ mapContainerRef, address, latitude, longitude, setIsOpen, formInput, setFormInput }: LocationMapViewProps) => {

    return (
        <>
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
        </>

    )

}

export default LocationMapView;