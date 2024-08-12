import response from "@/libs/common/response";
import User from "@/libs/models/User.Model";

export default async function handler(req, res) {
  const { method, query, body } = req;
  const phone = query?.phone;

  if (!phone) {
    return response(res, 400, "Phone number is required", []);
  }

  try {
    let findUser;
    switch (method) {
      case "POST":
        return response(res, 405, "Method Not Allowed", []); // 405 for unsupported method

      case "GET":
        findUser = await User.findOne({ phone });
        if (findUser) {
          const user = {
            name: findUser.name,
            phone: findUser.phone,
            email: findUser.email,
            role: findUser.role,
            profile: findUser.profile,
            nationalID: findUser.nationalID,
          };
          return response(res, 200, "User found", user);
        } else {
          return response(res, 404, "User Not Found", []);
        }

      case "DELETE":
        findUser = await User.findOneAndDelete({ phone });
        if (findUser) {
          return response(res, 200, "User successfully deleted", []);
        } else {
          return response(res, 404, "User Not Found", []);
        }

      case "PUT":
      case "PATCH":
        findUser = await User.findOne({ phone });
        if (findUser) {
          const updatedData = {
            name: body.name || findUser.name,
            phone: body.phone || findUser.phone,
            email: body.email || findUser.email,
            profile: body.profile || findUser.profile,
            nationalID: body.nationalID || findUser.nationalID,
            role: body.role || findUser.role,
          };

          Object.assign(findUser, updatedData);
          await findUser.save();

          return response(res, 200, "Successfully updated user data", []);
        } else {
          return response(res, 404, "User Not Found", []);
        }

      default:
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    console.error("Server Error:", error);
    return response(res, 500, "Internal Server Error", []);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
    responseLimit: "5mb",
  },
};
