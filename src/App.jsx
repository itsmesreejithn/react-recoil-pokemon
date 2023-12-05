import React from "react";
import PokemonList from "./components/PokemonList";
import PokemontListFilter from "./components/PokemontListFilter";

const App = () => {
  return (
    <div>
      <PokemontListFilter />
      <PokemonList />
    </div>
  );
};

export default App;
