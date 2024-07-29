import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CardPage() {
    const { id } = useParams();
     const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
          .then(response => {
            setProduct(response.data);         
         })
        }, [id]);



      return (
        <div>
          {product ? (
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title}  />
            </div>
            
          ) : (
            <div>Product not found</div>
          )}

        </div>
      );

}
export default CardPage;
