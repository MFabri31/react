import React, { Component } from "react";
import data from "../helpers/data.json";

function ListItem(props) {
  return (
    <li>
      {props.name}
      <a href={props.web} target="blank">
        {" "}
        Sitio Oficial
      </a>
    </li>
  );
}

class ElementRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primevera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h3>Renderizado de elementos</h3>
        <h4>Estaciones del año</h4>
        <ol>
          {this.state.seasons.map((elem) => (
            <li key={elem}>{elem}</li>
          ))}
        </ol>
        <h4>Frameworks Frontend</h4>
        <ul>
          {data.frameworks.map((elem) => (
            <ListItem key={elem.id} name={elem.name} web={elem.web} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ElementRendering;
