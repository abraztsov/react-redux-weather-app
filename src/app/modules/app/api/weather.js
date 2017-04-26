import http from 'lib/http';
import { APPID } from 'src/app/constants';
import * as r from '../api.routes';
const APPID_Q = `&APPID=${APPID}`;

export const getCityByName = ({ city }) => http.get(`${r.GET_CITY_BY_NAME}${city}${APPID_Q}`);
export const getCityByGeo = ({ lat, lon }) => http.get(`${r.GET_CITY_BY_COORDINATES}lat=${lat}&lon=${lon}${APPID_Q}`);
