import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const fromCountryId = req.query.from;
    const toCountryId = req.query.to;
    const parcelWeight = req.query.weight;
    if (fromCountryId && toCountryId && parcelWeight) {
      const allPriceList = await Price.find();
      const findPriceList = allPriceList.find(
        (price) => price.from.id == fromCountryId && price.to.id == toCountryId
      );
      if (findPriceList) {
        let price;
        let weight = Number(parcelWeight.split(" ")[0]);
        let weightType = parcelWeight.split(" ")[1];

        if (weightType == "KG" || weightType == "kg") {
          if (weight >= 6 && 10 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg6to10,
              fedex: findPriceList.fedex?.kg6to10,
              ups: findPriceList.ups?.kg6to10,
              aramex: findPriceList.aramex?.kg6to10,
            };
          } else if (weight >= 11 && 15 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg11to15,
              fedex: findPriceList.fedex?.kg11to15,
              ups: findPriceList.ups?.kg11to15,
              aramex: findPriceList.aramex?.kg11to15,
            };
          } else if (weight >= 15 && 20 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg16to20,
              fedex: findPriceList.fedex?.kg16to20,
              ups: findPriceList.ups?.kg16to20,
              aramex: findPriceList.aramex?.kg16to20,
            };
          } else if (weight >= 21 && 25 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg21to25,
              fedex: findPriceList.fedex?.kg21to25,
              ups: findPriceList.ups?.kg21to25,
              aramex: findPriceList.aramex?.kg21to25,
            };
          } else if (weight >= 26 && 30 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg26to30,
              fedex: findPriceList.fedex?.kg26to30,
              ups: findPriceList.ups?.kg26to30,
              aramex: findPriceList.aramex?.kg26to30,
            };
          } else if (weight >= 31 && 40 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg31to40,
              fedex: findPriceList.fedex?.kg31to40,
              ups: findPriceList.ups?.kg31to40,
              aramex: findPriceList.aramex?.kg31to40,
            };
          } else if (weight >= 41 && 50 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg41to50,
              fedex: findPriceList.fedex?.kg41to50,
              ups: findPriceList.ups?.kg41to50,
              aramex: findPriceList.aramex?.kg41to50,
            };
          } else if (weight >= 51 && 80 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg51to80,
              fedex: findPriceList.fedex?.kg51to80,
              ups: findPriceList.ups?.kg51to80,
              aramex: findPriceList.aramex?.kg51to80,
            };
          } else if (weight >= 81 && 100 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg81to100,
              fedex: findPriceList.fedex?.kg81to100,
              ups: findPriceList.ups?.kg81to100,
              aramex: findPriceList.aramex?.kg81to100,
            };
          } else if (weight >= 101 && 500 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg101to500,
              fedex: findPriceList.fedex?.kg101to500,
              ups: findPriceList.ups?.kg101to500,
              aramex: findPriceList.aramex?.kg101to500,
            };
          } else if (weight >= 501 && 1000 >= weight) {
            price = {
              dhl: findPriceList.dhl?.kg501to1000,
              fedex: findPriceList.fedex?.kg501to1000,
              ups: findPriceList.ups?.kg501to1000,
              aramex: findPriceList.aramex?.kg501to1000,
            };
          } else {
            response(res, 400, "weight related charge not found", []);
          }
          response(res, 200, "Par KG shiping Charge", price);
        } else if (weightType == "GM" || weightType == "gm") {
          if (weight <= 500) {
            price = {
              dhl: findPriceList.dhl?.gm500,
              fedex: findPriceList.fedex?.gm500,
              ups: findPriceList.ups?.gm500,
              aramex: findPriceList.aramex?.gm500,
            };
          } else if (weight >= 501 && weight <= 1000) {
            price = {
              dhl: findPriceList.dhl?.gm1000,
              fedex: findPriceList.fedex?.gm1000,
              ups: findPriceList.ups?.gm1000,
              aramex: findPriceList.aramex?.gm1000,
            };
          } else if (weight >= 1001 && weight <= 1500) {
            price = {
              dhl: findPriceList.dhl?.gm1500,
              fedex: findPriceList.fedex?.gm1500,
              ups: findPriceList.ups?.gm1500,
              aramex: findPriceList.aramex?.gm1500,
            };
          } else if (weight >= 1501 && weight <= 2000) {
            price = {
              dhl: findPriceList.dhl?.gm2000,
              fedex: findPriceList.fedex?.gm2000,
              ups: findPriceList.ups?.gm2000,
              aramex: findPriceList.aramex?.gm2000,
            };
          } else if (weight >= 2001 && weight <= 2500) {
            price = {
              dhl: findPriceList.dhl?.gm2500,
              fedex: findPriceList.fedex?.gm2500,
              ups: findPriceList.ups?.gm2500,
              aramex: findPriceList.aramex?.gm2500,
            };
          } else if (weight >= 2501 && weight <= 3000) {
            price = {
              dhl: findPriceList.dhl?.gm3000,
              fedex: findPriceList.fedex?.gm3000,
              ups: findPriceList.ups?.gm3000,
              aramex: findPriceList.aramex?.gm3000,
            };
          } else if (weight >= 3001 && weight <= 3500) {
            price = {
              dhl: findPriceList.dhl?.gm3500,
              fedex: findPriceList.fedex?.gm3500,
              ups: findPriceList.ups?.gm3500,
              aramex: findPriceList.aramex?.gm3500,
            };
          } else if (weight >= 3501 && weight <= 4000) {
            price = {
              dhl: findPriceList.dhl?.gm4000,
              fedex: findPriceList.fedex?.gm4000,
              ups: findPriceList.ups?.gm4000,
              aramex: findPriceList.aramex?.gm4000,
            };
          } else if (weight >= 4001 && weight <= 4500) {
            price = {
              dhl: findPriceList.dhl?.gm4500,
              fedex: findPriceList.fedex?.gm4500,
              ups: findPriceList.ups?.gm4500,
              aramex: findPriceList.aramex?.gm4500,
            };
          } else if (weight >= 4501 && weight <= 5000) {
            price = {
              dhl: findPriceList.dhl?.gm5000,
              fedex: findPriceList.fedex?.gm5000,
              ups: findPriceList.ups?.gm5000,
              aramex: findPriceList.aramex?.gm5000,
            };
          } else if (weight >= 5001 && weight <= 5500) {
            price = {
              dhl: findPriceList.dhl?.gm5500,
              fedex: findPriceList.fedex?.gm5500,
              ups: findPriceList.ups?.gm5500,
              aramex: findPriceList.aramex?.gm5500,
            };
          } else {
            response(res, 400, "weight related charge not found", []);
          }

          response(res, 200, "Total Shiping Charg", price);
        } else {
          response(
            res,
            400,
            "Weight type wrong. plz provid currect weight type",
            []
          );
        }
      } else {
        response(res, 500, "Server side error", []);
      }
    } else {
      response(res, 401, "Not allow to access", []);
    }
  } else if (req.method == "DELETE") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
