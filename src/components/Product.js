import React from "react";
import "./components.css";
// import { db } from "../firebase-config";
// import { auth } from "../firebase-config";
// import {
//   doc,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
//   increment,
// } from "firebase/firestore";
// import { async } from "@firebase/util";
// import { onAuthStateChanged } from "firebase/auth";

export default function product(props) {
  const { data , addProduct} = props;

  return (
    <div className="product">
      <h3 className="productTitle">{data.title}</h3>
      <img className="productImage" src={data.image} alt="" />
      <p className="productDescription">{data.description}</p>
      <p className="productPrice">{data.price} LE</p>
      <button
        onClick={() => {
          addProduct(data.title, data.price);
          // increaseQuantity(data.title);
        }}
        className="addToCart"
      >
        add to cart
      </button>
    </div>
  );
}
