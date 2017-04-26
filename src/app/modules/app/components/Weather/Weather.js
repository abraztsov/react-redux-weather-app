import React, { Component, PropTypes } from 'react';
import s from './style';
import cx from 'classnames';

export default class Weather extends Component {
  static propTypes = {
    cities: PropTypes.array,
    geoCity: PropTypes.object,
    onAddCityClick: PropTypes.func,
    onRemoveCityClick: PropTypes.func,
    handleInputChange: PropTypes.func
  }

  onAddCityClick = () => {
    this.props.onAddCityClick();
  }

  onRemoveClick = (id) => {
    this.props.onRemoveCityClick(id);
  }

  handleInputChange = (e) => {
    this.props.handleInputChange(e.target.value.trim());
  }

  render() {
    const {
      cities,
      geoCity
    } = this.props;
    const areCitiesExists = cities.length > 0;
    return (
      <div className={s.root}>
        <div>
          <input placeholder="City" onChange={this.handleInputChange} />
          <button onClick={this.onAddCityClick}>Add city</button>
        </div>

        {geoCity && <div className={cx(s.city, s.notRemovable)}>
          <div>
            <div className={s.name}>{geoCity.name}</div>
            <div className={s.coord}>GEO Position | Lat: {geoCity.coord.lat} | Lon: {geoCity.coord.lon}</div>
          </div>
          <div className={s.temp}>| {geoCity.main.temp} ℃</div>
        </div>}
        {areCitiesExists && <div className={s.cities}>
            {cities.map(city => (
              <div className={s.city} key={city.id}>
                <div className={s.name}>{city.name}</div>
                <div className={s.temp}>| {city.main.temp} ℃</div>
                <div className={s.remove} onClick={() => this.onRemoveClick(city.id)}>Remove</div>
              </div>
            ))}
        </div>}
      </div>
    );
  }
}
