import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB(); // Initialize the database connection

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
    case "GET":
    case "DELETE":
      // Return a 405 error for unsupported methods
      return response(res, 405, "Method Not Allowed", []);

    case "PUT":
    case "PATCH":
      // Handle PUT and PATCH requests
      const pickupID = req.query?.pickupID; // Extract pickupID from query parameters
      if (pickupID) {
        try {
          const findPickup = await Pickup.findOne({ _id: pickupID }); // Find the pickup by ID
          if (findPickup) {
            // Extract data from request body with default values
            const staffPhone = req.body.staffPhone ?? false;
            const confirm = req.body.confirm ?? true;
            const cost = req.body.cost ?? false;
            const dateTime = req.body.dateTime ?? new Date();

            if (staffPhone && confirm && cost && dateTime) {
              // Update the pickup record
              findPickup.isConfirm = {
                staffPhone,
                confirm,
                dateTime,
                cost
              };

              await findPickup.save(); // Save changes to the database

              return response(res, 200, "Accepted Pickup", []); // Success response
            } else {
              return response(res, 400, "Provide valid values", []); // Bad request response
            }
          } else {
            return response(res, 400, "Not Found", []); // Pickup not found response
          }
        } catch (error) {
          console.error("Error updating pickup:", error);
          return response(res, 500, "Server side error", []); // Server error response
        }
      } else {
        return response(res, 400, "Not Allowed To Access", []); // Bad request response for missing pickupID
      }

    default:
      // Return a 405 error for unsupported methods
      return response(res, 405, "Method Not Allowed", []);
  }
}