import React , { useState ,useEffect} from 'react'
import Card from './Card';
import axios from "axios";
import './Product.css';

const Product = () => {
    const appStyle= {
        backgroundColor: 'bisque',
        padding: '0 0 500px 0',
        display: 'flex'
  
    }
  
    const[products,setProducts]=useState("");
  
    useEffect(() =>{
      fetchProducts();
    },[]);
  
    function fetchProducts() {
       axios.get("https://dummyjson.com/products")
       .then((response) => {
          setProducts(response.data.products);
       })
       .catch( (err) => {
           console.log(err);
       })
    }
  
    console.log("product",products);
   
    
    return (
      <div style={appStyle}>
            {products.length > 0 ? (
          <div className="card-container">
            {products.map((product) => (
              <Card key={product.id} products={products} fetchProducts={fetchProducts}/>
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
         
      </div>
    )
}

export default Product;