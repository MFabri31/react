import React, { Component } from "react";

function StateToChild(props) {
  return (
    <div>
      <p>{props.countChild}</p>
    </div>
  );
}

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Estado</h3>
        <p>{this.state.count}</p>
        <StateToChild countChild={this.state.count} />
      </div>
    );
  }
}

export default State;
