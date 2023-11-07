import React, { useState, useEffect } from 'react';
import './Middle.css';

export default function Middle({ addToCart}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/Menu')
      .then((response) => response.json())
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function handleCart(item) {
    addToCart(item);

  }

  return (
    <div className="Middle">
      <div className='product'>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>Rs: {item.price}</h1>
            <img src={item.image} alt={item.name} />
            <button onClick={() => handleCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
