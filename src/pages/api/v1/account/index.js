import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import User from "@/libs/models/User.Model";

configDB();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        // Logic for creating a new user (not implemented)
        response(res, 405, "POST method not implemented", []);
        break;

      case "GET":
        const allUsers = await User.find().select('_id name phone email role profile');
        response(res, 200, "All users retrieved successfully", allUsers);
        break;

      case "DELETE":
        // Logic for deleting a user (not implemented)
        response(res, 405, "DELETE method not implemented", []);
        break;

      case "PUT":
      case "PATCH":
        // Extract user data from the request body
        const { phone, name, email, role } = req.body;

        if (!phone) {
          return response(res, 400, "Phone number is required", []);
        }

        // Find the user by phone number
        const user = await User.findOne({ phone });

        if (!user) {
          return response(res, 404, "User not found", []);
        }

        // Update user data
        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.role = role ?? user.role; 

        // Save the updated user
        await user.save();

        response(res, 200, "User data updated successfully", user);
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