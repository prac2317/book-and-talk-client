import axios from 'axios';
import api from './api.ts';

const mapApi = axios.create(api.defaults);
mapApi.defaults.headers.common['x-ncp-apigw-api-key-id'] = import.meta.env.VITE_NAVER_CLIENT_ID;
mapApi.defaults.headers.common['x-ncp-apigw-api-key'] = import.meta.env.VITE_NAVER_CLIENT_SECRET;

export const fetchMapApi = async () =>
  mapApi.get(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_CLIENT_ID}ra4y2dvddo&submodules=panorama,geocoder,drawing,visualization`,
  );

//oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=ra4y2dvddo&submodules=panorama,geocoder,drawing,visualization
export default mapApi;
