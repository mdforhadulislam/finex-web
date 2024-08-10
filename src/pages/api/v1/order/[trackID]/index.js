import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Order from "@/libs/models/Order.Model";
import Tracking from "@/libs/models/Tracking.Model";
import Track from "@/pages/admin/track";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "GET") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findTracking = await Order.findOne({ trackingId: TrackID });
      if (findTracking) {
        response(res, 200, "Order Details", findTracking);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow to access", []);
    }
  } else if (req.method == "DELETE") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findTracking = await Order.findOne({ trackingId: TrackID });
      if (findTracking) {
        const deletedOrder = await Order.findByIdAndDelete({
          _id: findTracking._id,
        });
        const deletedTracking = await Tracking.findByIdAndDelete({
          ourTrackingId: findTracking.trackingId,
        });

        response(res, 200, "Successfuly Deleted", []);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow to access", []);
    }
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findOrder = await Order.findOne({ trackingId: TrackID });
      const findTracking = await Tracking.findOne({ ourTrackingId: TrackID });
      if (findOrder && findTracking) {
        const parcel = req.body ?? false;

        findOrder.parcel = parcel ?? findOrder.parcel;
        findTracking.parcel = parcel?? findTracking.parcel;

        await findOrder.save();
        await findTracking.save();

        response(res, 200, "Successfuly Updated", []);
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
