import React from "react";
import Product from "./product";

export default function ProductInfoCard(props){
    const product = {
    
          "name": "Rustic Plastic Gloves",
          "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
          "img": "https://loremflickr.com/640/480/transport",
          "price": "468.00",
          "stock": 47,
          "_id": "5"
        
      }
      
    return (
        <div className="card">
           < Product  info product={product}/>
        </div>
    )
}