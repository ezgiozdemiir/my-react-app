import './App.css';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import { Navigation } from './Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


 function App() {
  //App managing the overall state of the cart and passing down the necessary data and functions to its child components (Products and Cart).
  //Product to Cart.
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const customerBalance = 100000;

  //This function is passed down to Products.js as a prop. When the user clicks the "Add Cart" button in Products.js, this function is called, allowing App.js to update the cart state.
  const handleAddingCart = (product, selectedColor, quantity) => {
    const cost = product.price * quantity;

    //If it would be at the same component, only product will be added in the function. ( setCart(prevCart => [
      //       ...prevCart, 
      //       { 
      //         ...product, 
      //         selectedColor: selectedColor[product.id], 
      //         quantity: quantity 
      //       }
      //     ]);)

      setCart(prevCart => [
        ...prevCart, 
        { 
          ...product, 
          selectedColor,
          quantity
        }
      ]);
    //Works in cart because total cost increases when you add some product to the cart.
      setTotalCost(prevCost => prevCost + cost)
    };
  
   return (
     <div className="App">
      <Navigation></Navigation>
       <Routes>
       <Route 
          path="/" 
          element={
            <Products 
              handleAddingCart={handleAddingCart} 
              cart={cart} 
              totalCost={totalCost}
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              totalCost={totalCost} 
              customerBalance={customerBalance} 
            />
          } 
        />
       </Routes>

     </div>
   );
 }

 export default App;