import React, { Component } from "react";

export class EventsEs6 extends Component {
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

  substraction(e) {
    if (this.state.count < 1) {
      return;
    }
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
        <h3>Evenetos en Componentes de clase ES6</h3>
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

// Property Initializers
export class EventsEs7 extends Component {
  state = {
    count: 0,
  };

  addition = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  substraction = (e) => {
    if (this.state.count < 1) {
      return;
    }
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCounter = (e) => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h3>Evenetos en Componentes de clase ES7</h3>
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
