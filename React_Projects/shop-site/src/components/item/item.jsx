import React, { Component } from "react";
import "./item.css";

class Item extends Component {
  state = {
    itemName: "Namebrand",
    itemCount: 0
  };

  render() {
    return (
      <div className="item-container">
        <div className="hover-elements">
          <h3 className="name">{this.state.itemName}</h3>
          <button onClick={this.handleDetails} className="item-button">
            Details
          </button>
          <button onClick={this.handleAddToCart} className="item-button">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  handleDetails = () => {
    this.props.onDetails();
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props.item);
  };
}

export default Item;
