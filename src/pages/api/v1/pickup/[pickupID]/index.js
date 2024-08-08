import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Pickup from "@/libs/models/Pickup.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 500, "Server side error", []);
  } else if (req.method == "GET") {
    const pickupID = req.query?.pickupID;
    if (pickupID) {
      const findPickup = await Pickup.findOne({ _id: pickupID });
      if (findPickup) {
        response(res, 200, "Pickup Find", findPickup);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow To Access", []);
    }
  } else if (req.method == "DELETE") {
    const pickupID = req.query?.pickupID;
    if (pickupID) {
      const findPickup = await Pickup.findOne({ _id: pickupID });
      if (findPickup) {
        const deletePickup = await Pickup.findByIdAndDelete({
          _id: findPickup._id,
        });
        response(res, 200, "Delete pickup", []);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow To Access", []);
    }
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const pickupID = req.query?.pickupID;
    if (pickupID) {
      const findPickup = await Pickup.findOne({ _id: pickupID });
      if (findPickup) {
        const name = req.body.name ?? false;
        const phone = req.body.phone ?? false;
        const dateTime = req.body.dateTime ?? new Date();
        const address = req.body.address ?? false;
        const weight = req.body.weight ?? false;
        const staffPhone = req.body.isConfirm.staffPhone ?? false;
        const confirm = req.body.isConfirm.confirm ?? false;
        const cost = req.body.isConfirm.cost ?? false;
        const pickupTime = req.body.isConfirm.pickupTime ?? new Date();

        findPickup.name = name ?? findPickup.name;
        findPickup.phone = phone ?? findPickup.phone;
        findPickup.dateTime = dateTime ?? findPickup.dateTime;
        findPickup.address = address ?? findPickup.address;
        findPickup.weight = weight ?? findPickup.weight;
        findPickup.isConfirm = {
          staffPhone: staffPhone ?? findPickup.isConfirm.staffPhone,
          confirm: confirm ?? findPickup.isConfirm.confirm,
          cost: cost ?? findPickup.isConfirm.cost,
          dateTime: pickupTime ?? findPickup.isConfirm.dateTime,
        };

        await findPickup.save();

        response(res, 200, "Pickup Updated", []);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow To Access", []);
    }
  } else {
    response(res, 500, "Server side error", []);
  }
}
