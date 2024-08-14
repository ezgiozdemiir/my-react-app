import React, { useEffect, useState } from 'react';
import { SelectDemo } from './SelectDemo';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleColorChange = (productId, color) => {
    setSelectedColor(prevState => ({
      ...prevState,
      [productId]: color,
    }));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>Select Color:</div>
              <SelectDemo
                colorOptions={product.colorOptions}
                setSelectedColor={(color) => handleColorChange(product.id, color)}
              />
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
              {product.colorOptions.map(color => (
                <div
                  key={color}
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: selectedColor[product.id] === color ? '2px solid black' : 'none',
                  }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;