import React from "react";
import "./components.css";
import { db } from "../firebase-config";
import { auth } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function product(props) {
  const { data, onAdd, users } = props;

  const updateCart = async (id, productName, price) => {
    const userDoc = doc(db, "users", id);
    let check = users.map((user) => {
      if (user[productName]) {
        return user[productName].quantity;
      } else {
        return false;
      }
    });

    if (check[0]) {
      await updateDoc(userDoc, {
        [productName]: {
          product: productName,
          price: price * check[0] + price,
          quantity: check[0] + 1,
        },
      });
    } else {
      await updateDoc(userDoc, {
        [productName]: { product: productName, price: price, quantity: 1 },
      });
    }
  };

  return (
    <div className="product">
      <h3 className="productTitle">{data.title}</h3>
      <img className="productImage" src={data.image} alt="" />
      <p className="productDescription">{data.description}</p>
      <p className="productPrice">{data.price} LE</p>
      <button
        onClick={() => {
          onAdd(data);

          onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;

              updateCart(uid, data.title, data.price);
            } else {
              return;
            }
          });
        }}
        className="addToCart"
      >
        add to cart
      </button>
    </div>
  );
}
