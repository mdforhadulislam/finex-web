import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";

await configDB();

export default async function handler(req, res) {
  // Handle different HTTP methods
  switch (req.method) {
    case "POST":
    case "DELETE":
    case "PUT":
    case "PATCH":
      // For unsupported or error-prone methods, return a 500 server error
      response(res, 500, "Server side error", []);
      break;

    case "GET":
      // Handle GET requests
      const fromCountryId = req.query.from;
      const toCountryId = req.query.to;
      const parcelWeight = req.query.weight;

      // Check if all required query parameters are provided
      if (fromCountryId && toCountryId && parcelWeight) {
        try {
          // Fetch all price lists from the database
          const allPriceList = await Price.find();

          // Find the price list for the specified countries
          const findPriceList = allPriceList.find(
            (price) =>
              price.from.id == fromCountryId && price.to.id == toCountryId
          );

          if (findPriceList) {
            let price;
            let weight = Number(parcelWeight.split(" ")[0]);
            let weightType = parcelWeight.split(" ")[1];

            // Determine the pricing based on weight type
            switch (weightType.toLowerCase()) {
              case "kg":
                // Pricing logic for weight in kilograms
                if (weight >= 6 && weight <= 10) {
                  price = {
                    dhl: findPriceList.dhl?.kg6to10 ?? 0,
                    fedex: findPriceList.fedex?.kg6to10 ?? 0,
                    ups: findPriceList.ups?.kg6to10 ?? 0,
                    aramex: findPriceList.aramex?.kg6to10 ?? 0,
                  };
                } else if (weight >= 11 && weight <= 15) {
                  price = {
                    dhl: findPriceList.dhl?.kg11to15 ?? 0,
                    fedex: findPriceList.fedex?.kg11to15 ?? 0,
                    ups: findPriceList.ups?.kg11to15 ?? 0,
                    aramex: findPriceList.aramex?.kg11to15 ?? 0,
                  };
                } else if (weight >= 15 && weight <= 20) {
                  price = {
                    dhl: findPriceList.dhl?.kg16to20 ?? 0,
                    fedex: findPriceList.fedex?.kg16to20 ?? 0,
                    ups: findPriceList.ups?.kg16to20 ?? 0,
                    aramex: findPriceList.aramex?.kg16to20 ?? 0,
                  };
                } else if (weight >= 21 && weight <= 25) {
                  price = {
                    dhl: findPriceList.dhl?.kg21to25 ?? 0,
                    fedex: findPriceList.fedex?.kg21to25 ?? 0,
                    ups: findPriceList.ups?.kg21to25 ?? 0,
                    aramex: findPriceList.aramex?.kg21to25 ?? 0,
                  };
                } else if (weight >= 26 && weight <= 30) {
                  price = {
                    dhl: findPriceList.dhl?.kg26to30 ?? 0,
                    fedex: findPriceList.fedex?.kg26to30 ?? 0,
                    ups: findPriceList.ups?.kg26to30 ?? 0,
                    aramex: findPriceList.aramex?.kg26to30 ?? 0,
                  };
                } else if (weight >= 31 && weight <= 40) {
                  price = {
                    dhl: findPriceList.dhl?.kg31to40 ?? 0,
                    fedex: findPriceList.fedex?.kg31to40 ?? 0,
                    ups: findPriceList.ups?.kg31to40 ?? 0,
                    aramex: findPriceList.aramex?.kg31to40 ?? 0,
                  };
                } else if (weight >= 41 && weight <= 50) {
                  price = {
                    dhl: findPriceList.dhl?.kg41to50 ?? 0,
                    fedex: findPriceList.fedex?.kg41to50 ?? 0,
                    ups: findPriceList.ups?.kg41to50 ?? 0,
                    aramex: findPriceList.aramex?.kg41to50 ?? 0,
                  };
                } else if (weight >= 51 && weight <= 80) {
                  price = {
                    dhl: findPriceList.dhl?.kg51to80 ?? 0,
                    fedex: findPriceList.fedex?.kg51to80 ?? 0,
                    ups: findPriceList.ups?.kg51to80 ?? 0,
                    aramex: findPriceList.aramex?.kg51to80 ?? 0,
                  };
                } else if (weight >= 81 && weight <= 100) {
                  price = {
                    dhl: findPriceList.dhl?.kg81to100 ?? 0,
                    fedex: findPriceList.fedex?.kg81to100 ?? 0,
                    ups: findPriceList.ups?.kg81to100 ?? 0,
                    aramex: findPriceList.aramex?.kg81to100 ?? 0,
                  };
                } else if (weight >= 101 && weight <= 500) {
                  price = {
                    dhl: findPriceList.dhl?.kg101to500 ?? 0,
                    fedex: findPriceList.fedex?.kg101to500 ?? 0,
                    ups: findPriceList.ups?.kg101to500 ?? 0,
                    aramex: findPriceList.aramex?.kg101to500 ?? 0,
                  };
                } else if (weight >= 501 && weight <= 1000) {
                  price = {
                    dhl: findPriceList.dhl?.kg501to1000 ?? 0,
                    fedex: findPriceList.fedex?.kg501to1000 ?? 0,
                    ups: findPriceList.ups?.kg501to1000 ?? 0,
                    aramex: findPriceList.aramex?.kg501to1000 ?? 0,
                  };
                } else {
                  response(res, 400, "Weight related charge not found", []);
                  return; // Exit early if weight is not found
                }
                response(res, 200, "Per KG shipping charge", price);
                break;

              case "gm":
                // Pricing logic for weight in grams
                if (weight <= 500) {
                  price = {
                    dhl: findPriceList.dhl?.gm500 ?? 0,
                    fedex: findPriceList.fedex?.gm500 ?? 0,
                    ups: findPriceList.ups?.gm500 ?? 0,
                    aramex: findPriceList.aramex?.gm500 ?? 0,
                  };
                } else if (weight >= 501 && weight <= 1000) {
                  price = {
                    dhl: findPriceList.dhl?.gm1000 ?? 0,
                    fedex: findPriceList.fedex?.gm1000 ?? 0,
                    ups: findPriceList.ups?.gm1000 ?? 0,
                    aramex: findPriceList.aramex?.gm1000 ?? 0,
                  };
                } else if (weight >= 1001 && weight <= 1500) {
                  price = {
                    dhl: findPriceList.dhl?.gm1500 ?? 0,
                    fedex: findPriceList.fedex?.gm1500 ?? 0,
                    ups: findPriceList.ups?.gm1500 ?? 0,
                    aramex: findPriceList.aramex?.gm1500 ?? 0,
                  };
                } else if (weight >= 1501 && weight <= 2000) {
                  price = {
                    dhl: findPriceList.dhl?.gm2000 ?? 0,
                    fedex: findPriceList.fedex?.gm2000 ?? 0,
                    ups: findPriceList.ups?.gm2000 ?? 0,
                    aramex: findPriceList.aramex?.gm2000 ?? 0,
                  };
                } else if (weight >= 2001 && weight <= 2500) {
                  price = {
                    dhl: findPriceList.dhl?.gm2500 ?? 0,
                    fedex: findPriceList.fedex?.gm2500 ?? 0,
                    ups: findPriceList.ups?.gm2500 ?? 0,
                    aramex: findPriceList.aramex?.gm2500 ?? 0,
                  };
                } else if (weight >= 2501 && weight <= 3000) {
                  price = {
                    dhl: findPriceList.dhl?.gm3000 ?? 0,
                    fedex: findPriceList.fedex?.gm3000 ?? 0,
                    ups: findPriceList.ups?.gm3000 ?? 0,
                    aramex: findPriceList.aramex?.gm3000 ?? 0,
                  };
                } else if (weight >= 3001 && weight <= 3500) {
                  price = {
                    dhl: findPriceList.dhl?.gm3500 ?? 0,
                    fedex: findPriceList.fedex?.gm3500 ?? 0,
                    ups: findPriceList.ups?.gm3500 ?? 0,
                    aramex: findPriceList.aramex?.gm3500 ?? 0,
                  };
                } else if (weight >= 3501 && weight <= 4000) {
                  price = {
                    dhl: findPriceList.dhl?.gm4000 ?? 0,
                    fedex: findPriceList.fedex?.gm4000 ?? 0,
                    ups: findPriceList.ups?.gm4000 ?? 0,
                    aramex: findPriceList.aramex?.gm4000 ?? 0,
                  };
                } else if (weight >= 4001 && weight <= 4500) {
                  price = {
                    dhl: findPriceList.dhl?.gm4500 ?? 0,
                    fedex: findPriceList.fedex?.gm4500 ?? 0,
                    ups: findPriceList.ups?.gm4500 ?? 0,
                    aramex: findPriceList.aramex?.gm4500 ?? 0,
                  };
                } else if (weight >= 4501 && weight <= 5000) {
                  price = {
                    dhl: findPriceList.dhl?.gm5000 ?? 0,
                    fedex: findPriceList.fedex?.gm5000 ?? 0,
                    ups: findPriceList.ups?.gm5000 ?? 0,
                    aramex: findPriceList.aramex?.gm5000 ?? 0,
                  };
                } else if (weight >= 5001 && weight <= 5500) {
                  price = {
                    dhl: findPriceList.dhl?.gm5500 ?? 0,
                    fedex: findPriceList.fedex?.gm5500 ?? 0,
                    ups: findPriceList.ups?.gm5500 ?? 0,
                    aramex: findPriceList.aramex?.gm5500 ?? 0,
                  };
                } else {
                  response(res, 400, "Weight related charge not found", []);
                  return; // Exit early if weight is not found
                }
                response(res, 200, "Total Shipping Charge", price);
                break;

              default:
                // Handle unknown weight types
                response(
                  res,
                  400,
                  "Weight type wrong. Please provide correct weight type",
                  []
                );
            }
          } else {
            // If the price list for the given countries is not found
            response(res, 500, "Price List Not Found", []);
          }
        } catch (error) {
          // Handle any errors that occur during database operations
          response(res, 500, "Server side error", []);
        }
      } else {
        // If required query parameters are missing
        response(res, 401, "Not allowed to access", []);
      }
      break;

    default:
      // Handle unsupported HTTP methods
      response(res, 500, "Server side error", []);
  }
}
