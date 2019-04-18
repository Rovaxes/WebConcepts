import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.js";
import Shop from "./pages/shop/shop.js";
import Cart from "./components/cart/cart.jsx";

class App extends Component {
  state = {
    numOfItems: 0,

    items: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <Home /> */}
        <Shop
          items={this.state.items}
          onDetails={this.handleDetails}
          onAddToCart={this.handleAddToCart}
        />

        <Cart numOfItems={this.state.numOfItems} />
      </React.Fragment>
    );
  }

  handleDetails = () => {
    console.log("details");
  };

  handleAddToCart = item => {
    const index = this.state.items.indexOf(item);
    this.state.items[index].value++;
    this.handleTotalItems();
  };

  handleTotalItems = () => {
    var numOfItemsUpdate = 0;
    this.state.items.forEach(item => (numOfItemsUpdate += item.value));
    this.state.numOfItems = numOfItemsUpdate;
    this.setState({ numOfItems: this.state.numOfItems });
  };
}

export default App;
