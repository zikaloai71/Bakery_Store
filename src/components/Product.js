import React from "react";
import "./components.css";

export default function product(props) {
  const {  data, onAdd } = props;

 
  return (
    <div className="product">
      <h3 className="productTitle">{data.title}</h3>
      <img className="productImage" src={data.image} alt="" />
    <p className="productDescription">{data.description}</p>
      <p className="productPrice">{data.price} LE</p>
      

      <button onClick={() => onAdd(data)} className="addToCart">
        add to cart
      </button>
    </div>
  );
}
