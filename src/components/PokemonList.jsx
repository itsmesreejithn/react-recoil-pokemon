import React from "react";
import { pokemonListAtom } from "../states/atoms";
import { useRecoilValue } from "recoil";

const PokemonList = () => {
  const pokemonList = useRecoilValue(pokemonListAtom);
  return (
    <div>
      {pokemonList.map((pokemon, index) => {
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
