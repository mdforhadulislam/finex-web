import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Country from "@/libs/models/Country.Model";

// Initialize the database connection
configDB();

export default async function handler(req, res) {
  const { method, query, body } = req; // Destructure request properties
  const id = query?.id; // Get the 'id' from query parameters

  switch (method) {
    case "POST":
      // Handle POST requests (not supported for this endpoint)
      return response(res, 405, "Method Not Allowed", []); // Return 405 status for unsupported POST requests

    case "GET":
      // Handle GET requests: Fetch a single country by its ID
      if (id) {
        try {
          // Attempt to find the country by ID
          const findCountry = await Country.findById({ _id: id });
          if (findCountry) {
            // Country found, return it with a 200 status
            return response(res, 200, "Single Country", findCountry);
          } else {
            // Country not found, return a 404 status
            return response(res, 404, "Not Found", []);
          }
        } catch (error) {
          // Log and return a 500 status in case of server error
          console.error("Error fetching country:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // ID not provided, return a 500 status (bad request handling)
        return response(res, 500, "Server side error", []);
      }

    case "DELETE":
      // Handle DELETE requests: Delete a country by its ID
      if (id) {
        try {
          // Attempt to delete the country by ID
          const deleteCountry = await Country.findByIdAndDelete({ _id: id });
          if (deleteCountry) {
            // Country deleted, return a 200 status
            return response(res, 200, "Successfully deleted", []);
          } else {
            // Country not found, return a 404 status
            return response(res, 404, "Not Found", []);
          }
        } catch (error) {
          // Log and return a 500 status in case of server error
          console.error("Error deleting country:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // ID not provided, return a 500 status (bad request handling)
        return response(res, 500, "Server side error", []);
      }

    case "PUT":
    case "PATCH":
      // Handle PUT/PATCH requests: Update a country's name by its ID
      if (id) {
        const name = body.name || false; // Get the 'name' from request body

        if (name) {
          try {
            // Attempt to find the country by ID
            const findCountry = await Country.findById({ _id: id });
            if (findCountry) {
              // Country found, update its name
              findCountry.name = name;
              await findCountry.save(); // Save the updated country
              return response(res, 200, "Successfully updated", []);
            } else {
              // Country not found, return a 404 status
              return response(res, 404, "Not Found", []);
            }
          } catch (error) {
            // Log and return a 500 status in case of server error
            console.error("Error updating country:", error);
            return response(res, 500, "Server side error", []);
          }
        } else {
          // Name field is required but not provided, return a 400 status
          return response(res, 400, "Name field is required", []);
        }
      } else {
        // ID not provided, return a 500 status (bad request handling)
        return response(res, 500, "Server side error", []);
      }

    default:
      // Handle unsupported HTTP methods
      return response(res, 405, "Method Not Allowed", []); // Return 405 status for unsupported methods
  }
}
