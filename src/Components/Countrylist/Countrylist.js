import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countrycard from './Countrycard';
import fetchCountry from '../../Redux/Country/CountryAction';
import './Countrylist.css';

export default function Countrylist() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countriesStatus);

  if (status === 'loading') {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="countries-section" data-testid="countries-wrapper">
      <div className="header-section">
        <h1 className="title-header">World Weather</h1>
        <p className="choose-country">Choose a country</p>
        <div className="country-list-header">
          <h2 className="country-list-title">Countries</h2>
        </div>
      </div>
      <div className="country-card-container">
        {Object.values(countries).map((country) => (
          <Countrycard
            key={country.iso3}
            name={country.name}
            states={country.states}
            iso3={country.iso3}
          />
        ))}
      </div>
    </div>
  );
}
