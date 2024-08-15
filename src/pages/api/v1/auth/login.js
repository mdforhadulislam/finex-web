import { compareHash } from "@/libs/common/hash"; // Utility for comparing hashed passwords
import response from "@/libs/common/response"; // Utility for standardized API responses
import configDB from "@/libs/config/db"; // Database configuration and connection
import { createToken, findUser } from "@/libs/repositories/auth.repositories"; // Functions to find users and create tokens

// Initialize the database connection
configDB();

export default async function handler(req, res) {
  const { method, body } = req;

  // Extract password and phone from the request body, or set to false if not provided
  const password = body?.password || false;
  const phone = body?.phone || false;

  switch (method) {
    case "POST":
      // Handle POST requests
      if (phone && password) {
        try {
          // Find the user by phone number
          const userFindByPhone = await findUser({ phone });

          if (userFindByPhone) {
            // Compare the provided password with the stored hashed password
            if (compareHash(password, userFindByPhone.password)) {
              // Create a token for the authenticated user
              const token = await createToken(userFindByPhone._id);

              // Prepare the user information to send in the response
              const user = {
                name: userFindByPhone.name,
                phone: userFindByPhone.phone,
                email: userFindByPhone.email,
                role: userFindByPhone.role,
              };

              // Send a success response with the token and user information
              return response(res, 200, "Login successful", {
                token: token.token,
                user,
              });
            } else {
              // If the password is incorrect, send an error response
              return response(res, 400, "Incorrect password", []);
            }
          } else {
            // If no user is found with the provided phone number, send an error response
            return response(res, 400, "Phone number is not valid", []);
          }
        } catch (error) {
          // Handle any errors that occur during the process
          return response(res, 500, "Internal Server Error", []);
        }
      } else {
        // If phone or password is missing, send an error response
        return response(
          res,
          400,
          "Please provide phone number and password",
          []
        );
      }

    case "GET":
    case "PUT":
    case "PATCH":
    case "DELETE":
    default:
      // For GET, PUT, PATCH, DELETE, or any other request methods, send a response indicating that only POST is allowed
      return response(res, 400, "Only open for POST requests", []);
  }
}
