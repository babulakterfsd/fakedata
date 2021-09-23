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
  const handlePurchase = product => {
    let {id,name,price} = product;
    let cart = {};
    const exists = localStorage.getItem('shopping-cart');
    if(!exists) {
       cart[id] = 1
    } else {
       cart = JSON.parse(exists)
        if(cart[id]) {
          const quantity = cart[id] + 1;
          cart[id] = quantity
        } else {
          cart[id] = 1
        }
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
    (function calculateCart() {
      price = price.slice(1, price.length)
      const productPrice = +price;
      const productQuantity = +cart[id];
      const total = productPrice * productQuantity;
      alert(`You added ${name} to your cart ${cart[id]} times, Bill is ${productPrice} * ${productQuantity} = ${total.toFixed(2)}`)
    })()
  }

  const handleRemove = product => {
     const {id,name} = product;
     const exists = localStorage.getItem('shopping-cart')
     if(!exists) {
          alert('Lol ! You did not buy anything');
     } else {
        const cart = JSON.parse(exists)
        delete cart[id];
        alert(`${name} removed from your cart`)
        localStorage.setItem('shopping-cart', JSON.stringify(cart))
        if(Object.keys(cart).length === 0) {
          localStorage.clear()
        }
     }
  }



  return (
      <div>
         <div className="singleProduct">
           <h6 className="text-center">{SingleProduct.name}</h6>
           <h4 className="text-center">{SingleProduct.price}</h4>
           <button onClick={() => handlePurchase(SingleProduct)} className="btn btn-success d-block mx-auto px-4 fw-bold mb-2">Add to Cart</button>
           <button onClick={() => handleRemove(SingleProduct)} className="btn btn-danger d-block mx-auto px-4 fw-bold">Remove</button>
         </div>
      </div>
  )
}

export default products;