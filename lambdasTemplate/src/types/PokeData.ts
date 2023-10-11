export type PokeData = {
  name: string;
  height: number;
  weight: number;
  [key: string]: number | string;
};

export type PokeDataList = Array<PokeData>;
