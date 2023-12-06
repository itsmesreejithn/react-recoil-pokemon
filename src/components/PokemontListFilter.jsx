import { useRecoilState } from "recoil";
import { pokemonListFiltersAtom } from "../states/atoms";

const PokemontListFilter = () => {
  const [filter, setFilter] = useRecoilState(pokemonListFiltersAtom);
  const onFilterClick = (filter) => {
    setFilter(filter);
  };
  return (
    <div>
      <button
        onClick={() => onFilterClick("show_all")}
        className="btn btn-outline-primary me-2"
      >
        show all
      </button>
      <button
        onClick={() => onFilterClick("show_fire")}
        className="btn btn-outline-primary me-2"
      >
        show fire
      </button>
      <button
        onClick={() => onFilterClick("show_water")}
        className="btn btn-outline-primary me-2"
      >
        show water
      </button>
      <button
        onClick={() => onFilterClick("show_plant")}
        className="btn btn-outline-primary me-2"
      >
        show plant
      </button>
    </div>
  );
};

export default PokemontListFilter;
