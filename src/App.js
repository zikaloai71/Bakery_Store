import "./App.css";
import { db } from "./firebase-config";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/auth";
import React, { useState , useEffect} from "react";
import { collection , getDocs  } from "firebase/firestore";
import data from "./data";
import { auth } from "./firebase-config";
import {
  doc,
  updateDoc,
  arrayUnion,
  
} from "firebase/firestore";


function App() {
  const [usersCarts,setUsersCarts]=useState([]);
  const cartCollectionRef=collection(db,"carts");
  useEffect(()=>{
    const getUsersCarts=async()=>{
      const usersData = await getDocs(cartCollectionRef);
      setUsersCarts(usersData.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsersCarts()
  })
  
  
  async function addProduct(title, price) {
    let userId=auth.currentUser.uid;
    const userCart = usersCarts.find((user) => {
      return user.uid === userId;
    });
    if (userCart.uid === userId) {
      const cartDoc = doc(db, "carts", userCart.uid);
      let product = {
        name: title,
        price: price,
        quantity: 1,
      };
      await updateDoc(cartDoc, { products: arrayUnion(product) });
    }
  }

  return (
    <AuthProvider >
      <Router>
        <Nav  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Cart"
            element={
              <Cart   usersCarts={usersCarts}  />
            }
          />
          <Route
            path="/Products"
            element={<Products data={data}   addProduct={addProduct}   />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };