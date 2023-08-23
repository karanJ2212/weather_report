import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countrycard from './Countrycard';
import {
  fetchCountry,
  fetchSingleCountry,
} from '../../Redux/Country/CountryAction';
import './Countrylist.css';

export default function Countrylist() {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countriesStatus);

  const handleCountrySelect = (countryName) => {
    setSelectedCountry(countryName);
    dispatch(fetchSingleCountry(countryName));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <div className="countries-section" data-testid="countries-wrapper">
      <div className="header-section">
        <h1 className="title-header">World Weather</h1>
        <p className="choose-country">Choose a country</p>

        {/* drop down */}
        <select
          className="country-dropdown"
          value={selectedCountry}
          onChange={(e) => handleCountrySelect(e.target.value)}
        >
          <option value="">Select a country</option>
          {Object.keys(countries).map((countryName) => (
            <option key={countryName} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>

        <div className="country-list-header">
          <h2 className="country-list-title">Countries</h2>
        </div>
      </div>
      <div className="country-card-container">
        {selectedCountry ? (
          <Countrycard
            key={countries[selectedCountry].iso3}
            name={countries[selectedCountry].name}
            states={countries[selectedCountry].states}
            iso3={countries[selectedCountry].iso3}
          />
        ) : (
          Object.values(countries).map((country) => (
            <Countrycard
              key={country.iso3}
              name={country.name}
              states={country.states}
              iso3={country.iso3}
            />
          ))
        )}
      </div>
    </div>
  );
}
