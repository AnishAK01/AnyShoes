import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { MouseFollower } from 'react-mouse-follower';
import Navbar from '../Components/Navbar';
import HomePage from '../Components/HomePage';
import Shop from '../Components/Shop';
import About from '../Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../Components/Cart';
import Card from '../Components/Card';


// const style = {
//   background: " rgb(173,187,218)",
// // background: "linear-gradient(180deg, rgba(173,187,218,1) 29%, rgba(236,229,249,1) 87%)"
// }

export default function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  const handleClickCart = (card) => {
    let isPresent = false;
    // console.log(card);
    cart.forEach((product) => {
      if (card.id === product.id)
        isPresent = true;
    })
   
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    card.amount = card.amount+1;
    setCart([...cart, card]);
  }

  const handleChange = (card, a) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === card.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += a;

    if (tempArr[ind].amount <= 0){
      tempArr.splice(ind,1);
    }
      // tempArr[ind].amount = 1;
   
    setCart([...tempArr])
  }

  return (
    <div className="App" >
      <MouseFollower />
  
      {/* <nav>
        <Navbar/>
      </nav> */}
      <BrowserRouter>
        <Navbar cart={cart} size={cart.length} /> {/* Pass cart prop here */}

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />

          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<Shop handleClickCart={handleClickCart} />} />
         
        </Routes>
        {
            warning&& <div style={{
              height:"50px",
              width:"300px",
              position:"fixed",
              right:"10px",
              top:"20%",
              backgroundColor:"red",
              textAlign:"center",
              color:"white",
              borderRadius:"20px",
              fontSize:"25px"
            }}>Item already there</div>
          }
      </BrowserRouter>
      {/* <HomePage/> */}
      {/* <About/> */}
      {/* <Shop/> */}
    </div>
  );
}