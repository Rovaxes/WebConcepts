import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import Banner from "./components/banner/banner.jsx";
import Item from "./components/item/item.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <Item />
        {/* <Banner /> */}
      </React.Fragment>
    );
  }
}

export default App;
