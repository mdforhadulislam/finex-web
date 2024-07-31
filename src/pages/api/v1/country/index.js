import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Country from "@/libs/models/Country.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const name = req.body.name ? req.body.name : false;
    if (name) {
      const createCountry = new Country({ name });
      const newCountry = await createCountry.save();

      response(res, 200, "complitely added new country", newCountry);
    } else {
      response(res, 500, "plz! provide country name", []);
    }
  } else if (req.method == "GET") {
    const allCountry = await Country.find();
    response(res, 200, "find all country", allCountry);
  } else if (req.method == "DELETE") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
