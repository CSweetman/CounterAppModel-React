//Utilize jsx extension rather than js for better code compilation (fact check this)

import React, { Component } from "react";

class Counter extends Component {
  //extends Component class from react module, will inherit lots of methods
  state = {
    //Special property that includes any data the component needs
    //props
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };
  /*
    constructor() {
      super();
      this.handleIncrement = this.handleIncrement.bind(this);
    }
    */

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>       /*return null to return nothing */
    return <ul>{this.state.tags.map(tag => (<li key={tag}> {tag} </li>))}</ul>
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });   //Will not work
    //obj.method(); this in the function will return ref to the object
    //function(); call standalone w/o object reference, default references window object. Strict mode is enabled returns undefined.
  }


  render() {
    return (
      < div >
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*^ in {} can add any js expressions, renders count property above. */}
        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        {/*
        <ul>
          {this.state.tags.length === 0 && 'Please Create a new tag!'}  {/*Only operates as one if, first part is boolean 2nd is string, && in 
          js can apply to nonboolean. If first is true, checks to see if what is passed in is "truesy" or "falsey", js will return the last operator
          because it is truesy. 
          {this.renderTags()}
        </ul>
        */}
      </div >
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
