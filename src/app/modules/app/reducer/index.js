import { combineReducers } from 'redux';

import error from './error';
import weather from './weather';

export default combineReducers({
  error,
  weather
});
