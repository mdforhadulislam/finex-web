import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Tracking from "@/libs/models/Tracking.Model";

await configDB();

export default async function handler(req, res) {
  // Handle different HTTP methods
  switch (req.method) {
    case "POST":
      // POST method handling - currently no logic defined
      response(res, 400, "POST method not implemented", []);
      break;

    case "GET":
      // Handle GET requests to fetch tracking details
      const TrackID = req.query?.trackID;
      if (TrackID) {
        try {
          // Find the tracking record by ourTrackingId
          const findTracking = await Tracking.findOne({ ourTrackingId: TrackID });
          if (findTracking) {
            // Return the tracking details if found
            response(res, 200, "Order Details", findTracking);
          } else {
            // Return an error if the tracking record is not found
            response(res, 400, "Not Found", []);
          }
        } catch (error) {
          // Handle any errors that occur during database operations
          response(res, 500, "Server side error", []);
        }
      } else {
        // Return an error if trackID is not provided
        response(res, 400, "Not Allow to access", []);
      }
      break;

    case "DELETE":
      // DELETE method handling - currently no logic defined
      response(res, 400, "Server side error", []);
      break;

    case "PUT":
    case "PATCH":
      // Handle PUT and PATCH requests to update tracking details
      const trackID = req.query?.trackID;
      if (trackID) {
        try {
          // Find the tracking record by ourTrackingId
          const findTracking = await Tracking.findOne({ ourTrackingId: trackID });
          if (findTracking) {
            // Extract update data from request body
            const company = req.body.company ?? false;
            const tracking = req.body.tracking ?? false;
            const payment = req.body.payment ?? false;
            const trackingDetails = req.body.trackingDetails ?? false;

            // Check if all required fields are provided
            if (company && trackingDetails && payment && tracking) {
              // Update the tracking record
              findTracking.handoverBy = {
                company,
                tracking,
                payment,
                trackingDetails,
              };

              // Save the updated tracking record
              await findTracking.save();

              // Return success response
              response(res, 200, "Successfully updated", []);
            } else {
              // Return an error if any required field is missing
              response(res, 400, "Not Allow to access", []);
            }
          } else {
            // Return an error if the tracking record is not found
            response(res, 400, "Not Found", []);
          }
        } catch (error) {
          // Handle any errors that occur during database operations
          response(res, 500, "Server side error", []);
        }
      } else {
        // Return an error if trackID is not provided
        response(res, 400, "Not Allow to access", []);
      }
      break;

    default:
      // Handle unsupported HTTP methods
      response(res, 400, "Server side error", []);
  }
}