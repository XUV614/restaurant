import React from "react";
import './Header.css';
import { signOut } from "firebase/auth";
import { database } from "../LoginComponent/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Cart from '../Shopping/Cart.png'

export default function Header({size}) {
  const history = useNavigate()
  const handleClick = () =>{
    signOut(database).then(val=>{
        history('/')
    })
}

  function toCart(){
    history('/cart')
  }
  return (
    <div className="header">
      <div className="left]=ouy77">
        <div className="logo">
          <img className='cart' src={Cart} alt="Cart" />
          <h1>Online Food Order</h1>
        </div>
      </div>
      <div className="right">
        <button onClick={toCart} className="cartvalue">Cart : <span className="added">{size}</span></button><br/>
        <button className="signOut" onClick={handleClick}>SignOut</button>
      </div>
    </div>
  );
}
