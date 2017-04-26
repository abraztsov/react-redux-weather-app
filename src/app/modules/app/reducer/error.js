import { handleActions } from 'redux-actions';
import { returnActionPayload } from 'src/app/reducer.helpers';
import { SHOW_GLOBAL_ERROR, HIDE_GLOBAL_ERROR } from 'app/actions/types';

const initialState = null;

export default handleActions({
  [SHOW_GLOBAL_ERROR]: returnActionPayload,
  [HIDE_GLOBAL_ERROR]: () => initialState
}, initialState);
