import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/NavBar.scss";

function Navbar() {
  let history = useHistory();
  function handleContact() {
    history.push("/ContactUs");
  }
  const handleAboutUs = () => history.push("/AboutUs");
  const handleHome = () => history.push("/");
  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={handleContact}>
            Contact Us
          </button>
        </li>
        <li>
          <button type="button">Inventory</button>
        </li>
        <li>
          <button type="button">Exhibitions</button>
        </li>
        <li>
          <button type="button" onClick={handleAboutUs}>
            About Us
          </button>
        </li>
        <li>
          <button type="button" onClick={handleHome}>
            Home
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
