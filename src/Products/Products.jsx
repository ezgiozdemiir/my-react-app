import React, { useEffect, useState } from 'react';
import { SelectDemo } from '../SelectDemo';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../../@/components/ui/button';

function Products({handleAddingCart}) {

    //Keeps products from API fetch and selectedColor from child "SelectDemo.jsx"
    const [products, setProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState({});
    const [quantities, setQuantities] = useState({});
  
    //Fetches data and store in product with using setProduct()
    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  
    //Update color of the product and updates cart in App.jsx
    const handleColorChange = (productId, color) => {
      setSelectedColor(prevState => ({
        ...prevState,
        [productId]: color,
      }));
    };
  
    //Update quantity of the product and updates cart in App.jsx
    const handleQuantityChange = (productId, quantity) => {
      setQuantities(prevState => ({
        ...prevState,
        [productId]: quantity
      }));
    };
  
  return (
    <div className="app-container">
      <h1 className="app-header">Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}  className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <div className="color-selection">
              <div>Select Color:</div>
              {/* Color is transfered to Product.tsx from SelectDemo.tsx. When the color changes it triggers handleColorChange function.*/}
              <SelectDemo
                colorOptions={product.colorOptions}
                setedColor={(color) => handleColorChange(product.id, color)}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>
                Quantity:
                <input 
                  type="number" 
                  value={quantities[product.id] || 1} 
                  min="1"
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)} 
                  style={{ width: '50px', marginLeft: '10px' }}
                />
              </label>
            </div>
            <Button className="button"  onClick={() => handleAddingCart(product, selectedColor[product.id], quantities[product.id] || 1)}>
              <ShoppingCart className="cart-button-icon" /> Add Cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;