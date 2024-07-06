// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShopLayout from './layouts/shopLayout'; // Your shared layout component
import StaffLayout from './layouts/staffLayout';

import { Category } from './pages/Shop';
import { OrderQueue } from './pages/Staff';

import './assets/css/default.css'

import sellGroup from './assets/testData/sellGroup';
import orderQueue from './assets/testData/orderQueue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Shop" element={<ShopLayout />}>
          <Route path="/Shop" element={<Category items={sellGroup} />}></Route>
        </Route>
        <Route path='/Staff' element={<StaffLayout />}>
          <Route path='/Staff' element={<OrderQueue item={orderQueue}></OrderQueue>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
