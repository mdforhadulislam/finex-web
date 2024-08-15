import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Token from "@/libs/models/Token.Model";

configDB();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST": {
      // Extract token from headers
      const token = req?.headers?.authorization;

      if (token) {
        // Find the token in the database
        const findToken = await Token.findOne({ token: token });

        if (findToken) {
          // Delete the token to log out the user
          await Token.findByIdAndDelete({ _id: findToken._id });

          // Respond with success message
          response(res, 200, "Successfully logged out", []);
        } else {
          // Respond with unauthorized message if token not found
          response(res, 401, "Unauthorized user", []);
        }
      } else {
        // Respond with unauthorized message if token is not provided
        response(res, 401, "Access denied", []);
      }
      break;
    }

    case "GET":
    case "PUT":
    case "PATCH":
    case "DELETE":
    default:
      // Respond with a message that only POST requests are allowed
      response(res, 400, "Only POST requests are allowed", []);
      break;
  }
}