import React, { createContext, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  export const CartContext =createContext();

  export const CartProvider=({children})=>{
    console.log(children)
    const[cart,setCart]=useState([]);



    const fetchCart = async () => {
          const res = await fetch('https://fakestoreapi.com'); 
          const data = await res.json();
          setCart(data);
      };

      useEffect(()=>{
        fetchCart();
    },[])

    const addProduct=(product)=>{
        setCart([...cart,product])
        toast.success("Added to Cart");
    }

    const deleteProduct=(productId)=>{
        const newCart=cart.filter((item)=>item.id!==productId)
        setCart(newCart)
    }

    const clearCart=()=>{
        setCart([])
    }
  
  return (
    <div>
    <CartContext.Provider value={{cart,addProduct,deleteProduct,clearCart}}>
        {children}
    </CartContext.Provider>
      
    </div>
  )
  }


