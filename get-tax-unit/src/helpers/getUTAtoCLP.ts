import * as cheerio from "cheerio";
import type { GetUtaToIso } from "../types/getUTAtoISO";

const getUTAtoCLP: GetUtaToIso = async ({ year, month }) => {
  const URL_UTA_CLP = `https://www.sii.cl/valores_y_fechas/utm/utm${year}.htm`;

  const offsetHeader = 1;
  const monthInTable = month + offsetHeader;

  return new Promise((resolve) => {
    fetch(URL_UTA_CLP)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        // * Parse UtaCLP string value
        const utaCLPString = $(
          `tbody tr:nth-child(${monthInTable}) td:nth-child(3)`,
        )
          .text()
          .replace(/,/g, "X")
          .replace(/\./g, "")
          .replace(/X/g, ".");

        const utaCLP = Number(utaCLPString);
        resolve([null, utaCLP]);
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
};

export default getUTAtoCLP;
