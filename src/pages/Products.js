import React from "react";
import "./pages.css"
import Product from '../components/Product';
// import { db } from "../firebase-config";
// import { collection , getDocs  } from "firebase/firestore";

export default function Products(props) {
  const { data , addProduct    } = props;

  return (
    <>
      <div className='products'>
      {data.map((data) => (
        <Product key={data.id} data={data}  addProduct={addProduct}   />
        ))}
      </div>
  </>
  )
}
