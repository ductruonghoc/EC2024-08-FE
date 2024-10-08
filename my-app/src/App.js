// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShopLayout from './layouts/shopLayout'; // Your shared layout component
import StaffLayout from './layouts/staffLayout';

import { Category, PlaceOrderComponent } from './pages/Shop';
import { ReceiptQueue } from './pages/Staff';
import { Income } from './pages/Manager';

import './assets/css/default.css'

import sellGroup from './assets/testData/sellGroup';
import { orderQueue } from './assets/testData/orderQueue';
import LoginLayout from './layouts/loginLayout';
import { Provider } from 'react-redux';
import store from './store/store';
import ManagerLayout from './layouts/managerLayout';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<LoginLayout />} />
          <Route path="/Shop" element={<ShopLayout />}>
            <Route path="/Shop/:method?/:key?" element={<Category items={sellGroup} />}></Route>
            <Route path='/Shop/Placeorder' element={<PlaceOrderComponent />}></Route>
          </Route>
          <Route path='/Staff' element={<StaffLayout />}>
            <Route path='/Staff' element={<ReceiptQueue receipts={orderQueue}></ReceiptQueue>}></Route>
            <Route path='/Staff/Income' element={<Income />}></Route>
          </Route>
          <Route path='/Manager' element={<ManagerLayout />}>
            <Route path='' element={<Income />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
