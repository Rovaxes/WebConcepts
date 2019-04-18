import React, { Component } from "react";
import "./shop.css";
import Item from "../../components/item/item.jsx";
import SortBar from "../../components/sortBar/sortBar.jsx";

class Shop extends Component {
  state = {};

  render() {
    return (
      <div>
        <SortBar />
        <div className="content products-container">
          {this.props.items.map(item => (
            <Item
              key={item.id}
              item={item}
              onDetails={this.props.onDetails}
              onAddToCart={this.props.onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
