import React from "react";

const jsx = () => {
  let name = "jon";
  let auth = false;
  let seasons = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
        {name}
        {auth ? <p>Usurio logueado</p> : <p>Usurio no logueado</p>}
      </div>
      <div>
        <h3>Estaciones</h3>
        <ul>
          {seasons.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default jsx;
