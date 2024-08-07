// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShopLayout from './layouts/shopLayout'; // Your shared layout component
import StaffLayout from './layouts/staffLayout';

import { Category } from './pages/Shop';
import { ReceiptQueue } from './pages/Staff';

import './assets/css/default.css'

import sellGroup from './assets/testData/sellGroup';
import orderQueue from './assets/testData/orderQueue';
import LoginLayout from './layouts/loginLayout';
import { Provider} from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path='/' element={<LoginLayout />}/>
          <Route path="/Shop" element={<ShopLayout />}>
            <Route path="/Shop/:method?/:key?" element={<Category items={sellGroup} />}></Route>
          </Route>
          <Route path='/Staff' element={<StaffLayout />}>
            <Route path='/Staff' element={<ReceiptQueue receipts={orderQueue}></ReceiptQueue>}></Route>
          </Route>
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
