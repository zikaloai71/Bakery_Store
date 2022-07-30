import React from "react";
import "./pages.css";
import emptyCart from "../images/emptyCart.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import LoadingComponent from "../components/LoadingComponent";
// import { async } from "@firebase/util";
// import { async } from "@firebase/util";
// import { doc, updateDoc } from "firebase/firestore";

export default function Cart(props) {
  const { usersCarts , onRemove ,onAdd  } = props;
  const navigate = useNavigate();
  function toProducts() {
    navigate("/Products");
  }
 

 if(usersCarts.length===0){
  return <LoadingComponent />
 }
    const userCart =  usersCarts.find( (user) => {
      let userId =  auth.currentUser.uid;
      return user.uid === userId;
    });

  const totalPrice = function () {
    let total = 0;
    for (let i = 0; i < userCart.products.length; i++) {
      total += userCart.products[i].price;
    }
    if (total===0){
      return(  <>
        <h1 className="emptyCartHeader">your cart is empty </h1>
        <img src={emptyCart} className="emptyCart" alt="" />
        <button onClick={toProducts} className="plus">
          +
        </button>
      </>)
    }
    else{
    return (<div className="total"><p>total =</p> <p className="totalPrice">{total}</p></div>);
  }
  };

 
  return (
    <>
      <h1>Welcome {userCart.name}</h1>
      {userCart.products.map((product) => {
          return (
            <div className="cart">
            <div className="cartProduct">
              <button className='removeItem' onClick={() => onRemove(product.name,product.price)}>
                                -
                          </button>
              <div className="cartItemTitle">{product.name}</div>
              <button className='addItem' onClick={() =>{onAdd(product)}}>
                                +
                          </button>
            </div>
            <div className="quantity">{product.price} x{product.quantity} </div>
        </div>
        );
      
      })
        }
      ;
       
      <div>
        {totalPrice()}
      </div>
    </>
  );
}
