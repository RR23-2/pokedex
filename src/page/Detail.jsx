import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../lib/Queries";
import { useQuery } from "@apollo/client";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Detail() {
  const checkIsFavorite = () => {
    let found = false;
    if (Favorites !== null) {
      Favorites.forEach((pokemon) => {
        if (pokemon === name) found = true;
      });
    }
    setIsFavorite(found);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);
  let [isFavorite, setIsFavorite] = useState(false);
  let localStorageFavorites = localStorage.getItem("favorites");
  let [Favorites, setFavorites] = useState(
    localStorageFavorites === null ? [] : JSON.parse(localStorageFavorites)
  );

  let name = useParams();
  let imageDir = name.pokemonName.split("-")[1];
  name = name.pokemonName.split("-")[0];
  const { loading, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: name,
    },
  });
  if (loading) return;
  const types = data.pokemon.types.map((type) => type.type.name);
  function handleFavorite(e) {
    if (isFavorite === false) {
      e.preventDefault();
      Favorites.push(name);
      localStorage.setItem("favorites", JSON.stringify(Favorites));
      setIsFavorite(true);
    } else if (isFavorite === true) {
      e.preventDefault();
      console.log("Deleted");
      Favorites.splice(Favorites.indexOf(name), 1);
      localStorage.setItem("favorites", JSON.stringify(Favorites));
      setIsFavorite(false);
    }
  }

  const type =
    types[1] === undefined
      ? types[0].charAt(0).toUpperCase() + types[0].slice(1)
      : types[0].charAt(0).toUpperCase() +
        types[0].slice(1) +
        ", " +
        types[1].charAt(0).toUpperCase() +
        types[1].slice(1);

  return (
    <div>
      <a id="Pokedex">Detail</a>
      <div className="detail">
        <div className="Card" type={types[0]}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imageDir}`}
            alt={name}
          />
          <div className="details">
            <p>
              Name : {data.pokemon.name.charAt(0).toUpperCase()}
              {data.pokemon.name.slice(1)}
            </p>
            <p>Types : {type} </p>
            <p>Weight: {data.pokemon.weight}</p>
            <p>Height: {data.pokemon.height}</p>
          </div>
        </div>
        <button className="FavoriteButton" onClick={handleFavorite}>
          {isFavorite === true ? "Remove from Favorite" : "Add to Favorite"}
        </button>
      </div>
      <Footer />
    </div>
  );
}
