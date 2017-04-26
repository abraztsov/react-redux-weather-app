import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import globalErrorMiddleware from 'error/middleware';
import reducer from './reducer';
import { ACTION_STATUS } from './constants/fetch';
import { saveState, loadState } from './utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const middleware = composeEnhancers(applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({
    promiseTypeSuffixes: [ACTION_STATUS.FETCHING, ACTION_STATUS.SUCCESS, ACTION_STATUS.ERROR]
  }),
  globalErrorMiddleware
));

const store = createStore(reducer, persistedState, middleware);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
