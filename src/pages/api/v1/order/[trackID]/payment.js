import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Order from "@/libs/models/Order.Model";
import Tracking from "@/libs/models/Tracking.Model";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "GET") {
    
    response(res, 400, "Server side error", []);
  } else if (req.method == "DELETE") {
    
    response(res, 400, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findOrder = await Order.findOne({ trackingId: TrackID });
      if (findOrder ) {
        const payment = req.body ?? findOrder.payment;
        
        findOrder.payment = payment;

        await findOrder.save();

        response(res, 200, "Successfuly Updated",findOrder);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow to access", []);
    }

    response(res, 400, "Server side error", []);
  } else {
    response(res, 400, "Server side error", []);
  }
}
