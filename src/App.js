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
import React, { useState , useEffect } from "react";
import { arrayRemove, collection , getDocs  } from "firebase/firestore";
import data from "./data";
import { auth } from "./firebase-config";
import {
  doc,
  updateDoc,
  arrayUnion,

} from "firebase/firestore";


function App() {
  const [usersCarts,setUsersCarts]=useState([]);
  let [itemsInCart,setItemsInCart]=useState(0);
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
        setItemsInCart(userCart.products.length+1);
      }
    }
  const onRemove = async (title,price) => {
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
      await updateDoc(cartDoc, { products: arrayRemove(product) });
      setItemsInCart(userCart.products.length-1);
      
    }
  };

//   async function increaseQuantity(title){
//     // const cartDoc = doc(db, "carts", userCart.uid);
//     if (userCart.uid === userLogId ) {
//      for(let i=0;i<userCart.products.length;i++){
//      if (userCart.products[i].name===title){
//       userCart.products[i].quantity+=1;
//       break;
//     //  await updateDoc(cartDoc,{userCart.products[i].quantity:increment(1)});
//      }
//      }
//   }
// }
  //   const onAdd = async (product) => {
  //   let userId=auth.currentUser.uid;
  //   const userCart = usersCarts.find((user) => {
  //       return user.uid === userId;
  //     });
  //   const cartDoc = doc(db, "carts", userCart.uid);
  //   const exist = userCart.products.find((x) => x.name === product.name);
  //   if (exist) {

  //     console.log(exist.quantity+=1)
  //     // await updateDoc(cartDoc,{products:arrayUnion(quantity + 1)});
  //     // setCartItems(
  //     //   cartItems.map((x) =>
  //     //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //     //   )
  //     // );
  //   } else {
  //     return
  //     // setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };



  return (
    <AuthProvider >
      <Router>
        <Nav itemsInCart={itemsInCart}   />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Cart"
            element={
              <Cart   usersCarts={usersCarts} onRemove={onRemove}  />
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


