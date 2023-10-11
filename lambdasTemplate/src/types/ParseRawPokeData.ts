import type { PokeDataList } from "./PokeData";
import type { RawPokeData } from "./RawPokeData";

export type ParseRawPokeData = (response: RawPokeData) => PokeDataList;
