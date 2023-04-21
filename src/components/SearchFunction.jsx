import "../style/SearchFunction.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON_NAME } from "../lib/Queries.js";
import { useContext, useState } from "react";
import { Card } from "./CardContainer";
import { PokemonNameContext } from "../lib/PokemonNameContext";

export default function SearchFunction() {
  const [search, setSearch] = useState("abcdefghijklmnopqrstuvwxyz");

  if (search === "") {
    setSearch("abcdefghijklmnopqrstuvwxyz");
  }

  const { data, offset, setOffset, limit, setLimit } =
    useContext(PokemonNameContext);
  setLimit(1300);
  const searchedPokemons = data.filter((pokemon, index) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(searchedPokemons);

  return (
    <div className="searchFunction">
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        placeholder="Input Pokemon Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchedPokemons.map((pokemon) => {
        return (
          <div>
            <Card pokemon={pokemon} />
          </div>
        );
      })}
    </div>
  );
}
