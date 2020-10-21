import React, { useState } from "react";
import { useHistory } from "react-router";
import MyImage from "../pics/Logo.png";
// import "../style/logoAndHeader.scss";
function HomeLogo() {
  let history = useHistory();
  function handleHome() {
    history.push("/");
  }
  return (
    <div className="logo">
      <input
        type="image"
        src={MyImage}
        onClick={handleHome}
        alt="Prompt Gem Logo"
        width="400"
        height="300"
      />
    </div>
  );
}
export default HomeLogo;
