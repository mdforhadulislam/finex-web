import response from "@/libs/common/response";
import User from "@/libs/models/User.Model";

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const allUser = User.find()
    response(res,200,"all User",allUser)


  } else if (req.method == "DELETE") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
