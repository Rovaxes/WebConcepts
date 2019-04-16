import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.js";
import Shop from "./pages/shop/shop.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <Home /> */}
        <Shop />
      </React.Fragment>
    );
  }
}

export default App;
