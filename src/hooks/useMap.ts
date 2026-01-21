import { useEffect, useRef, useState } from 'react';
import { createInfoWindowContent } from '@features/map/createInfoWindowContent.ts'

import "ol/ol.css";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import { XYZ } from 'ol/source';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay.js';

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

    const mapContainerOpenLayersRef = useRef<HTMLDivElement>(null);
    const mapInstanceOpenLayersRef = useRef<Map>(null);
    const overlayRef = useRef<Overlay>(null);

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

        initMapOpenLayers();

    }, []);

    const initMapOpenLayers = () => {

        // Map 인스턴스 생성
        if (mapContainerOpenLayersRef.current === null) {
            return;
        }
        const mapOpenLayers = new Map({
            target: mapContainerOpenLayersRef.current,
            layers: [
                new TileLayer({
                    // source: new OSM()
                    source: new XYZ({
                        url: 'https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                        attributions: '© OpenStreetMap contributors, © CARTO'
                    })
                })
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: fromLonLat([126.97, 37.56]), // 서울 좌표
                zoom: 12
            })
        });

        mapInstanceOpenLayersRef.current = mapOpenLayers;

        // InfoWindow(Overlay) 생성
        const overlay = new Overlay({});

        overlayRef.current = overlay;
    }

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

    const markAddressOpenLayers = (x: string, y: string, addressName: string) => {

        // Map 인스턴스, infoWindow(Overlay) 가져오기
        if (mapInstanceOpenLayersRef.current == null) {
            console.log("map 인스턴스 없음");
            return;
        }
        const map = mapInstanceOpenLayersRef.current;

        if (overlayRef.current == null) {
            console.log("overlay 없음");
            return;
        }
        const overlay = overlayRef.current;

        // 위치 좌표
        const position = fromLonLat([Number(x), Number(y)])

        // infoWindow에 들어갈 내용(html 요소) 생성
        const infoWindowContent = createInfoWindowContent(addressName);
        const infoWindowElement = document.createElement('div');
        infoWindowElement.innerHTML = infoWindowContent;

        // infowWindow 지도에 그리기
        overlay.setElement(infoWindowElement);
        overlay.setPositioning('top-center');
        overlay.setPosition(position);
        map.addOverlay(overlay);

        // 지도 포커스 이동
        const view = map.getView();
        view.setZoom(15);
        view.setCenter(position);
        map.setView(view);
    }

    return {
        address,
        setAddress,

        mapContainerRef,

        markAddress,

        mapContainerOpenLayersRef,
        markAddressOpenLayers
    };
}
