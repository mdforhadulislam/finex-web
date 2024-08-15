import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";

configDB(); // Initialize the database connection

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    switch (req.method) {
      case "POST":
        return response(res, 405, "Method Not Allowed", []); // POST not supported

      case "GET":
        if (id) {
          const findPriceList = await Price.findById(id);
          if (findPriceList) {
            return response(res, 200, `${findPriceList.from.country} to ${findPriceList.to.country} Price List`, findPriceList);
          } else {
            return response(res, 404, "Not Found", []); // Not found
          }
        } else {
          return response(res, 400, "ID query parameter is required", []); // Bad request
        }

      case "DELETE":
        if (id) {
          const findPriceList = await Price.findByIdAndDelete(id);
          if (findPriceList) {
            return response(res, 200, "Successfully deleted price list", []);
          } else {
            return response(res, 404, "Not Found", []); // Not found
          }
        } else {
          return response(res, 400, "ID query parameter is required", []); // Bad request
        }

      case "PUT":
      case "PATCH":
        if (id) {
          const findPriceList = await Price.findById(id);
          if (findPriceList) {
            const { fromCountry, toCountry, dhlRate, fedexRate, upsRate, aramexRate } = req.body;

            if (fromCountry || toCountry || dhlRate || fedexRate || upsRate || aramexRate) {
              findPriceList.from = fromCountry ?? findPriceList.from;
              findPriceList.to = toCountry ?? findPriceList.to;
              findPriceList.dhl = dhlRate ?? findPriceList.dhl;
              findPriceList.fedex = fedexRate ?? findPriceList.fedex;
              findPriceList.ups = upsRate ?? findPriceList.ups;
              findPriceList.aramex = aramexRate ?? findPriceList.aramex;

              await findPriceList.save();

              return response(res, 200, "Successfully updated price list", []);
            } else {
              return response(res, 400, "No update data provided", []); // Bad request
            }
          } else {
            return response(res, 404, "Not Found", []); // Not found
          }
        } else {
          return response(res, 400, "ID query parameter is required", []); // Bad request
        }

      default:
        return response(res, 405, "Method Not Allowed", []); // Method not allowed
    }
  } catch (error) {
    console.error("Server error:", error);
    return response(res, 500, "Server Error", []); // Internal server error
  }
}