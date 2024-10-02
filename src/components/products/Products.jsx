import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './Products.css'
import { Button } from '../../../@/components/ui/button';
import { SelectDemo } from '../../shared/select/SelectDemo';


function Products({handleAddingCart}) {

    //Keeps products from API fetch and selectedColor from child "SelectDemo.jsx"
    const [products, setProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState({});
    const [quantities, setQuantities] = useState({});
    //If I make the buttons from products.type when I apply the filter just one filtered product type remains and other disappear. To see all types I should use these 2 useStates:
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    //To set unique types for filter buttons.
    const uniqueTypes = [...new Set(products.map(product => product.type))];

    //Fetches data and store in product with using setProduct()
    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data),
          setFilteredProducts(data);
    })}, []);
  
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

    const filterProducts = (type) => {
      setActiveFilter(type);
      if(type === 'all'){
        setFilteredProducts(products)
      } else {
        fetch(`http://localhost:3000/products/type/${type}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
    })
    .then(data => setFilteredProducts(data))
    .catch(error => console.error('Fetch error:', error));
      }
  
    }
  
  return (
    <div className="app-container">
      <h1 className="app-header">Products</h1>
      <div className="filter-button-group">
        <ul className="filter-buttons">
      <Button className="filter-button" onClick={() =>filterProducts('all')}>ALL</Button>
      {uniqueTypes.map((type, index) => (
        <li key={index}><Button className="filter-button" onClick={() =>filterProducts(type)}>{type.toUpperCase()}</Button></li>
      ))}
      </ul>
      </div>
     <div className="cards">
         <ul className="product-list">
        {filteredProducts.map(product => (
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
   
    </div>
  );
}

export default Products;