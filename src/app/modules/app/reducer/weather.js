import { handleActions } from 'redux-actions';
import { ADD_CITY, REMOVE_CITY, GET_CITY_BY_GEO } from 'app/actions/types';
import { addToArray, removeItemFromArray } from 'src/app/reducer.helpers';
import { ACTION_STATUS } from 'src/app/constants/fetch';
const { SUCCESS } = ACTION_STATUS;

const initialState = {
  cities: [],
  geoCity: null
};

export default handleActions({
  [`${ADD_CITY}_${SUCCESS}`]: (state, { payload }) => ({
    ...state,
    cities: state.cities.length > 0 && state.cities.find(city => city.id === payload.id) ?
      state.cities : addToArray(state.cities, payload)
  }),
  [`${REMOVE_CITY}`]: (state, { payload }) => ({
    ...state,
    cities: removeItemFromArray(state.cities, (item) => payload === item.id)
  }),
  [`${GET_CITY_BY_GEO}_${SUCCESS}`]: (state, { payload }) => ({
    ...state,
    geoCity: payload
  })
}, initialState);
