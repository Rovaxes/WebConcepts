import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import Banner from "./components/banner/banner.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
      </React.Fragment>
    );
  }
}

export default App;
