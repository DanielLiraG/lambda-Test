type GetUtaToIsoResponse = Promise<[Error | null, number | null]>;

export type GetUtaToIso = (_props: {
  year: number;
  month: number;
  day?: number;
}) => GetUtaToIsoResponse;
