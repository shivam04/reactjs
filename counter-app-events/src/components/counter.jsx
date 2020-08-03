import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked!", this);
  // }

  //or u can use => fucntion

  handleIncrement = (product) => {
    console.log(product);
    //console.log("Increment Clicked!", this);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    let product = { id: 1 };
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increments
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
