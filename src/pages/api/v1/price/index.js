import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Price from "@/libs/models/Price.Model";
import { createPrice } from "@/libs/repositories/price.repositories";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  try {
    // Extract query parameters
    const { from, to } = req.query;

    // Handle different HTTP methods
    switch (req.method) {
      case "POST":
        // Handle POST request to create a new price list
        const {
          fromCountry,
          toCountry,
          dhlRate,
          fedexRate,
          upsRate,
          aramexRate,
        } = req.body;

        // Validate request body
        if (
          fromCountry &&
          toCountry &&
          dhlRate &&
          fedexRate &&
          upsRate &&
          aramexRate
        ) {
          // Create a new price list entry
          const createPriceList = await createPrice(
            fromCountry,
            toCountry,
            dhlRate,
            fedexRate,
            upsRate,
            aramexRate
          );
          // Return success response with 201 Created status
          return response(res, 201, "Price List Created", createPriceList);
        } else {
          // Return error response for missing or invalid data
          return response(res, 400, "Provide Valid Data", []);
        }

      case "GET":
        // Handle GET request to fetch price list details
        if (from && to) {
          // Fetch price list for specific from and to country IDs
          const findPriceList = await Price.findOne({
            "from.id": from,
            "to.id": to,
          });
          if (findPriceList) {
            // Return success response with price list details
            return response(
              res,
              200,
              `${findPriceList.from.country} to ${findPriceList.to.country} Price List`,
              findPriceList
            );
          } else {
            // Return error response if price list not found
            return response(res, 404, "Not Found", []);
          }
        } else {
          // Fetch all price lists if no specific from and to country IDs are provided
          const allPriceList = await Price.find();
          // Return success response with all price lists
          return response(res, 200, "All Price List", allPriceList);
        }

      case "PUT":
      case "PATCH":
        // Handle PUT and PATCH requests to update existing price list
        if (from && to) {
          // Fetch price list for specific from and to country IDs
          const findPriceList = await Price.findOne({
            "from.id": from,
            "to.id": to,
          });
          if (findPriceList) {
            // Extract update data from request body
            const {
              fromCountry,
              toCountry,
              dhlRate,
              fedexRate,
              upsRate,
              aramexRate,
            } = req.body;

            // Update price list with provided data
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

              // Save the updated price list
              await findPriceList.save();
              // Return success response
              return response(res, 200, "Successfully Updated Price List", []);
            } else {
              // Return error response if no update data is provided
              return response(res, 400, "Provide Data to Update", []);
            }
          } else {
            // Return error response if price list not found
            return response(res, 404, "Not Found", []);
          }
        } else {
          // Return error response if required query parameters are missing
          return response(res, 400, "ID query parameters are required", []);
        }

      case "DELETE":
        // Handle DELETE request to remove a price list
        if (from && to) {
          // Delete price list for specific from and to country IDs
          const deletePriceList = await Price.findOneAndDelete({
            "from.id": from,
            "to.id": to,
          });
          if (deletePriceList) {
            // Return success response
            return response(res, 200, "Successfully Deleted Price List", []);
          } else {
            // Return error response if price list not found
            return response(res, 404, "Not Found", []);
          }
        } else {
          // Return error response if required query parameters are missing
          return response(res, 400, "ID query parameters are required", []);
        }

      default:
        // Return error response for unsupported HTTP methods
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    // Log and return error response for server-side errors
    console.error("Server error:", error);
    return response(res, 500, "Server Error", []);
  }
}
