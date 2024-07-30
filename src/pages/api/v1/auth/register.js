import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import { createUser, findUser } from "@/libs/repositories/auth.repositories";

configDB();

export default async function handler(req, res) {

  if (req.method == "POST") {
    const name = req.body.name ? req.body.name : false;
    const email = req.body.email ? req.body.email : false;
    const phone = req.body.phone ? req.body.phone : false;
    const password = req.body.password ? req.body.password : false;
    const role = req.body.role ? req.body.role : "user";

    if (!name || !email || !phone || !password) {
      return response(res, 400,`provide your ${!name? "name": !email? "email": !phone? "phone": !password? "password": ""} filed`,[]);
    }

    if (name && email && phone && password) {
      const userFindByEmail = await findUser({ email: email });
      const userFindByPhone = await findUser({ phone: phone });
      if (userFindByEmail || userFindByPhone) {
        return response(res,400,`Alrady registered this ${userFindByEmail ? "Email" : userFindByPhone ? "Phone" : ""}`,[]);
      }

      const newUser = await createUser(name, email, phone, password, role);
      return response(res, 200, "Successfuly register complite", []);
    } else {
      return response(res, 400, "Provide valid data", []);
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
