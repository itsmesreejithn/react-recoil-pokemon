import React from "react";
import PokemonList from "./components/PokemonList";
import PokemontListFilter from "./components/PokemontListFilter";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="container-fluid">
      <p className="h1 text-center fst-italic mt-4 text-uppercase fw-bolder">
        Pokemon wiki
      </p>
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <PokemontListFilter />
        </div>
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
