import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Weather from './Weather';
import { addCity, removeCity, getCityByGeo } from 'app/actions';
import { getCities, getGeoCity } from 'app/selectors';

const mapStateToProps = (state) => ({
  cities: getCities(state),
  geoCity: getGeoCity(state)
});

const mapDispatchToprops = { addCity, removeCity, getCityByGeo };

@connect(mapStateToProps, mapDispatchToprops)
export default class WeatherContainer extends Component {
  static propTypes = {
    cities: PropTypes.array,
    addCity: PropTypes.func
  }

  state = {
    city: ''
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoPosition);
    }
  }

  setGeoPosition = ({ coords: { latitude, longitude } }) => {
    this.props.getCityByGeo({ lat: latitude, lon: longitude });
  }

  onAddCityClick = () => {
    this.props.addCity({ city: this.state.city });
  }

  onRemoveCityClick = (id) => {
    this.props.removeCity(id);
  }

  handleInputChange = (city) => {
    this.setState({ city });
  }

  render() {
    return (
      <Weather
        onAddCityClick={this.onAddCityClick}
        onRemoveCityClick={this.onRemoveCityClick}
        handleInputChange={this.handleInputChange}
        {...this.props}
      />
    );
  }
}
