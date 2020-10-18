import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Navbar() {
  
    let history = useHistory();
    function handleContact() {
      history.push("/ContactUs");
    }
   const handleAboutUs = ()=> history.push("/AboutUs")
  return (
    <div>
      <button type="button">Home</button>
      <button type="button" onClick={handleAboutUs}>About Us</button>
      <button type="button">Exhibitions</button>
      <button type="button" onClick={handleContact}>Contact Us</button>
      <button type="button">Inventory</button>
    </div>
  );
}

export default Navbar;

/**
 * 
 * 
 * import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

 * 
 * 
 */
