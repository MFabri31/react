import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Components from "./components/Components";
import Propertys from "./components/Propertys";
import State from "./components/State";
import ConditionalRendering from "./components/ConditionalRendering";
import ElementRendering from "./components/ElementRendering";
import { EventsEs6, EventsEs7, MoreAboutEvents } from "./components/Events";
import ComponentCommunication from "./components/ComponentCommunication";
import LifeCycle from "./components/LifeCycle";
import AjaxApis from "./components/AjaxApis";
import HookCounter from "./components/HookCounter";
import ScrollHook from "./components/ScrollHook";
import ClockHook from "./components/ClockHook";
import AjaxHook from "./components/AjaxHook";
import CustomHooks from "./components/CustomHooks";
import References from "./components/References";
import Forms from "./components/Forms";
import Styles from "./components/Styles";
import StyledComponents from "./components/StyledComponents";
import SelectNested from "./components/SelectNested";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";

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
            <hr />
            <Propertys
              string="Cadena"
              number={15}
              boolean={true}
              array={[1, 2, 3]}
              object={{ name: "Paul", email: "correo@correo.com" }}
              function={(num) => num * num}
              reactElement={<i>React Element</i>}
              reactComponent={
                <Components message="Componente pasado como prop" />
              }
            />
            <hr />
            <State />
            <hr />
            <ConditionalRendering />
            <hr />
            <ElementRendering />
            <hr />
            <EventsEs6 />
            <hr />
            <EventsEs7 />
            <hr />
            <MoreAboutEvents />
            <hr />
            <ComponentCommunication />
            <hr />
            <LifeCycle />
            <hr />
            {/* <AjaxApis /> */}
            <hr />
            <HookCounter title="Contador de segundos" />
            <hr />
            <ScrollHook />
            <hr />
            <ClockHook />
            <hr />
            {/* <AjaxHook /> */}
            <CustomHooks />
            <hr />
            <References />
            <hr />
            <Forms />
            <hr />
            <Styles />
            <hr />
            <StyledComponents />
            <hr />
            <SelectNested />
            <hr />
            <ContactForm />
            <hr />
            <Modals />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
