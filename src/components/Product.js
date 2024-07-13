import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Product.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Header1 from './Header1';

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState('');
  const { addProduct } = useContext(CartContext);

  async function fetchData() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.log('Error is : ', err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [value, products]);

  const sortSmallest = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const sortLargest = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <>
      <div>
        <Header1 />
        <div className='search-bar'>
          <input
            type='search'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className='button'>
          <label className='label'>Sort: </label>
          <button onClick={sortSmallest}>Min To Max</button>
          {'   '}
          <button onClick={sortLargest}>Max To Min</button>
        </div>
        <div className='product-list'>
          {filteredProducts.map((item) => (
            <div key={item.id} className='product'>
            <div className='product-main'>
              <Link to={`/${item.id}`}>
                <img src={item.image} alt={item.title} width='100' />
              </Link>
              <p>{item.title.length > 13 ? item.title.slice(0, 25) : item.title}</p>
              <p>${item.price}</p>
              </div>
              <Button variant='light' onClick={() => addProduct(item)}>Add to cart </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
