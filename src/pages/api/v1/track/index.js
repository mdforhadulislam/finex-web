import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Tracking from "@/libs/models/Tracking.Model";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  try {
    // Handle different HTTP methods
    switch (req.method) {
      case "POST":
        // Handle POST request (currently returns an error response)
        return response(res, 400, "Server side error", []); // Use 400 Bad Request for unhandled cases

      case "GET":
        // Handle GET request to fetch all tracking records
        const trackData = await Tracking.find(); // Fetch all tracking data from the database
        return response(res, 200, "All Tracking", trackData); // Return success response with tracking data

      case "DELETE":
        // Handle DELETE request (currently returns an error response)
        return response(res, 400, "Server side error", []); // Use 400 Bad Request for unhandled cases

      case "PUT":
      case "PATCH":
        // Handle PUT and PATCH requests (currently returns an error response)
        return response(res, 400, "Server side error", []); // Use 400 Bad Request for unhandled cases

      default:
        // Handle unsupported HTTP methods
        return response(res, 405, "Method Not Allowed", []); // Use 405 Method Not Allowed
    }
  } catch (error) {
    // Log and return error response for server-side errors
    console.error("Server error:", error);
    return response(res, 500, "Server Error", []); // Use 500 Internal Server Error
  }
}