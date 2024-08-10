import response from "@/libs/common/response";
import User from "@/libs/models/User.Model";

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    let allUser = await User.find();
    allUser = allUser.map((user) => {
      return {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
        profile: user.profile,
      };
    });
    response(res, 200, "all User", allUser);
  } else if (req.method == "DELETE") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
