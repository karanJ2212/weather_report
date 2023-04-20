/*eslint-disable*/

import { configureStore } from '@reduxjs/toolkit';
import countries from './Country/Countryslice';
import weather from './Weather/Weatherslice'

const store = configureStore({
  reducer: {
    countries: countries,
    weather:weather
  },
});

export default store;
