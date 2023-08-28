import { createSlice } from '@reduxjs/toolkit';
import { fetchCountry, fetchSingleCountry } from './CountryAction';

const initialState = {
  countries: {},
  countriesStatus: 'idle',
  countriesError: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => ({
        ...state,
        countriesStatus: 'loading',
      }))
      .addCase(fetchCountry.fulfilled, (state, action) => ({
        ...state,
        countriesStatus: 'succeeded',
        countries: action.payload,
      }))
      .addCase(fetchCountry.rejected, (state, action) => ({
        ...state,
        countriesStatus: 'failed',
        countriesError: action.error.message,
      }))
      .addCase(fetchSingleCountry.pending, (state) => ({
        ...state,
        countriesStatus: 'loading',
      }))
      .addCase(fetchSingleCountry.fulfilled, (state, action) => ({
        ...state,
        countriesStatus: 'succeeded',
        countries: { [action.payload.name]: action.payload },
      }))
      .addCase(fetchSingleCountry.rejected, (state, action) => ({
        ...state,
        countriesStatus: 'failed',
        countriesError: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
