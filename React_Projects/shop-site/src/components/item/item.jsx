import React, { Component } from "react";
import "./item.css";
class Item extends Component {
  state = { itemName: "Sweater" };
  render() {
    return <div class="container">{this.state.itemName}</div>;
  }
}

export default Item;
