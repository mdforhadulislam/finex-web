import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Visitor from "@/libs/models/Visitor.Model";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  const { method, body } = req; // Destructure method and body from the request

  try {
    switch (method) {
      case "POST":
        // Extract data from the request body with default values
        const name = body.name || ""; // Default to an empty string if name is not provided
        const phone = body.phone || ""; // Default to an empty string if phone is not provided
        const email = body.email || ""; // Default to an empty string if email is not provided
        const location = body.location || {
          // Default to a location object if not provided
          lan: 0,
          lon: 0,
          accuracy: 0,
        };
        const date = body.date || new Date(); // Default to the current date if date is not provided

        // Create a new visitor document
        const createVisitor = new Visitor({
          name,
          phone,
          email,
          location,
          date,
        });

        // Save the new visitor to the database
        const saveVisitor = await createVisitor.save();

        return response(res, 200, "Visitor Data", []); // Return success response with message

      case "GET":
        // Fetch all visitor documents from the database
        const allVisitor = await Visitor.find();
        return response(res, 200, "All Visitor Data", allVisitor); // Return success response with all visitor data

      case "DELETE":
      case "PUT":
      case "PATCH":
        // Return 501 Not Implemented for unsupported methods
        return response(res, 501, "Method not implemented", []);

      default:
        // Return 405 Method Not Allowed for unsupported HTTP methods
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    // Log and return error response for server-side issues
    console.error("API handler error:", error);
    return response(res, 500, "Internal Server Error", []); // Return 500 Internal Server Error
  }
}
