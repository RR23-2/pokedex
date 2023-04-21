import { useContext, useState } from "react";
import Footer from "../components/Footer";
import { PokemonNameContext } from "../lib/PokemonNameContext";
import { Card } from "../components/CardContainer";

export default function Favorite() {
  let localStorageFavorites = localStorage.getItem("favorites");
  let [Favorites, setFavorites] = useState(
    localStorageFavorites === null ? [] : JSON.parse(localStorageFavorites)
  );
  let FavoritePokemons = [];
  const { data, offset, setOffset, limit, setLimit } =
    useContext(PokemonNameContext);
  setLimit(1300);
  data.map((pokemon) => {
    for (let i in Favorites) {
      if (pokemon.name === Favorites[i]) {
        FavoritePokemons.push(pokemon);
      }
    }
  });
  return (
    <div>
      <a id="Pokedex">Favorite Pokemon</a>
      <div className="CardContainer">
        {FavoritePokemons.map((pokemon, index) => {
          return <Card pokemon={pokemon} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
