import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Inventory from "./Inventory";

import Exhibitions from "./Exhibitions";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
          <Route exact path="/Inventory">
            <Inventory />
          </Route>
          <Route exact path="/Exhibitions">
            <Exhibitions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
