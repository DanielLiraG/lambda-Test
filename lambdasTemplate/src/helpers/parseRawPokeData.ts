import type { ParseRawPokeData } from "../types/ParseRawPokeData";
import { omit } from "lodash";

const parseRawPokeData: ParseRawPokeData = (response) => {
  const rawPokemons = response.pokemon_v2_pokemon || []

  return rawPokemons.map(pokemon => {
    const statsObject = pokemon.pokemon_v2_pokemonstats.reduce((acc, stat) => {
      acc[stat.pokemon_v2_stat.name] = stat.base_stat;
      return acc;
    }, {} as { [key: string]: number });

    return {
      ...omit(pokemon, ['pokemon_v2_pokemonstats']),
      ...statsObject,
    }
});
};

export default parseRawPokeData;
