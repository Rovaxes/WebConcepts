import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <button className="hidden-display">
          Shopping Cart {this.props.numOfItems}
        </button>
      </div>
    );
  }
}

export default Cart;
