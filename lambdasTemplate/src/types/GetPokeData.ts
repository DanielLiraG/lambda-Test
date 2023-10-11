import type { PokeDataList } from "./PokeData";

export type GetPokeData = (props?: {
  limit?: number;
  offset?: number;
}) => Promise<[Error | null, PokeDataList | null]>;
