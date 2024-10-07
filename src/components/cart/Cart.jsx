import React, { useMemo } from 'react';
import useCartStore from '../../store/CartStore';

 
function Cart() {
  const cart = useCartStore(state => state.cart);
  const totalCost = useCartStore(state => state.totalCost);
  const customerBalance = useCartStore(state => state.customerBalance);
  const removeFromCart = useCartStore(state => state.removeFromCart);

  // Use useMemo to avoid recalculating the balance message on every render
  const balanceMessage = useMemo(() => {
    return customerBalance >= totalCost
      ? 'Customer can buy cart products.'
      : 'Customer cannot buy cart products. Please remove some products.';
  }, [customerBalance, totalCost]);

  return (
    <div>
      <h2>Cart</h2>
      <p>Your Balance: ${customerBalance}</p>

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price} - Color: {item.selectedColor} - Quantity: {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <p>Total Cost: ${totalCost}</p>
      <p>{balanceMessage}</p>
    </div>
  );
}

export default Cart;
