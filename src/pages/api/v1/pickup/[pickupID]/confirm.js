import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 400, "Send Valid Data", []);
  } else if (req.method == "GET") {
    response(res, 400, "Send Valid Data", []);
  } else if (req.method == "DELETE") {
    response(res, 400, "Send Valid Data", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const pickupID = req.query?.pickupID;
    if (pickupID) {
      const findPickup = await Pickup.findOne({ _id: pickupID });
      if (findPickup) {
        const staffPhone = req.body.staffPhone ?? false;
        const confirm = req.body.confirm ?? true;
        const cost = req.body.cost ?? false;
        const dateTime = req.body.dateTime ?? new Date();

        if (staffPhone && confirm&& cost && dateTime) {
          
          findPickup.isConfirm = {
            staffPhone,
            confirm,
            dateTime,
            cost
          };

          await findPickup.save();
          
          response(res, 200, "Accepted Pickup", []);
        } else {
          response(res, 400, "Provide valid value", []);
        }
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow To Access", []);
    }
  } else {
    response(res, 400, "Send Valid Data", []);
  }
}
