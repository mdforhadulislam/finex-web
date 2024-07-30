import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Token from "@/libs/models/Token.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const token = req?.headers?.authorization;
    if (token) {
      const findToken = await Token.findOne({ token: token });
      if (findToken) {
        const deleteToken = await Token.findByIdAndDelete({
          _id: findToken._id,
        });

        response(res, 200, "successfuly Logout", []);
      } else {
        response(res, 401, "unauthorized user", []);
      }
    } else {
      response(res, 401, "Not allow to access", []);
    }
  } else if (req.method == "GET") {
    response(res, 400, "Only open for post request", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 400, "Only open for post request", []);
  } else if (req.method == "DELETE") {
    response(res, 400, "Only open for post request", []);
  } else {
    response(res, 400, "Only open for post request", []);
  }
}
