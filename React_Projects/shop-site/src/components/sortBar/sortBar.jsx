import React, { Component } from "react";
import "./sortBar.css";

class SortBar extends Component {
  state = {};
  render() {
    return (
      <div className="sort-bar-container">
        <div className="content sort-bar-grid">
          <input placeholder="  ..." />
        </div>
      </div>
    );
  }
}

export default SortBar;
