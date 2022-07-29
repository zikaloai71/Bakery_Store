import React from "react";
import "./pages.css";
import emptyCart from "../images/emptyCart.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
// import LoadingComponent from "../components/LoadingComponent";
// import { async } from "@firebase/util";
// import { async } from "@firebase/util";
// import { doc, updateDoc } from "firebase/firestore";

export default function Cart(props) {
  const { usersCarts } = props;
  const navigate = useNavigate();
  function toProducts() {
    navigate("/Products");
  }

  let userId = auth.currentUser.uid;

    const userCart =  usersCarts.find((user) => {
      return user.uid === userId;
    });


  const totalPrice = function () {
    let total = 0;
    for (let i = 0; i < userCart.products.length; i++) {
      total += userCart.products[i].price;
    }
    return total;
  };

  return (
    <>
      <h1>{userCart.name}</h1>
      {userCart.products.map((product) => {
        if (userCart.products.length > 0) {
          return (
            <div className="cart">
              <>
                <div className="cartProduct">
                  {/* <button className='removeItem' onClick={() => onRemove(item)}>
                                    -
                              </button> */}
                  <div className="cartItemTitle">{product.name}</div>
                  {/* <button className='addItem' onClick={() => onAdd(item)}>
                                    +
                              </button> */}
                </div>
                <div className="quantity">{product.price} </div>
              </>
            </div>
          );
        } else {
          return (
            <>
              <h1 className="emptyCartHeader">your cart is empty </h1>
              <img src={emptyCart} className="emptyCart" alt="" />
              <button onClick={toProducts} className="plus">
                +
              </button>
            </>
          );
        }
      })}
      ;
      <div className="total">
        {" "}
        <p>total =</p> <p className="totalPrice">{totalPrice()}</p>
      </div>
    </>
  );
}
