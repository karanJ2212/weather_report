import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Statecard from './Statecard';
import Weather from '../Weather/Weather';
import './Statelist.css';

export default function Statelist() {
  const location = useLocation();
  const countryName = location.state.name;
  const countryState = useSelector((state) => (state.countries.countries[countryName]));
  return (
    <div className="statesPage" data-testid="statesContent">
      <div className="weatherInfo">
        <Weather
          name={countryName}
        />
      </div>
      <div className="weather-padding chooseState">
        <h2>
          States
        </h2>
        <p>
          Choose a state:
          {' '}
          {countryState.states.length}
          {' '}
          States
        </p>
      </div>
      <div className="states weather-padding">
        {countryState.states.map((state) => (
          <Statecard
            name={state.name}
            key={state.name}
            code={state.state_code}
          />
        ))}
      </div>
    </div>
  );
}
