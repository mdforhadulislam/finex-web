import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import { createUser, findUser } from "@/libs/repositories/auth.repositories";

configDB();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST": {
      // Extract required fields from the request body
      const name = body.name || false;
      const email = body.email || false;
      const phone = body.phone || false;
      const password = body.password || false;
      const role = body.role || "user"; // Default role is 'user'

      // Validate required fields
      if (!name || !email || !phone || !password) {
        return response(
          res,
          400,
          `Please provide your ${
            !name ? "name" : !email ? "email" : !phone ? "phone" : "password"
          }`,
          []
        );
      }

      try {
        // Check if the user already exists by email or phone
        const userFindByEmail = await findUser({ email: email });
        const userFindByPhone = await findUser({ phone: phone });

        if (userFindByEmail || userFindByPhone) {
          return response(
            res,
            400,
            `Already registered with this ${
              userFindByEmail ? "Email" : "Phone"
            }`,
            []
          );
        }

        // Create a new user if validation passes
        await createUser(name, email, phone, password, role);

        // Respond with a success message
        return response(res, 200, "Successfully registered", []);
      } catch (error) {
        console.error("Error during registration:", error);
        return response(res, 500, "Internal Server Error", []);
      }
    }

    case "GET":
    case "PUT":
    case "PATCH":
    case "DELETE":
    default:
      // Handle unsupported methods
      response(res, 400, "Only POST requests are allowed", []);
      break;
  }
}