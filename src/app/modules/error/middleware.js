import { globalError } from './actions';

export default () => next => action => {
  const result = next(action);

  if (action.error) {
    next(globalError({
      name: action.payload.name,
      message: action.payload.message,
      stack: action.payload.stack
    }));
  }

  return result;
};
