import { compose } from 'redux';
const getState = (state) => state;

const getAppModule = compose(
  ({ app }) => app,
  getState
);

const getWeather = compose(
  ({ weather }) => weather,
  getAppModule
);

export const getCities = compose(
  ({ cities }) => cities,
  getWeather
);

export const getError = compose(
  ({ error }) => error,
  getAppModule
);

export const getGeoCity = compose(
  ({ geoCity }) => geoCity,
  getWeather
);
