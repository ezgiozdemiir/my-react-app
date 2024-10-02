import React from 'react';

 function Cart({ cart, totalCost, customerBalance }) {
   
      const checkBalance = (totalCost, customerBalance) => {
        if (customerBalance >= totalCost) {
          return 'Customer can buy cart products.';
        } else {
          return 'Customer cannot buy cart products. Please remove some products.';
        }
      };
    
  
   return (
     <div className="App">
        <h1>Cart</h1>
      <p>Your Balance: ${customerBalance}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
          {item.name} - ${item.price} - Color: {item.selectedColor} - Quantity: {item.quantity} 
        </li>
        ))}
      </ul>
      <p>Total Cost: ${totalCost}</p>
      <p>{checkBalance(totalCost, customerBalance)}</p>
     </div>
   );
 }
export default Cart;
