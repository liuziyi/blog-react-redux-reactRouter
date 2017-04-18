import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }}>
      	{this.props.children}
      </div>
    );
  }
}
