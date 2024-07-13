import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header1 from './Header1';
import './ProductDetails.css'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

function ProductDetails() {
    const [value, setValue] = useState({}); 
    const { id } = useParams();
    const {addProduct}=useContext(CartContext)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setValue(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log("Fetching data");
    }, [id]);



    return (
        <>
        <Header1/>
        <div className="product-details" key={id}>
            <h2>{value.title}</h2>
            <img src={value.image} alt={`${value.title} Poster`} />
            <h3>Price: Rs {value.price}</h3>
            <h3>Rating: {value.rating?.rate}</h3> 
            <Button variant="light" onClick={()=>addProduct(value)}>Add to cart </Button>
        </div>
        </>
    );
}

export default ProductDetails;
