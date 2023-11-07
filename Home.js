import React, { useState } from "react";
import Header from '../Shopping/Header';
import Middle from "../Shopping/Middle";  
import './Home.css';

export default function Home() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="Home">
      <Header size={cart.length} />
      <Middle addToCart={addToCart} />
    </div>
  );
}


