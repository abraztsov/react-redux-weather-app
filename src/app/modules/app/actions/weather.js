import { createAction } from 'redux-actions';
import api from 'app/api';
import { ADD_CITY, REMOVE_CITY, GET_CITY_BY_GEO } from './types';

export const addCity = createAction(ADD_CITY,
  (data) => api.weather.getCityByName(data));

export const removeCity = createAction(REMOVE_CITY);

export const getCityByGeo = createAction(GET_CITY_BY_GEO,
  (data) => api.weather.getCityByGeo(data));
