import React from "react";

const Propertys = (props) => {
  return (
    <div>
      <h3>{props.default}</h3>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "False"}</li>
        <li>{props.array.join(", ")}</li>
        <li>Nombre: {props.object.name}</li>
        <li>Email: {props.object.email}</li>
        <li>{props.array.map(props.function)}</li>
        <li>{props.reactElement}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
};

Propertys.defaultProps = {
  default: "Props",
};

export default Propertys;
