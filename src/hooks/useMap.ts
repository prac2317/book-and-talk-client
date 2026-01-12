import { useEffect, useRef, useState } from 'react';
import { createInfoWindowContent } from '@features/map/createInfoWindowContent.ts'

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

export function useMap() {
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

    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<naver.maps.Map | null>(null);
    const infoWindowInstanceRef = useRef<naver.maps.InfoWindow | null>(null);

    useEffect(() => {
        if (mapContainerRef.current === null) {
            return;
        }

        const map = new window.naver.maps.Map(mapContainerRef.current);
        const infoWindow = new window.naver.maps.InfoWindow({
            position: map.getCenter(),
            content: '',
            // InfoWindow를 마커 왼쪽에 표시 (x: 음수 = 왼쪽, y: 음수 = 위)
            pixelOffset: new window.naver.maps.Point(-100, -50),
        });

        mapInstanceRef.current = map;
        infoWindowInstanceRef.current = infoWindow;
    }, []);

    const markAddress = (x: string, y: string, addressName: string) => {

        const point = new window.naver.maps.Point(Number(x), Number(y));

        if (mapInstanceRef.current === null || infoWindowInstanceRef.current === null) {
            return;
        }

        const map = mapInstanceRef.current;
        const infoWindow = infoWindowInstanceRef.current;

        infoWindow.setContent(createInfoWindowContent(addressName));

        map.setCenter(point);
        infoWindow.open(map, point);
    };

    return {
        address,
        setAddress,

        mapContainerRef,

        markAddress,
    };
}
