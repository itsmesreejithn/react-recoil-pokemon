import { selector } from "recoil";
import { pokemonListAtom, pokemonListFiltersAtom } from "./atoms";

export const pokemonListFilteredSelector = selector({
    key: "pokemonListFilteredSelector",
    get: ({get}) => {
        const pokemonList = get(pokemonListAtom);
        const pokemonFilter = get(pokemonListFiltersAtom);
        switch(pokemonFilter) {
            case "show_fire":
                return pokemonList.filter(({element}) => element === "fire");
            
            case "show_water":
                return pokemonList.filter(({element}) => element === "water");

            case "show_plant":
                return pokemonList.filter(({element}) => element === "plant");

            default:
                return pokemonList;
        }
    }
});