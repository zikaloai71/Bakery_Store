import React from "react";
import "./pages.css";
import title from "../images/title.png";
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
    return (
      <div className="checkSide">
        <form action="" className="checkOut">
            <h3>Check out</h3>
            <label htmlFor="cardNumber" className="checkLabels">Enter your card number <i className="fa-brands fa-cc-visa"></i> <i class="fa-brands fa-cc-mastercard"></i></label>
            <input type="number" id="cardNumber" className="checkInput" />
            <label htmlFor="cvv" className="checkLabels">Enter your cvv</label>
            <input type="number" id="cvv" className="checkInput"  />
            <button type="submit" className="submitCheck">submit order</button>
          </form>
          <div className="total">
     <p>total =</p> <p className="totalPrice">{total}</p>
      </div>
      </div>);
  }
  };

 
  return (
    <div className="cartPage">
      <h1 className="userName">Welcome {userCart.name}<i className="fa-solid fa-cookie-bite"></i></h1>
      <div className='titleBar'><img src={title} className="titleBarPng" alt="" /></div>
      <div className="productsSide">
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
        )
      
      })
        }
      
      </div>
       
        {totalPrice()}
      
    </div>
  )
}
