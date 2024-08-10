import response from "@/libs/common/response";
import User from "@/libs/models/User.Model";

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const phone = req.query?.phone;
    if (phone) {
      const findUser = await User.findOne({ phone: phone });
      if (findUser) {
        const user = {
          name: findUser.name,
          phone: findUser.phone,
          email: findUser.email,
          role: findUser.role,
          profile: findUser.profile,
          nationalID: {
            front: findUser.nationalID.front,
            back: findUser.nationalID.back,
          },
        };
        response(res, 200, "find user", user);
      } else {
        response(res, 500, "User Not Found", []);
      }
    } else {
      response(res, 500, "Server side error", []);
    }
  } else if (req.method == "DELETE") {
    const phone = req.query?.phone;
    if (phone) {
      const findUser = await User.findByIdAndDelete({ phone: phone });
      if (findUser) {
        response(res, 500, "successfuly delete user", []);
      } else {
        response(res, 500, "User Not Found", []);
      }
    } else {
      response(res, 500, "Server side error", []);
    }
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const phone = req.query?.phone;
    if (phone) {
      const findUser = await User.findOne({ phone: phone });
      if (findUser) {
        const name = req.body.name ? req.body.name : "";
        const phone = req.body.phone ? req.body.phone : "";
        const email = req.body.email ? req.body.email : "";
        const profile = req.body.profile ? req.body.profile : "";
        const nationalID = req.body.nationalID ? req.body.nationalID : "";
        const role = req.body.role ? req.body.role : "";

        if (name || phone || email || email || profile || nationalID) {
          findUser.name = name ?? findUser.name;
          findUser.phone = phone ?? findUser.phone;
          findUser.email = email ?? findUser.email;
          findUser.profile = profile ?? findUser.profile;
          findUser.nationalID = nationalID ?? findUser.nationalID;
          findUser.role = role ?? findUser.role;

          await findUser.save();

          response(res, 200, "successfuly update accounts Data", []);
        } else {
          response(res, 400, "provide valid data", []);
        }
      } else {
        response(res, 404, "User Not Found", []);
      }
    } else {
      response(res, 500, "Server side error", []);
    }
  } else {
    response(res, 500, "Server side error", []);
  }
}
