import React from 'react';
import './Product.css'

const products = ({products}) => {
    return (
        <div className="mainContainer">
           {products.map(product => <SingleProduct key={product.id} SingleProduct = {product}></SingleProduct>)}
        </div>
    );
};

const SingleProduct = ({SingleProduct}) => {
    console.log(SingleProduct);
  return (
      <div>
         <div className="singleProduct">
           <h6 className="text-center">{SingleProduct.name}</h6>
           <h4 className="text-center">{SingleProduct.price}</h4>
           <button className="btn btn-success d-block mx-auto px-4 fw-bold">Buy</button>
         </div>
      </div>
  )
}

export default products;