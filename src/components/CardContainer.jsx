import "../style/CardContainer.css";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../lib/Queries.js";
import { useContext } from "react";
import { PokemonNameContext } from "../lib/PokemonNameContext";

export function CardContainer() {
  const { data, offset, setOffset, limit, setLimit } =
    useContext(PokemonNameContext);

  let HandlePrev = () => {
    if (offset === 0) {
      setOffset(1200);
    } else {
      setOffset(offset - 100);
    }
  };

  let HandleNext = () => {
    if (offset === 1000) {
      setOffset(0);
    } else {
      setOffset(offset + 100);
    }
  };

  return (
    <div>
      <a id="Pokedex">Pokedex</a>
      <div className="CardContainer">
        {data.map((pokemon, index) => {
          return <Card pokemon={pokemon} />;
        })}
      </div>
      <div className="Navigator">
        <button onClick={HandlePrev}>Previous</button>
        <button onClick={HandleNext}>Next</button>
      </div>
    </div>
  );
}

export function Card({ pokemon }) {
  let name = pokemon.name;
  let Name = name.charAt(0).toUpperCase() + name.slice(1);
  const { loading, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: pokemon.name,
    },
  });
  if (loading) return;
  const types = data.pokemon.types.map((type) => type.type.name);
  return (
    <a href={`/detail/${pokemon.name}-${pokemon.artwork.split("/")[10]}`}>
      <div className="Card" type={types[0]}>
        <img src={pokemon.artwork} alt={pokemon.name} />
        <p>{Name}</p>
      </div>
    </a>
  );
}
