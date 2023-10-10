import * as cheerio from "cheerio";
import type { GetUtaToIso } from "../types/getUTAtoISO";

const getUTAtoCLP: GetUtaToIso = async () => {
  const currentYear = new Date().getFullYear();
  const URL_UTA_CLP = `https://www.sii.cl/valores_y_fechas/utm/utm${currentYear}.htm`;

  const offsetHeader = 1;
  const currentMonth = new Date().getMonth();
  const monthInTable = currentMonth + offsetHeader;

  return new Promise((resolve) => {
    fetch(URL_UTA_CLP)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        // * Parse UtaCLP string value
        const separatorPlaceholder = ";DECIMAL-SEPARATOR;";
        let utaCLPString = $(
          `tbody tr:nth-child(${monthInTable}) td:nth-child(3)`,
        )
          .text()
          .replace(",", separatorPlaceholder);
        if (utaCLPString.includes(separatorPlaceholder)) {
          utaCLPString = utaCLPString
            .replace(/\./g, "")
            .replace(";DECIMAL-SEPARATOR;", ".");
        }

        const utaCLP = Number(utaCLPString);
        resolve([null, utaCLP]);
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
};

export default getUTAtoCLP;
