import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";


configDB()

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const id = req.query?.id;
    if (id) {
      const findPriceList = await Price.findById({ _id: id });
      if (findPriceList) {
        response(res, 200, `${findPriceList.from.country} to ${findPriceList.to.country} Price List`, findPriceList);
      } else {
        response(res, 404, "Not found", []);
      }
    } else {
      response(res, 401, "Not allow to access", []);
    }


  } else if (req.method == "DELETE") {
    const id = req.query?.id;
    if (id) {
      const findPriceList = await Price.findByIdAndDelete({ _id: id });
      console.log(findPriceList);
      if (findPriceList) {
        response(res, 200, "Successfuly delete price list", []);
      } else {
        response(res, 404, "Not found", []);
      }
    } else {
      response(res, 401, "Not allow to access", []);
    }
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const id = req.query?.id;
    if (id) {
      const findPriceList = await Price.findById({ _id: id });
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
  } else {
    response(res, 500, "Server side error", []);
  }
}
