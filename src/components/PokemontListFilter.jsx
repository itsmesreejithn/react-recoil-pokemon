import React from "react";
import { useRecoilState } from "recoil";
import { pokemonListFiltersAtom } from "../states/atoms";

const PokemontListFilter = () => {
  const [filter, setFilter] = useRecoilState(pokemonListFiltersAtom);
  const onFilterClick = (filter) => {
    setFilter(filter);
  };
  return (
    <div>
      <button onClick={onFilterClick(filter)}>show all</button>
      <button onClick={onFilterClick("show_fire")}>show fire</button>
      <button onClick={onFilterClick("show_water")}>show water</button>
      <button onClick={onFilterClick("show_plant")}>show plant</button>
    </div>
  );
};

export default PokemontListFilter;
