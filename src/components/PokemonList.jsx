import React from "react";
// import { pokemonListAtom } from "../states/atoms";
import { useRecoilValue } from "recoil";
import { pokemonListFilteredSelector } from "../states/selectors";

const PokemonList = () => {
  const pokemonListFiltered = useRecoilValue(pokemonListFilteredSelector);
  return (
    <div>
      {pokemonListFiltered.map((pokemon, index) => {
        return (
          <div key={index}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: 100 }}
            />
            <br />
            <span>{pokemon.name}</span>
            <br />
            <span>{pokemon.element}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
