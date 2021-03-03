import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Components from "./components/Components";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Components message="Component" />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
