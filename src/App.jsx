import React, { useEffect, useState } from 'react';
import { SelectDemo } from './SelectDemo';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <SelectDemo  setSelectedFruit={setSelectedFruit} />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.stock} in stock - {product.color}
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;
