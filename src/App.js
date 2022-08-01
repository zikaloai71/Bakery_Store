import "./App.css";
import { db } from "./firebase-config";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import LoadingComponent from "./components/LoadingComponent";
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
  let[userCart,setUserCart]=useState([]);
  let [products,setProducts]=useState(0);
  const cartCollectionRef=collection(db,"carts");
 
  useEffect(()=>{
    const getUsersCarts=async()=>{
      const usersData = await getDocs(cartCollectionRef);
      setUsersCarts(usersData.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsersCarts()
  })

 useEffect(()=>{
   const getUserCart=async()=>{
    const userId= await  auth.currentUser.uid;
    setUserCart(usersCarts.find((user) => {return user.uid === userId;}))
  }
  getUserCart()
 })

 useEffect(()=>{
  let total=0;
  const getProducts=async()=>{
    total=userCart.products.length;
   setProducts(total) 
 }
 getProducts()
})
 

async function addProduct(title, price) {
      if (userCart.uid) {
        const cartDoc = doc(db, "carts", userCart.uid);
        let product = {
          name: title,
          price: price,
          quantity: 1,
        };
        await updateDoc(cartDoc, { products: arrayUnion(product) });
       
      }
    }

const onRemove = async (title,price,q) => {
  
    if (userCart.uid ) {
      if(q===1){
        const cartDoc = doc(db, "carts", userCart.uid);
        let product = {
          name: title,
          price: price,
          quantity:1
        };
        await updateDoc(cartDoc, { products: arrayRemove(product) });
      }
      else{
        
        for(let i=0;i<userCart.products.length;i++){
          if (userCart.products[i].name===title){
           userCart.products[i].quantity-=1
           const cartDoc = doc(db, "carts", userCart.uid);
           let product = {
             name: title,
             price: price,
             quantity: userCart.products[i].quantity,
           };
           let product2 ={
             name: title,
             price: price,
             quantity:  userCart.products[i].quantity+1,
           };
           await updateDoc(cartDoc, { products: arrayUnion(product) });
           await updateDoc(cartDoc, { products: arrayRemove(product2) });
     
          }
          }
    }
  }};
 
  async function increaseQuantity(title , price ){
   
    if (userCart.uid) {
     for(let i=0;i<userCart.products.length;i++){
     if (userCart.products[i].name===title){
      userCart.products[i].quantity+=1
      const cartDoc = doc(db, "carts", userCart.uid);
      let product = {
        name: title,
        price: price,
        quantity: userCart.products[i].quantity,
      };
      let product2 ={
        name: title,
        price: price,
        quantity:  userCart.products[i].quantity-1,
      };
      await updateDoc(cartDoc, { products: arrayUnion(product) });
      await updateDoc(cartDoc, { products: arrayRemove(product2) });

     }
     }
  }
}



 
  return (
    <AuthProvider >
      <Router>
        <Nav products={products}    />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Cart"
            element={
              <Cart   usersCarts={usersCarts} onRemove={onRemove}  increaseQuantity={increaseQuantity}  />
            }
          />
          <Route
            path="/Products"
            element={<Products data={data}   addProduct={addProduct}  />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;


