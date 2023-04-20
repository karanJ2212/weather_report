import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countrylist from './Components/Countrylist/Countrylist';
import Navbar from './Components/Navbar/Navbar';

import Statelist from './Components/States/Statelist';
import Weather from './Components/Weather/Weather';

function App() {
  return (
      <BrowserRouter>
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countrylist />} />
          <Route path="Weather" element={<Weather />} />
          <Route path="Statelist" element={<Statelist />} />
        </Routes>
    </>
      </BrowserRouter>
  );
}

export default App;
