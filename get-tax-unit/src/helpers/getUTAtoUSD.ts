import * as cheerio from "cheerio";
import type { GetUtaToIso } from "../types/getUTAtoISO";

const getUTAtoUSD: GetUtaToIso = async () => {
  const currentYear = new Date().getFullYear();
  let endpointYear = currentYear;

  const offsetHeader = 2;
  const currentMonth = new Date().getMonth();
  let monthInTable = currentMonth + offsetHeader;

  let currentDay = new Date().getDate();
  // * In the first days of year the fields are empty, look for them in the prev year.
  if (currentDay <= 2 && currentMonth === 0) {
    currentDay = 30;
    monthInTable = 11 + offsetHeader;
    endpointYear -= 1;
  }

  const URL_UTA_USD = `https://www.sii.cl/valores_y_fechas/dolar/dolar${endpointYear}.htm`;

  return new Promise((resolve) => {
    fetch(URL_UTA_USD)
      .then((response) => response.text())
      .then((html) => {
        let currDay = currentDay;
        let tableMonth = monthInTable;

        const $ = cheerio.load(html);

        let condition = 0;
        let jumpAboveRow = 0;
        let counter = 0;
        while (condition === 0) {
          const usd = Number(
            $(
              `#mes_all tbody tr:nth-child(${
                currDay - jumpAboveRow
              }) td:nth-child(${tableMonth})`,
            )
              .text()
              .replace(/,/g, "X")
              .replace(/\./g, "")
              .replace(/X/g, "."),
          );

          jumpAboveRow += 1;
          if (currDay - jumpAboveRow === 0) {
            currDay = 31;
            tableMonth -= 1;
            jumpAboveRow = 0;
          }

          condition = usd;
          resolve([null, condition]);

          // ? EMERGENCY EXIT
          counter += 1;
          if (counter === 31) {
            console.log("BREAK");
            break;
          }
        }
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
};

export default getUTAtoUSD;
