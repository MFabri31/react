import React, { Component } from "react";

class Father extends Component {
  state = {
    count: 0,
  };

  addition = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h3>Comunicación entre componentes</h3>
        <p>{this.state.count}</p>
        <Child addition={this.addition} message="Mensaje hijo 1" />
        <Child addition={this.addition} message="Mensaje hijo 2" />
      </>
    );
  }
}

const Child = ({ message, addition }) => {
  return (
    <>
      <p>{message}</p>
      <button onClick={addition}>+</button>
    </>
  );
};

export default Father;
