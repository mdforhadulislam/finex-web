import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";
import { createPrice } from "@/libs/repositories/price.repositories";

await configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const fromCountry = req.body.fromCountry ? req.body.fromCountry : false;
    const toCountry = req.body.toCountry ? req.body.toCountry : false;

    const dhlRate = req.body.dhlRate ? req.body.dhlRate : false;
    const fedexRate = req.body.fedexRate ? req.body.fedexRate : false;
    const upsRate = req.body.upsRate ? req.body.upsRate : false;
    const aramexRate = req.body.aramexRate ? req.body.aramexRate : false;
    if (
      fromCountry &&
      toCountry &&
      dhlRate &&
      fedexRate &&
      upsRate &&
      aramexRate
    ) {
      const createPriceList = await createPrice(
        fromCountry,
        toCountry,
        dhlRate,
        fedexRate,
        upsRate,
        aramexRate
      );

      response(res, 200, "Price List Created", createPriceList);
    } else {
      response(res, 400, "Provied Valid Data", []);
    }
  } else if (req.method == "GET") {
    const fromCountryId = req.query.from;
    const toCountryId = req.query.to;
    if (fromCountryId && toCountryId) {
      const allPriceList = await Price.find();
      const findPriceList = allPriceList.find(
        (price) => price.from.id == fromCountryId && price.to.id == toCountryId
      );
      if (findPriceList) {
        response(
          res,
          200,
          `${findPriceList.from.country} to ${findPriceList.to.country} Price List`,
          findPriceList
        );
      } else {
        response(res, 200, "Not Found", []);
      }
    } else {
      const allPriceList = await Price.find();
      response(res, 200, "All Price List", allPriceList);
    }
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const fromCountryId = req.query.from;
    const toCountryId = req.query.to;
    if (fromCountryId && toCountryId) {
      const allPriceList = await Price.find();
      const findPriceList = allPriceList.find(
        (price) => price.from.id == fromCountryId && price.to.id == toCountryId
      );
      if (findPriceList) {
        const fromCountry = req.body.fromCountry ? req.body.fromCountry : false;
        const toCountry = req.body.toCountry ? req.body.toCountry : false;

        const dhlRate = req.body.dhlRate ? req.body.dhlRate : false;
        const fedexRate = req.body.fedexRate ? req.body.fedexRate : false;
        const upsRate = req.body.upsRate ? req.body.upsRate : false;
        const aramexRate = req.body.aramexRate ? req.body.aramexRate : false;

        if (
          fromCountry ||
          toCountry ||
          dhlRate ||
          fedexRate ||
          upsRate ||
          aramexRate
        ) {
          findPriceList.from = fromCountry ?? findPriceList.from;
          findPriceList.to = toCountry ?? findPriceList.to;
          findPriceList.dhl = dhlRate ?? findPriceList.dhl;
          findPriceList.fedex = fedexRate ?? findPriceList.fedex;
          findPriceList.ups = upsRate ?? findPriceList.ups;
          findPriceList.aramex = aramexRate ?? findPriceList.aramex;

          await findPriceList.save();

          response(res, 200, "Successfuly update price list", []);
        } else {
          response(res, 200, "Provied update Data", []);
        }
      } else {
        response(res, 200, "Not Found", []);
      }
    } else {
      response(res, 401, "Not allow to access", []);
    }
  } else if (req.method == "DELETE") {
    response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
