import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.addition = this.addition.bind(this);
    this.substraction = this.substraction.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  addition(e) {
    this.setState({
      count: this.state.count + 1,
    });
  }

  substraction() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  resetCounter(e) {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <h3>Evenetos en Componentes de clase</h3>
        <div>
          <button onClick={this.addition}>+</button>
          <button onClick={this.substraction}>-</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Events;
