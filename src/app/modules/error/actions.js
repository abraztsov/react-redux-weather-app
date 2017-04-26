import { createAction } from 'redux-actions';

export const GLOBAL_ERROR = '@@error/GLOBAL_ERROR';

export const globalError = createAction(GLOBAL_ERROR);
