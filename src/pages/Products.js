import React from 'react';
import "./pages.css"
import Product from '../components/Product';

export default function Products(props) {
  const { data, onAdd ,users } = props;
  return (
    <>
      <div className='products'>
      {data.map((data) => (
        <Product key={data.id} data={data} onAdd={onAdd} users={users}  />
        ))}
      </div>
  </>
  )
}
