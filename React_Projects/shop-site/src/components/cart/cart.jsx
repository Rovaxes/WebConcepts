import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart-container">
        <button className="hidden-display">Shopping Cart</button>
      </div>
    );
  }
}

export default Cart;
