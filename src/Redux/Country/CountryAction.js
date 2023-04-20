import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCountry = createAsyncThunk(
  'countries/fetchCountry',
  async () => {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/states');
    const countriesData = response.data.data.reduce((accumulator, country) => {
      const updatedCountries = { ...accumulator };
      updatedCountries[country.name] = country;
      return updatedCountries;
    }, {});
    return countriesData;
  },
);
export default fetchCountry;
