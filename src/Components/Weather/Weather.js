import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { fetchWeather } from '../../Redux/Weather/Weatherslice';
import './Weather.css';

export default function Weather({ name }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const stateName = location.state.name;
  const locationName = name || stateName;
  useEffect(() => {
    dispatch(fetchWeather(locationName));
  }, [dispatch, locationName]);
  const weatherInfo = useSelector((state) => state.weather);

  if (!weatherInfo.weather) {
    return <p className="loading">loading...</p>;
  }

  return (
    <div className="weather-container">
      <ul className="weather-padding">
        <li className="weather-image">
          <img src={weatherInfo.weather.condition.icon} alt="weater condition" className="weather-condition-icon" />
          <div>
            <div>
              <div>
                <h4 className="weather-condition-text">
                  {weatherInfo.weather.condition.text}
                </h4>
              </div>
              <h1 className="temp weather-temp-c">
                {weatherInfo.weather.temp_c}
              </h1>
              <p className="weather-temp-f">
                {weatherInfo.weather.temp_f}
              </p>
            </div>
            <h2 className="location-name">
              {weatherInfo.name}
            </h2>
            <div className="location-time">
              Localtime:
              {' '}
              {weatherInfo.localtime}
            </div>
            <div className="location-time">
              Last Updated:
              {' '}
              {weatherInfo.weather.last_updated}
            </div>
          </div>
        </li>
        <li className="location-container">
          <div>
            <h4 className="location-region">
              Region:
              {' '}
              {weatherInfo.region}
            </h4>
            <div>
              <p>
                Lat:
                {' '}
                {weatherInfo.lat}
              </p>
              <p>
                Lon:
                {' '}
                {weatherInfo.lon}
              </p>
            </div>
          </div>
          <div className="location-container">
            <IoLocationSharp className="location-icon-img" />
          </div>
        </li>
        <h4 className="condition">
          Condition:
        </h4>
        <li className="condition-container">
          <div className="weather-list">
            Cloud:
            {' '}
            {weatherInfo.weather.cloud}
          </div>
          <div>
            Feelslike_c:
            {' '}
            {weatherInfo.weather.feelslike_c}
          </div>
          <div className="weather-list">
            Pressure in:
            {' '}
            {weatherInfo.weather.pressure_in}
          </div>
          <div>
            Pressure mb:
            {' '}
            {weatherInfo.weather.pressure_mb}
          </div>
          <div className="weather-list">
            UV:
            {' '}
            {weatherInfo.weather.uv}
          </div>
        </li>
        <li className="condition">
          <h4>
            Air quality
          </h4>
          <div>
            Co:
            {' '}
            {weatherInfo.weather.air_quality.co}
          </div>
          <div>
            NO2:
            {' '}
            {weatherInfo.weather.air_quality.no2}
          </div>
          <div>
            O3:
            {' '}
            {weatherInfo.weather.air_quality.o3}
          </div>
          <div>
            pm2_5:
            {' '}
            {weatherInfo.weather.air_quality.pm2_5}
          </div>
        </li>
      </ul>
    </div>
  );
}
Weather.propTypes = {
  name: PropTypes.string,
};
Weather.defaultProps = {
  name: '',
};
