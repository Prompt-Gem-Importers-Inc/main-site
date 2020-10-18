import React, { useState } from "react";
import { useHistory } from "react-router";
import HomeLogo from "./HomeLogo";

function Home() {
  return (
    <div className="logo">
      <HomeLogo />
     <h1>I am Home</h1>
    </div>
  );
}
export default Home;
