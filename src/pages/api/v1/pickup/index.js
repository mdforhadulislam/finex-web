import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB(); // Initialize the database connection

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        // Handle POST request to create a new pickup
        const { name, phone, dateTime, address, weight } = req.body;
        
        if (name && phone && dateTime && address) {
          const newPickupRequest = new Pickup({
            name,
            phone,
            dateTime: new Date(dateTime), // Ensure dateTime is a Date object
            address,
            weight
          });

          await newPickupRequest.save(); // Save the new pickup to the database

          return response(res, 200, "Pickup Created", []); // Success response with status 201 Created
        } else {
          return response(res, 400, "Invalid Data Provided", []); // Bad request response
        }

      case "GET":
        // Handle GET request to retrieve all pickups
        const allPickups = await Pickup.find(); // Find all pickups
        return response(res, 200, "All Pickups", allPickups.reverse()); // Success response with reversed array

      case "DELETE":
      case "PUT":
      case "PATCH":
        // Return 405 error for unsupported methods
        return response(res, 405, "Method Not Allowed", []);

      default:
        // Return 405 error for unsupported methods
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    console.error("Server error:", error);
    return response(res, 500, "Server Side Error", []); // Internal server error response
  }
}