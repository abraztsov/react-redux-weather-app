import { combineReducers } from 'redux';
import app from 'app/reducer';
import error from 'error/reducer';

export default combineReducers({
  app,
  error
});
