const express = require("express");
const rp = require("request-promise");
const cheerio = require("cheerio");

const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const router = express.Router();

router.get("/", async (req, res) => {
  let response = {};

  let currentYear = new Date().getFullYear();
  // UTA TO CLP
  const URL_UTA_CPL = ``;
  const offsetHeader = 1;
  const currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let monthInTable = currentMonth + offsetHeader;
  await rp(URL_UTA_CPL)
    .then(function (html) {
      let $ = cheerio.load(html);
      const utaCpl = Number(
        $(`tbody tr:nth-child(${monthInTable}) td:nth-child(3)`)
          .text()

          .replace(/,/g, "X")
          .replace(/\./g, "")
          .replace(/X/g, ".")
      );

      response["uta_cpl"] = utaCpl;
    })
    .catch(function (err) {
      console.log("UTA TO CPL ERROR", err);
      res.send(err);
    });
  //

  // UTA TO USD
  console.log("curreYear", currentYear);
  const URL_UTA_USD = ``;

  monthInTable++;
  await rp(URL_UTA_USD)
    .then(function (html) {
      console.log("ri", currentDay, monthInTable);
      let $ = cheerio.load(html);

      let condition = 0;
      let jumpAboveRow = 0;
      let counter = 0;
      while (condition === 0) {
        const usd = Number(
          $(
            `#mes_all tbody tr:nth-child(${
              currentDay - jumpAboveRow
            }) td:nth-child(${monthInTable})`
          )
            .text()
            .replace(/,/g, "X")
            .replace(/\./g, "")
            .replace(/X/g, ".")
        );

        jumpAboveRow++;
        if (currentDay - jumpAboveRow === 0) {
          currentDay = 31;
          monthInTable--;
          jumpAboveRow = 0;
        }
        condition = usd;
        response["uta_usd"] = condition;

        // EMERGENCY EXIT
        counter++;
        if (counter === 31) {
          console.log("BREAK");
          break;
        }
      }
    })
    .catch(function (err) {
      console.log("UTA TO USD ERROR", err);
      res.send(err);
    });
  //

  res.send(response);
});

module.exports = router;
