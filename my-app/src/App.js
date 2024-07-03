// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/shopLayout'; // Your shared layout component
import { Category } from './pages/Shop';
import './assets/css/default.css'
import sellGroup from './assets/testData/sellGroup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Shop" element={<Layout />}>
          <Route path="/Shop" element={<Category items={sellGroup} />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
