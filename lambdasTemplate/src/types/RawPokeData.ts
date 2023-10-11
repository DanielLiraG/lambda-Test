export type RawPokeData = {
  pokemon_v2_pokemon: Array<{
    id: number;
    name: string;
    height: number;
    pokemon_v2_pokemonstats: Array<{
      base_stat: number;
      pokemon_v2_stat: {
        name: string;
      };
    }>;
    weight: number;
  }>;
};
