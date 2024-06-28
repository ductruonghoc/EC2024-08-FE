// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/shopLayout'; // Your shared layout component
import { Category } from './pages/Shop';
import './assets/css/default.css'

function App() {
  const sampleShopItem = [
    {
      "type": "Bicostti",
      "item":[
        {
          "name": "Bicossti Trà Xanh"
        }
      ]
    },
    { 
      "type": "Bánh Quy" ,
      "item":[
        {
          "name": "Bánh Quy Cacao"
        }
      ]
    },
    { 
      "type": "Bánh Dứa" ,
      "item":[
        {
          "name": "Bánh Dứa Dừa"
        }
      ]
    }
  ]
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route path="/" exact element={<Category items={sampleShopItem} />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
