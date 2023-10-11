import { omit } from "lodash";
import type { ParseRawPokeData } from "../types/ParseRawPokeData";
import type { PokeData, PokeDataList } from "../types/PokeData";

const parseRawPokeData: ParseRawPokeData = (response) => {
  const parsedResponse: PokeDataList = [];

  for (const pokemons of response.gen3_species) {
    if (pokemons.pokemon_v2_pokemons.length) {
      // * Ignoring alola state and take the first element.
      const pokemon = pokemons.pokemon_v2_pokemons[0];
      const pokemonData: PokeData = {
        ...omit(pokemon, ["pokemon_v2_pokemonstats"]),
      };

      // * Assign each stat like key: value.
      for (const stat of pokemon.pokemon_v2_pokemonstats) {
        if (stat.pokemon_v2_stat && stat.pokemon_v2_stat.name) {
          pokemonData[stat.pokemon_v2_stat.name] = stat.base_stat;
        }
      }

      parsedResponse.push(pokemonData);
    }
  }

  return parsedResponse;
};

export default parseRawPokeData;
