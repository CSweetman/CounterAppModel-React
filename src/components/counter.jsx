//Utilize jsx extension rather than js for better code compilation (fact check this)

import React, { Component } from "react";

class Counter extends Component {
  //extends Component class from react module, will inherit lots of methods

  render() {
    return (
      < div >
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*^ in {} can add any js expressions, renders count property above. */}

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}            //Deletes the whole button
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div >
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
