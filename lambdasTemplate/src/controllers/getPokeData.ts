import { request, gql } from "graphql-request";

import parseRawPokeData from "../helpers/parseRawPokeData";
import type { RawPokeData } from "../types/RawPokeData";
import type { PokeDataList } from "../types/PokeData";
import type { GetPokeData } from "../types/GetPokeData";

const getPokeData: GetPokeData = async ({ limit = 76, offset = 43 } = {}) => {
  try {
    const query = gql`
      query getPokeData {
        gen3_species: pokemon_v2_pokemonspecies(limit: ${
          limit - offset
        }, offset: ${offset}) {
          pokemon_v2_pokemons {
            pokemon_v2_pokemonstats {
              base_stat
              pokemon_v2_stat {
                name
              }
            }
            weight
            name
            height
          }
        }
      }
    `;

    const response: RawPokeData = await request(
      "https://beta.pokeapi.co/graphql/v1beta/",
      query,
    );

    // * Parse the RawPokeData.
    const parsedResponse: PokeDataList = parseRawPokeData(response);

    return [null, parsedResponse];
  } catch (error) {
    return [error as Error, null];
  }
};

export default getPokeData;
