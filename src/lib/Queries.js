import { gql } from "@apollo/client";

export const GET_ALL_POKEMON_NAME = gql`
  query GetPokemonNames($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        artwork
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      weight
      height
      sprites {
        front_default
      }
    }
  }
`;
