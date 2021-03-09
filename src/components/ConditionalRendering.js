import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h4>Login</h4>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h4>Logout</h4>
    </div>
  );
}

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return (
      <div>
        <h3>Renderizado Condicional</h3>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}

export default ConditionalRendering;
