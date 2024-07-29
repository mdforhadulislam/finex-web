import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Country from "@/libs/models/Country.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const id = req.query?.id;
    if (id) {
      const findCountry = await Country.findById({ _id: id });
      if (findCountry) {
        response(res, 404, "Single Country", findCountry);
      } else {
        response(res, 404, "Not Found", []);
      }
    } else {
      response(res, 500, "Server side error", []);
    }
  } else if (req.method == "DELETE") {
    const id = req.query?.id;
    if (id) {
      const deleteCountry = await Country.findByIdAndDelete({ _id: id });
      if (deleteCountry) {
        response(res, 404, "Single Country", []);
      } else {
        response(res, 404, "Not Found", []);
      }
    } else response(res, 500, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const id = req.query?.id;
    const name = req.body.name ? req.body.name : false;

    if (id) {
      const findCountry = await Country.findById({ _id: id });
      if (name) {
        if (findCountry) {
          findCountry.name = name;
          await findCountry.save();
          response(res, 404, "Successfuly updated", []);
        } else {
          response(res, 404, "Not Found", []);
        }
      } else {
        response(res, 404, "Name filed required", []);
      }
    } else response(res, 500, "Server side error", []);
  } else {
    response(res, 500, "Server side error", []);
  }
}
