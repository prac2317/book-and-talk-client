import { useEffect, useRef, useState } from 'react';

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

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

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
        });

        mapInstanceRef.current = map;
        infoWindowInstanceRef.current = infoWindow;
    }, []);

    const markAddress = (x: string, y: string) => {
        // todo: 좌표 등록 로직 분리하기
        setLatitude(address.y);
        setLongitude(address.x);

        const point = new window.naver.maps.Point(Number(x), Number(y));

        if (mapInstanceRef.current === null || infoWindowInstanceRef.current === null) {
            return;
        }

        const map = mapInstanceRef.current;
        const infoWindow = infoWindowInstanceRef.current;

        // todo: 마커 html 및 css 수정
        infoWindow.setContent(
            [
                '<div style="padding:10px;min-width:200px;line-height:150%;">',
                '<h4 style="margin-top:5px;">검색 주소 : ' + address.address_name + '</h4><br />',
                '</div>',
            ].join('\n'),
        );

        map.setCenter(point);
        infoWindow.open(map, point);
    };

    return {
        address,
        setAddress,
        latitude,
        longitude,

        mapContainerRef,

        markAddress,
    };
}
