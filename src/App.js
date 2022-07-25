import "./App.css";
// import db from "./firebase-config";
// import auth from "./firebase-config";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/auth";
import React, { useState} from "react";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <AuthProvider>
      <Router>
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  />
            }
          />
          <Route
            path="/Products"
            element={<Products data={data} onAdd={onAdd}   />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
