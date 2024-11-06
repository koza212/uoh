import React from 'react';
import products from '../utils/data'; // Adjust the path if needed
import css from "../app/page.module.css"
 
const ProductList = () => {
  return (
    <div className={css.main}>
      <h1>Product List</h1>
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '20px' }} className={css.product}>
                <img src={product.image} alt={product.name} width={100} height={100} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
 
export default ProductList;