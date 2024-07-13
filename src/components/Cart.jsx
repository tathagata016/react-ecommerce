
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header1 from './Header1';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css'


const Cart = () => {
  const { cart, deleteProduct, clearCart } = useContext(CartContext);
  
  const{navigate}=useNavigate()


  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  };

   
  const groupedCartItems = cart.reduce((groupedItems, currentItem) => {
    const { id} = currentItem;
    if (!groupedItems[id]) {
      groupedItems[id] = { ...currentItem, quantity: 1 };
    } else {
      groupedItems[id].quantity++;
    }
    return groupedItems;
  }, {});



  return (
    <>
     <Header1/>
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>
      {cart.length === 0 && <p className='para'>Your cart is empty</p>}
      <div className='displayCart'>   
      <ul>
        {Object.values(groupedCartItems).map((item, index) => (
          <li  key={index}>
          <div className={styles.listItem}>
          <img src={item.image} alt={item.title} width="100" onClick={()=>navigate('/product')}/>
           
            {item.title.length > 13 ? item.title.slice(0,25) :  item.title} - Rs {item.price}
            {item.quantity>1 && ` × ${item.quantity}`}
            {" "}
    
            <button onClick={() => deleteProduct(item.id)}>Remove</button>
            </div>         
           </li>
        
        ))}
        
      </ul>
      </div>
       
      {cart.length > 0 && (
        <div className={styles.cart_total}>
          <h3>Total: Rs: {calculateTotal().toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
