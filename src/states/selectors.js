import { selector } from "recoil";
import { pokemonListAtom } from "./atoms";

export const pokemonListFilteredSelector = selector({
    key: "pokemonListFilteredSelector",
    get: ({get}) => {
        const pokemonList = get(pokemonListAtom);
        return pokemonList;
    }
});