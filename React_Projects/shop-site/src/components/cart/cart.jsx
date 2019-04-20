import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <button onClick={this.toggleDisplay()} className="hidden-display">
          Shopping Cart {this.props.numOfItems}
        </button>
      </div>
    );
  }

  toggleDisplay() {
    console.log("Hi");
  }
}

export default Cart;
