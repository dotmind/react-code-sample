import React, { Component } from 'react';

class Sample extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  _onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.count('render');
    return (
      <button onClick={this._onClick}>
        <span>Button</span>
      </button>
    );
  }
}

export default Sample;