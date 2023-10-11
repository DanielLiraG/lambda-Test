export type RawPokeData = {
  gen3_species: Array<{
    pokemon_v2_pokemons: Array<{
      pokemon_v2_pokemonstats: Array<{
        base_stat: number;
        pokemon_v2_stat: {
          name: string;
        };
      }>;
      weight: number;
      name: string;
      height: number;
    }>;
  }>;
};
