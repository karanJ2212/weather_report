import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountry = createAsyncThunk('countries/fetchCountry', async () => {
  const response = await fetch(
    'https://countriesnow.space/api/v0.1/countries/states',
  );
  const data = await response.json();
  const countriesData = data.data.reduce((accumulator, country) => {
    const updatedCountries = { ...accumulator };
    updatedCountries[country.name] = country;
    return updatedCountries;
  }, {});
  return countriesData;
});

const fetchSingleCountry = createAsyncThunk(
  'countries/fetchSingleCountry',
  async (countryName) => {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/states',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: countryName,
        }),
      },
    );
    const data = await response.json();
    const singleCountryData = data.data[0]; // Assuming API response is an array
    return singleCountryData;
  },
);

export { fetchCountry, fetchSingleCountry };
