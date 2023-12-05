import React from "react";
import { useRecoilValue } from "recoil";
import { pokemonListFilteredSelector } from "../states/selectors";

const PokemonList = () => {
  const pokemonList = useRecoilValue(pokemonListFilteredSelector);
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <div key={index} className="col-lg-4 mt-5">
            <div className="card h-100 border-black">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ height: 300 }}
                className="card-image-top"
              />
              <div className="card-body">
                <div className="card-title fw-bolder">
                  <span>{pokemon.name}</span>
                </div>
                <div className="card-text fst-italic">
                  <span>{pokemon.element}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PokemonList;
