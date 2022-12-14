import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import NotFoundCard from "./components/NotFoundCard/NotFoundCard";
import { getPokemonByIdOrName } from "./services/pokeApi";
import pokeball from "./assets/pokeball.svg";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typedPokemon, setTypedPokemon] = useState("");

  function handleChange(event) {
    setTypedPokemon(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);

    let pokemon = await getPokemonByIdOrName(typedPokemon.toLowerCase());

    if (typeof pokemon === "string") {
      setError(pokemon);
      setPokemon(null);
    } else {
      setPokemon(pokemon);
      setError(null);
    }
    setIsLoading(false);
  }
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <p className="Instructions">Type the pokemon name </p>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          className="Input"
          value={typedPokemon}
          placeholder="Gotta Catch'Em All!!!!"
          onChange={handleChange}
        ></input>
        <button className="SearchButton" type="submit">
          {isLoading ? (
            <>
              <img
                id="spinning-pokeball"
                className="ButtonIcon"
                src={pokeball}
                alt="spinning-pokeball"
              />{" "}
              loading
            </>
          ) : (
            <>
             search
              <img className="ButtonIcon" src={pokeball} alt="pokeball" />{" "}
            </>
          )}
        </button>
      </form>
      {pokemon ? (
        <PokemonCard pokemon={pokemon} />
      ) : (
        error && <NotFoundCard error={error} />
      )}
    </div>
  )
}

export default App;
