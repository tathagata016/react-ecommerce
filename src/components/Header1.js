import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import './Header1.css'
import { BiStore } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";



const Header1 = () => {
  const {userName}=useContext(UserContext)
  const {cart}=useContext(CartContext)

  console.log(cart.length);
  return (
    <> 
      <div className="header1">
      <nav>
          <h2 className="fistName"><BiStore />FlipStore</h2>
        <ul className="product-cart">
          <li>
            <Link className="linking" to="/product">Product  </Link>
          </li>
          <li>
            <Link className="linking" to="/login">Login</Link>
          </li>
          <li>
            <Link className="linking" to="/signup">SignUp</Link>
          </li>
          <li>
            <Link className="linking" to="/signout">SignOut</Link>
          </li>
          <li> 
            <Link className="linking" to="/cart"><BsCart/>({cart.length})</Link>
          </li>
       
        </ul>
        
      </nav>
      <p className="linking">Welcome:{userName?`${userName.displayName}`:"Guest"}</p>
      </div>
    </>
  )
};

export default Header1;