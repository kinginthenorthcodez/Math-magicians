import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Uipadcalculator from './component/uipad';
import Header from './pages/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';
// <Uipadcalculator />
const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Uipadcalculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
