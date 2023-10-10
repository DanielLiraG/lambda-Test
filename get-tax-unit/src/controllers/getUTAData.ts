import type { RequestHandler } from "express";
import { GetUTADataType } from "../types/GetUTAData";
import getUTAtoUSD from "../helpers/getUTAtoUSD";
import getUTAtoCLP from "../helpers/getUTAtoCLP";

const getUTAData: GetUTADataType = async () => {
  const response = {
    uta_clp: 0,
    uta_usd: 0,
  };

  // * UTA TO CLP
  const [errorCLP, resCLP] = await getUTAtoCLP();
  if (errorCLP) {
    throw errorCLP;
  }
  if (resCLP) response.uta_clp = resCLP;

  // * UTA TO USD
  const [errorUSD, resUSD] = await getUTAtoUSD();
  if (errorUSD) {
    throw errorUSD;
  }
  if (resUSD) response.uta_usd = resUSD;

  return response;
};

export default getUTAData;
