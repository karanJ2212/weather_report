import { createSlice } from '@reduxjs/toolkit';
import fetchCountry from './CountryAction';

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
      .addCase(fetchCountry.pending, (state) => ({ ...state, countriesStatus: 'loading' }))
      .addCase(fetchCountry.fulfilled, (state, action) => ({ ...state, countriesStatus: 'succeeded', countries: action.payload }))
      .addCase(fetchCountry.rejected, (state, action) => ({ ...state, countriesStatus: 'failed', countriesError: action.error.message }));
  },
});

export default countriesSlice.reducer;
