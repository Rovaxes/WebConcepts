import React, { Component } from "react";
import "./item.css";

class Item extends Component {
  state = {
    itemName: "Namebrand Crewneck"
  };

  render() {
    return (
      <button className="container">
        <div className="hover-elements">
          <h3 className="name">{this.state.itemName}</h3>
          <button onClick={this.handleDetails} className="item-button">
            Details
          </button>
          <button onClick={this.handleAddToCart} className="item-button">
            Add to Cart
          </button>
        </div>
      </button>
    );
  }

  handleDetails = () => {
    console.log("details");
  };

  handleAddToCart = () => {
    console.log("addToCart");
  };
}

export default Item;
