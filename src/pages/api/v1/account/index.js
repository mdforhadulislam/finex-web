import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import User from "@/libs/models/User.Model";
configDB();
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        // Implement logic for creating a new user or return a more appropriate error message
        response(res, 405, "POST method not implemented", []);
        break;

      case "GET":
        const allUsers = await User.find().select('_id name phone email role profile'); 
        response(res, 200, "All users retrieved successfully", allUsers);
        break;

      case "DELETE":
        // Implement logic for deleting a user or return a more appropriate error message
        response(res, 405, "DELETE method not implemented", []);
        break;

      case "PUT":
      case "PATCH":
        // Implement logic for updating a user or return a more appropriate error message
        response(res, 405, "PUT/PATCH methods not implemented", []);
        break;

      default:
        response(res, 405, "Method Not Allowed", []);
        break;
    }
  } catch (error) {
    console.error("Server Error:", error);
    response(res, 500, "Internal Server Error", []);
  }
}