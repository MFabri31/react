import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((res) => res.json())

      .then((json) => {
        // console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              // console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h3>Peticiones Asíncronas en componentes de clases</h3>
        <h4>Pokemones</h4>

        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((elem) => (
            <Pokemon key={elem.id} avatar={elem.avatar} name={elem.name} />
          ))
        )}
      </>
    );
  }
}

export default AjaxApis;
