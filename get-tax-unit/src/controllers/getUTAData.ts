import type { GetUtaData } from "../types/getUTAData";
import getUTAtoUSD from "../helpers/getUTAtoUSD";
import getUTAtoCLP from "../helpers/getUTAtoCLP";

const getUTAData: GetUtaData = async () => {
  const response = {
    uta_clp: 0,
    uta_usd: 0,
  };

  const todayDate = new Date();

  // * UTA TO CLP
  const [errorCLP, resCLP] = await getUTAtoCLP({
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
  });
  if (errorCLP) {
    throw errorCLP;
  }
  if (resCLP) response.uta_clp = resCLP;

  // * UTA TO USD
  const [errorUSD, resUSD] = await getUTAtoUSD({
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate(),
  });
  if (errorUSD) {
    throw errorUSD;
  }
  if (resUSD) response.uta_usd = resUSD;

  return response;
};

export default getUTAData;
