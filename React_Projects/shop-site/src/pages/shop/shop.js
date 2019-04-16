import React, { Component } from "react";
import "./shop.css";
import Item from "../../components/item/item.jsx";
import Cart from "../../components/cart/cart.jsx";
import SortBar from "../../components/sortBar/sortBar.jsx";

class Shop extends Component {
  state = {};
  render() {
    return (
      <div>
        <SortBar />
        <div className="content products-container">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <Cart />
      </div>
    );
  }
}

export default Shop;
