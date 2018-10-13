import React, { Component } from 'react';

class HelloComponent1 extends Component {
  render() {
    return (
      <div>
        Hello <b>{this.props.name}</b>
      </div>
    );
  }
}

export default HelloComponent1;