import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';
import { UserContextProvider } from './context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserContextProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </UserContextProvider>
  </React.StrictMode>
);