import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const name = req.body.name ?? false;
    const phone = req.body.phone ?? false;
    const dateTime = req.body.dateTime ?? new Date();
    const address = req.body.address ?? false;
    const weight = req.body.weight ?? false;

    if (name && phone && dateTime && address) {
      
      const newPickupRequest = new Pickup({
        name,
        phone,
        dateTime,
        address,
        weight,
      });

      const savePickupRequest = await newPickupRequest.save();

      response(res, 200, "Save Pickup", []);
    } else {
      response(res, 400, "Send Valid Data", []);
    }
  } else if (req.method == "GET") {
    const allPickup = await Pickup.find();
    response(res, 200, "All Pickup", allPickup);
  } else if (req.method == "DELETE") {
    response(res, 400, "Send Valid Data", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 400, "Send Valid Data", []);
  } else {
    response(res, 400, "Send Valid Data", []);
  }
}
