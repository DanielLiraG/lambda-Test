import { omit } from "lodash";
import type { ParseRawPokeData } from "../types/ParseRawPokeData";

const parseRawPokeData: ParseRawPokeData = (response) => {
  const rawPokemons = response.pokemon_v2_pokemon || [];

  return rawPokemons.map((pokemon) => {
    const statsObject = pokemon.pokemon_v2_pokemonstats.reduce(
      (object, stat) => {
        object[stat.pokemon_v2_stat.name] = stat.base_stat;
        return object;
      },
      {} as { [key: string]: number },
    );

    return {
      ...omit(pokemon, ["pokemon_v2_pokemonstats"]),
      ...statsObject,
    };
  });
};

export default parseRawPokeData;
