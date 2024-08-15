import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Country from "@/libs/models/Country.Model";

// Initialize the database connection
configDB();

export default async function handler(req, res) {
  const { method, body } = req; // Destructure request properties

  switch (method) {
    case "POST":
      // Handle POST requests: Add a new country
      const name = body.name || false; // Get the 'name' from request body

      if (name) {
        try {
          // Create a new Country instance
          const createCountry = new Country({ name });
          const newCountry = await createCountry.save(); // Save the new country to the database

          // Return a success response
          return response(res, 200, "Successfully added new country", newCountry);
        } catch (error) {
          // Log and return a 500 status in case of server error
          console.error("Error adding country:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // Return a 400 status if the 'name' is not provided
        return response(res, 400, "Please provide a country name", []);
      }

    case "GET":
      // Handle GET requests: Fetch all countries
      try {
        // Retrieve all countries from the database
        const allCountry = await Country.find();
        return response(res, 200, "Fetched all countries", allCountry);
      } catch (error) {
        // Log and return a 500 status in case of server error
        console.error("Error fetching countries:", error);
        return response(res, 500, "Server side error", []);
      }

    case "DELETE":
    case "PUT":
    case "PATCH":
      // Handle DELETE, PUT, and PATCH requests (not supported for this endpoint)
      return response(res, 405, "Method Not Allowed", []); // Return a 405 status for unsupported methods

    default:
      // Handle unsupported HTTP methods
      return response(res, 405, "Method Not Allowed", []); // Return a 405 status for unsupported methods
  }
}