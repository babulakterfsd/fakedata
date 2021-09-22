import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./product.json')
     .then(response => response.json())
      .then(products => setProducts(products))
  }, [])
  
  return (
    <div className="App">
       <div className="container py-5">
         <div className="row">
           <div className="mx-auto col-10 col-md-10 col-lg-12">
           <h1 className="text-center text-success mb-3 mb-md-5">Products are being shown in the console</h1>
            <Products products = {products}></Products>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;
