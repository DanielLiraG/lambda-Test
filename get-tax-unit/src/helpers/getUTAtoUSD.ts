import * as cheerio from "cheerio";
import { isNumber } from "lodash";
import type { GetUtaToIso } from "../types/getUTAtoISO";
import { getLastDayOfMonth } from "./date";

const getUTAtoUSD: GetUtaToIso = async ({ year, month, day }) => {
  if (!isNumber(year) || !isNumber(month) || !isNumber(day)) {
    return [new Error("Bad Request"), null];
  }

  const offsetHeader = 2;

  const URL_UTA_USD = `https://www.sii.cl/valores_y_fechas/dolar/dolar${year}.htm`;

  return new Promise((resolve) => {
    fetch(URL_UTA_USD)
      .then((response) => response.text())
      .then(async (html) => {
        let currDay = day;
        let tableMonth = month + offsetHeader;

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

            // * If tableMonth is less than 2, it's not a month, looking for prev month.
            if (tableMonth < 2 && !usd) break;
          }

          condition = usd;

          // ? EMERGENCY EXIT
          counter += 1;
          if (counter === 31) {
            break;
          }
        }

        // * If it didn't find a value in the searched month, it searches in the previous month.
        if (!condition) {
          // * Get the currentDate
          const lookingDate = new Date(`${year}-${month + 1}-${day} 00:00:01`);

          // * Set lookingDate in the prev month at last day.
          lookingDate.setMonth(
            lookingDate.getMonth() - 1,
          );
          lookingDate.setDate(
            getLastDayOfMonth(
              lookingDate.getFullYear(),
              lookingDate.getMonth(),
            ),
          );

          resolve(
            await getUTAtoUSD({
              year: lookingDate.getFullYear(),
              day: lookingDate.getDate(),
              month: lookingDate.getMonth(),
            }),
          );
        } else {
          resolve([null, condition]);
        }
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
};

export default getUTAtoUSD;
