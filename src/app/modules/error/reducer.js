import { handleActions } from 'redux-actions';
import { GLOBAL_ERROR } from './actions';

const initialState = null;

export default handleActions({
  [GLOBAL_ERROR]: (state, { payload }) => payload
}, initialState);
