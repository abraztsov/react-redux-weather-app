import { createAction } from 'redux-actions';
import { SHOW_GLOBAL_ERROR, HIDE_GLOBAL_ERROR } from './types';

const errorDisplayingTimeout = 5 * 1000;

export const showGlobalError = createAction(SHOW_GLOBAL_ERROR);
export const hideGlobalError = createAction(HIDE_GLOBAL_ERROR);

export const setAndShowGlobalError = (error, timeout = errorDisplayingTimeout) => (dispatch) => {
  dispatch(showGlobalError(error));
  setTimeout(() => dispatch(hideGlobalError()), timeout);
};
