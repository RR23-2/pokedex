import React, { createContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON_NAME } from "./Queries";

export const PokemonNameContext = createContext();

export function PokemonNameContextProvider({ children }) {
  const PokemonNames = [];
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const { loading, data } = useQuery(GET_ALL_POKEMON_NAME, {
    variables: {
      limit: limit,
      offset: offset,
    },
  });
  if (loading) {
    return;
  }
  data.pokemons.results.map((pokemon) => {
    return PokemonNames.push(pokemon);
  });
  return (
    <PokemonNameContext.Provider
      value={{ data: PokemonNames, offset, setOffset, limit, setLimit }}
    >
      {children}
    </PokemonNameContext.Provider>
  );
}
