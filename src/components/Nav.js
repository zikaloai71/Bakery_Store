import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
// import { collection ,getDocs } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "./components.css";
import logo from "../images/Logo2.png";
import LoadingComponent from "./LoadingComponent";

export default function Nav(props) {
  const {products} = props;
  const { user  } = useContext(AuthContext);
  const navigate = useNavigate();
 

   
  // if(user){
  // if(usersCarts.length===0){
  //   return <LoadingComponent />
  //  }
  //  else{
  //   const userCart = usersCarts.find((user) => {
  //     let userId= auth.currentUser.uid;
  //      return user.uid === userId;
  //    });
  //    setItemsInCart(userCart.products.length)
  //  }
  // } 

   
  // if(user){
  // if(usersCarts.length===0){
  //   return <LoadingComponent />
  //  }
  //  else{
  //   const userCart = usersCarts.find((user) => {
  //     let userId= auth.currentUser.uid;
  //      return user.uid === userId;
  //    });
  //    setItemsInCart(userCart.products.length)
  //  }
  // }

   
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
              <i className="fa-solid fa-cart-shopping"><sup>{products}</sup></i>
             
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
