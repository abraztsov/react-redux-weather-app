import React, { PropTypes } from 'react';

import s from './style';

const logStacktrace = (stack = 'No stacktrase provided.') =>
  console.warn(`%c ${stack}`, 'font-weight: bold;');

const Error = ({ message, stack }) => message ?
  (<div className={s.root} onClick={() => logStacktrace(stack)}>
    <div className={s.message}>
      {message}
    </div>
  </div>)
  : null;

Error.propTypes = {
  message: PropTypes.string,
  stack: PropTypes.string
};

export default Error;
