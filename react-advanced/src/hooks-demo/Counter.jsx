import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = { count: 0 };

  incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increase</button>
        </Fragment>);
export default Counter;
