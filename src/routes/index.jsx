import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CoinList from '../pages/CoinList';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coin-list' element={<CoinList />} />
      <Route path='/coin-list/:id' />
    </Routes>
  );
};

export default Routers;
