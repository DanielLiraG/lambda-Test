import { request, gql } from "graphql-request";

import parseRawPokeData from "../helpers/parseRawPokeData";
import type { RawPokeData } from "../types/RawPokeData";
import type { PokeData, PokeDataList } from "../types/PokeData";
import type { GetPokeData } from "../types/GetPokeData";

const getPokeData: GetPokeData = async ({ limit = 76, offset = 42 } = {}) => {
  try {
    const query = gql`
      query getPokeData {
        pokemon_v2_pokemon(limit: ${limit - offset}, offset: ${offset}) {
          height
          id
          name
          pokemon_v2_pokemonstats {
            base_stat
            pokemon_v2_stat {
              name
            }
          }
          weight
        }
      }
    `;

    const response: RawPokeData = await request(
      "https://beta.pokeapi.co/graphql/v1beta/",
      query,
    );

    // * Parse the RawPokeData.
    const parsedResponse: PokeDataList = parseRawPokeData(response);

    // * Sort ASC pokemon list by id
    const sortedResponse: PokeDataList = parsedResponse.sort((a, b) => a.id - b.id)

    return [null, sortedResponse];
  } catch (error) {
    return [error as Error, null];
  }
};

export default getPokeData;
