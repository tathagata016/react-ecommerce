import Product from './components/Product';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import ProductDetails from './components/ProductDetails';




function App() {
  return (
    <div className="App">
       <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut/>} />
        <Route path="/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
