import { atom } from "recoil";
import salamecheImage from "../assets/salameche.png";
import reptincelImage from "../assets/reptincel.png";
import dracofeuImage from "../assets/dracofeu.png";
import carapuceImage from "../assets/carapuce.png";
import carabaffeImage from "../assets/carabaffe.png";
import tortankImage from "../assets/tortank.png";
import bulbizarreImage from "../assets/bulbizarre.png";
import herbizarreImage from "../assets/herbizarre.png";
import florizarreImage from "../assets/florizarre.png"

export const pokemonListAtom = atom({
    key: "pokemonListAtom",
    default: [
        {
            name: "Salamèche",
            element: "fire",
            image: salamecheImage,
          },
          {
            name: "Reptincel",
            element: "fire",
            image: reptincelImage,
          },
          {
            name: "Dracaufeu",
            element: "fire",
            image: dracofeuImage,
          },
          {
            name: "Carapuce",
            element: "water",
            image: carapuceImage,
          },
          {
            name: "Carabaffe",
            element: "water",
            image: carabaffeImage,
          },
          {
            name: "Tortank",
            element: "water",
            image: tortankImage,
          },
          {
            name: "Bulbizarre",
            element: "plant",
            image: bulbizarreImage,
          },
          {
            name: "Herbizarre",
            element: "plant",
            image: herbizarreImage,
          },
          {
            name: "Florizarre",
            element: "plant",
            image: florizarreImage,
          },
    ]
})