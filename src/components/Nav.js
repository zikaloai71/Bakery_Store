import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
// import { collection ,getDocs } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "./components.css";
import logo from "../images/Logo2.png";

export default function Nav(props) {
  
  const { user  } = useContext(AuthContext);
  const navigate = useNavigate();
 

  async function handleSignOut() {
    await signOut(auth);
    navigate("/LogIn");
  }

  return (
    <nav className="navContainer">
      <ul className="navItems">
        <Link className="linkage" to="/">
          <img className="logo" src={logo} alt="logo" />
          <li> HOME</li>
        </Link>
        <li className="navUserEnter">
          {user ? 
            <>
              <Link className="linkage" to="/Products">
                Our Products
              </Link>
              <Link className="linkage" to="/Cart">
              <i className="fa-solid fa-cart-shopping"><sup>0</sup></i>
             
              </Link>
              <Link className="linkage" onClick={handleSignOut} to="/LogIn">
                Log out
              </Link>
            </>
           : (
           <>
              <Link className="linkage" to="/SignUp">
                Sign up
              </Link>
              <Link className="linkage" to="/LogIn">
                Log In
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
