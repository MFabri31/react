import React from "react";
import "./Styles.css";
import moduleStyles from "./Styles.module.css";
import "./Styles.scss";

const Styles = () => {
  let myStyles = {
    maxWidth: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: ".25rem",
  };

  return (
    <section className="styles">
      <h3>Estilos</h3>
      <h4 className="bg-react">Estilos en hoja de css externa</h4>
      <h4
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en línea
      </h4>
      <h4 className="bg-react" style={myStyles}>
        Estilos en línea
      </h4>
      <h4 className="bg-react">
        Agregando normalize con
        <br />
        <code>@import-normalize</code>
      </h4>
      <h4 className={moduleStyles.error} style={myStyles}>
        Estilos con módulos
      </h4>
      <h4 className={moduleStyles.success} style={myStyles}>
        Estilos con módulos
      </h4>
      <h4 className="bg-sass">Estilos con SASS</h4>
    </section>
  );
};

export default Styles;
