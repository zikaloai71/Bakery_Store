import React from 'react';
import "./pages.css";
import emptyCart from "../images/emptyCart.svg";
import { useNavigate } from "react-router-dom";


export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
 
  const navigate = useNavigate();
   function toProducts(){
    navigate("/Products")
  }


  if(cartItems.length === 0) {
    return(<>
       <h1 className='emptyCartHeader'>your cart is empty </h1>
      <img src={emptyCart} className="emptyCart" alt="" />
      <button onClick={toProducts} className="plus">+</button>
      </>
      )
   }
   else{
  return (
    <div className='cart'>
       
      {cartItems.map((item) =>{
        return(
          <>
          <div className='cartProduct'>
          <button className='removeItem' onClick={() => onRemove(item)}>
                -
          </button>
          <div className='cartItemTitle'>{item.title}</div>
          <button className='addItem' onClick={() => onAdd(item)}>
                +
          </button>
          </div>
          <div className='quantity'>{item.qty} x {item.price.toFixed(2)}LE</div>
          </>
        )
        })
        }
    <hr />
    <div className='total'> <p>total =</p> <p className='totalPrice'>{totalPrice}</p></div>
    </div>
  )
}
}
