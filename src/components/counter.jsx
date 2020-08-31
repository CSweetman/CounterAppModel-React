//Utilize jsx extension rather than js for better code compilation (fact check this)

import React, { Component } from "react";

class Counter extends Component {
  //extends Component class from react module, will inherit lots of methods
  state = {
    //Special property that includes any data the component needs
    count: 0,
    address: {
      street: "",
    },
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()} </span>{" "}
        {/*^ in {} can add any js expressions, renders count property above. */}
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
    {
      /*this.state.count*/
    }
  }
}

export default Counter;
