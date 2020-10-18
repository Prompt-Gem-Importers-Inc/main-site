import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import "../style/logoAndHeader.scss";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
