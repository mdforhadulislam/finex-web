import response from "@/libs/common/response";
import Tracking from "@/libs/models/Tracking.Model";

export default async function handler(req, res) {
  if (req.method == "POST") {
  } else if (req.method == "GET") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findTracking = await Tracking.findOne({ ourTrackingId: TrackID });
      if (findTracking) {
        response(res, 200, "Order Details", findTracking);
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow to access", []);
    }
  } else if (req.method == "DELETE") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    const TrackID = req.query?.trackID;
    if (TrackID) {
      const findTracking = await Tracking.findOne({ ourTrackingId: TrackID });
      if (findTracking) {
        const company = req.body.company ?? false;
        const tracking = req.body.tracking ?? false;
        const payment = req.body.payment ?? false;
        const trackingDetails = req.body.trackingDetails ?? false;

        if (company && trackingDetails && payment && tracking) {
          findTracking.handoverBy = {
            company,
            tracking,
            payment,
            trackingDetails,
          };

          await findTracking.save();

          response(res, 400, "Successfuly updated", []);
        } else {
          response(res, 400, "Not Allow to access", []);
        }
      } else {
        response(res, 400, "Not Found", []);
      }
    } else {
      response(res, 400, "Not Allow to access", []);
    }
  } else {
    response(res, 400, "Server side error", []);
  }
}
