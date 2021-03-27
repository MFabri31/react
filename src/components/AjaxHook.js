import React, { useState, useEffect } from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

const AjaxHook = () => {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   let url = "https://pokeapi.co/api/v2/pokemon/";

  //   fetch(url)
  //     .then((res) => res.json())

  //     .then((json) => {
  //       // console.log(json);
  //       json.results.forEach((el) => {
  //         fetch(el.url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             // console.log(json);

  //             let pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default,
  //             };

  //             setPokemons((pokemons) => [...pokemons, pokemon]);
  //           });
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      // console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        // console.log(json);

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h3>Peticiones Asíncronas en Hooks</h3>
      <h4>Pokemones</h4>

      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((elem) => (
          <Pokemon key={elem.id} avatar={elem.avatar} name={elem.name} />
        ))
      )}
    </>
  );
};

export default AjaxHook;
