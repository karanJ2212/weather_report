import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountry = createAsyncThunk(
  'countries/fetchCountry',
  async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/states');
    const data = await response.json();
    const countriesData = data.data.reduce((accumulator, country) => {
      const updatedCountries = { ...accumulator };
      updatedCountries[country.name] = country;
      return updatedCountries;
    }, {});
    return countriesData;
  },
);
export default fetchCountry;
