import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from './AppLayout';
import { setAndShowGlobalError } from 'app/actions';
import { getError } from 'app/selectors';

const mapStateToProps = (state) => ({ error: state.error, appError: getError(state) });
const mapDispatchToprops = { setAndShowGlobalError };

@connect(mapStateToProps, mapDispatchToprops)
export default class AppContainer extends Component {
  static propTypes = {
    error: PropTypes.object
  }

  componentWillReceiveProps({ error: newError }) {
    const {
      error: oldError,
      setAndShowGlobalError
    } = this.props;

    if (newError !== oldError) setAndShowGlobalError(newError);
  }

  render() {
    return (
      <Layout error={this.props.appError} />
    );
  }
}
