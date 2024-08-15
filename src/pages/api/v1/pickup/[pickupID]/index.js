import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB(); // Initialize the database connection

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Return a 405 error for unsupported methods
      return response(res, 405, "Method Not Allowed", []);

    case "GET":
      // Handle GET request to retrieve a pickup by ID
      const pickupID = req.query?.pickupID;
      if (pickupID) {
        try {
          const findPickup = await Pickup.findOne({ _id: pickupID }); // Find the pickup by ID
          if (findPickup) {
            return response(res, 200, "Pickup Found", findPickup); // Success response with pickup data
          } else {
            return response(res, 404, "Not Found", []); // Pickup not found response
          }
        } catch (error) {
          console.error("Error finding pickup:", error);
          return response(res, 500, "Server side error", []); // Server error response
        }
      } else {
        return response(res, 400, "Invalid Request", []); // Bad request response for missing pickupID
      }

    case "DELETE":
      // Handle DELETE request to remove a pickup by ID
      const deletePickupID = req.query?.pickupID;
      if (deletePickupID) {
        try {
          const findPickup = await Pickup.findOne({ _id: deletePickupID }); // Find the pickup by ID
          if (findPickup) {
            await Pickup.findByIdAndDelete(deletePickupID); // Delete the pickup
            return response(res, 200, "Pickup Deleted", []); // Success response
          } else {
            return response(res, 404, "Not Found", []); // Pickup not found response
          }
        } catch (error) {
          console.error("Error deleting pickup:", error);
          return response(res, 500, "Server side error", []); // Server error response
        }
      } else {
        return response(res, 400, "Invalid Request", []); // Bad request response for missing pickupID
      }

    case "PUT":
    case "PATCH":
      // Handle PUT and PATCH requests to update a pickup by ID
      const updatePickupID = req.query?.pickupID;
      if (updatePickupID) {
        try {
          const findPickup = await Pickup.findOne({ _id: updatePickupID }); // Find the pickup by ID
          if (findPickup) {
            // Extract data from request body with default values
            const name = req.body.name ?? findPickup.name;
            const phone = req.body.phone ?? findPickup.phone;
            const dateTime = req.body.dateTime ?? findPickup.dateTime;
            const address = req.body.address ?? findPickup.address;
            const weight = req.body.weight ?? findPickup.weight;
            const staffPhone =
              req.body.isConfirm?.staffPhone ?? findPickup.isConfirm.staffPhone;
            const confirm =
              req.body.isConfirm?.confirm ?? findPickup.isConfirm.confirm;
            const cost = req.body.isConfirm?.cost ?? findPickup.isConfirm.cost;
            const pickupTime =
              req.body.isConfirm?.dateTime ?? findPickup.isConfirm.dateTime;

            // Update pickup fields
            findPickup.name = name;
            findPickup.phone = phone;
            findPickup.dateTime = dateTime;
            findPickup.address = address;
            findPickup.weight = weight;
            findPickup.isConfirm = {
              staffPhone,
              confirm,
              cost,
              dateTime: pickupTime,
            };

            await findPickup.save(); // Save changes to the database

            return response(res, 200, "Pickup Updated", []); // Success response
          } else {
            return response(res, 404, "Not Found", []); // Pickup not found response
          }
        } catch (error) {
          console.error("Error updating pickup:", error);
          return response(res, 500, "Server side error", []); // Server error response
        }
      } else {
        return response(res, 400, "Invalid Request", []); // Bad request response for missing pickupID
      }

    default:
      // Return a 405 error for unsupported methods
      return response(res, 405, "Method Not Allowed", []);
  }
}
