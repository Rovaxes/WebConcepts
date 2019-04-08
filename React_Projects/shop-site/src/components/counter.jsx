import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //tags: ["tag1", "tag2", "tag3"]
  };

  //styles = {};

  render() {
    return (
      <React.Fragment>
        <span> {this.formatCount()} </span>
        <button onClick={this.handleIncrement}> Increment </button>
        <button onClick={this.handleDecrement}> Decrement </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
}

export default Counter;
