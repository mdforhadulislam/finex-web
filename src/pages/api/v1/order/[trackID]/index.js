import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Order from "@/libs/models/Order.Model";
import Tracking from "@/libs/models/Tracking.Model";

configDB();

export default async function handler(req, res) {
  const { method, query, body } = req; // Destructure request properties
  const TrackID = query?.trackID;

  switch (method) {
    case "POST":
      // POST request: Not supported for this endpoint
      return response(res, 405, "Method Not Allowed", []); // Return a 405 error

    case "GET":
      // GET request: Fetch order details by tracking ID
      if (TrackID) {
        try {
          // Find the order by tracking ID
          const findTracking = await Order.findOne({ trackingId: TrackID });
          if (findTracking) {
            // Return the found order details
            return response(res, 200, "Order Details", findTracking);
          } else {
            // Return a 404 status if no order is found
            return response(res, 404, "Not Found", []);
          }
        } catch (error) {
          // Log and return a 500 status for server-side errors
          console.error("Error fetching order:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // Return a 400 status if tracking ID is missing
        return response(res, 400, "Tracking ID is required", []);
      }

    case "DELETE":
      // DELETE request: Remove order and tracking details by tracking ID
      if (TrackID) {
        try {
          // Find the order by tracking ID
          const findTracking = await Order.findOne({ trackingId: TrackID });
          if (findTracking) {
            // Delete the order and corresponding tracking details
            await Order.findByIdAndDelete({ _id: findTracking._id });
            await Tracking.findByIdAndDelete({ ourTrackingId: findTracking.trackingId });

            // Return a success response
            return response(res, 200, "Successfully Deleted", []);
          } else {
            // Return a 404 status if no order is found
            return response(res, 404, "Not Found", []);
          }
        } catch (error) {
          // Log and return a 500 status for server-side errors
          console.error("Error deleting order:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // Return a 400 status if tracking ID is missing
        return response(res, 400, "Tracking ID is required", []);
      }

    case "PUT":
    case "PATCH":
      // PUT/PATCH request: Update order and tracking details by tracking ID
      if (TrackID) {
        try {
          // Find the order and tracking details by tracking ID
          const findOrder = await Order.findOne({ trackingId: TrackID });
          const findTracking = await Tracking.findOne({ ourTrackingId: TrackID });

          if (findOrder && findTracking) {
            const parcel = body.parcel || false; // Get 'parcel' from request body

            // Update parcel information
            findOrder.parcel = parcel ?? findOrder.parcel;
            findTracking.parcel = parcel ?? findTracking.parcel;

            // Save the updated details
            await findOrder.save();
            await findTracking.save();

            // Return a success response
            return response(res, 200, "Successfully Updated", []);
          } else {
            // Return a 404 status if no order or tracking details are found
            return response(res, 404, "Not Found", []);
          }
        } catch (error) {
          // Log and return a 500 status for server-side errors
          console.error("Error updating order:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        // Return a 400 status if tracking ID is missing
        return response(res, 400, "Tracking ID is required", []);
      }

    default:
      // Handle unsupported HTTP methods
      return response(res, 405, "Method Not Allowed", []);
  }
}