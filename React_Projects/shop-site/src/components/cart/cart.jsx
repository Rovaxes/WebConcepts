import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  state = {
    hidden: true
  };
  render() {
    return (
      <div>
        {this.Display()}
        <div className="cart-container">
          <button onClick={this.toggleDisplay} className="hidden-display">
            Shopping Cart
          </button>
        </div>
      </div>
    );
  }

  toggleDisplay = () => {
    console.log(this.state.hidden);
    this.setState({ hidden: !this.state.hidden });
  };

  Display() {
    return this.state.hidden ? null : (
      <div className="visible-display">
        <div className="cart-content">
          <h2>Shopping Cart</h2>
        </div>
      </div>
    );
  }
}

export default Cart;
