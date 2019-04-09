import React, { Component } from "react";
import "./navbar.css";
import "../../data/data.js";

class NavBar extends Component {
  state = { title: "Shopping App" };
  render() {
    return (
      <header className="content navLayout">
        <div className="left">
          <h1> {this.state.title.toUpperCase()} </h1>
          <h2> Toronto, ON </h2>
        </div>
        <ul className="tabs right">
          <li> Home </li>
          <li> Shop </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
        <p className="dropdown"> YO </p>
      </header>
    );
  }
}

export default NavBar;
