import React, { Component, PropTypes } from 'react';
import 'normalize.css';

import Error from '../Error';
import Weather from '../Weather';
import s from './style';

export default class AppLayout extends Component {
  static propTypes = {
    error: PropTypes.object
  }

  render() {
    const {
      error
    } = this.props;
    return (
      <div className={s.root}>
        <h1>Weather App</h1>
        <Weather />
        <Error {...error} />
      </div>
    );
  }
}
