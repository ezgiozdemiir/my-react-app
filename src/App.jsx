import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import { Navigation } from './shared/navigation/Navigation';


 function App() {
   return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </div>
    );
 }

 export default App;