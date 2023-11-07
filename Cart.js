import React from "react";

export default function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
<link href="link">