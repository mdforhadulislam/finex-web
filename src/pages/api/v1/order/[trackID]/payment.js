import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Order from "@/libs/models/Order.Model";
import Tracking from "@/libs/models/Tracking.Model";

configDB(); // Initialize the database connection

export default async function handler(req, res) {
  const { method, query, body } = req; // Destructure request properties
  const TrackID = query?.trackID; // Extract tracking ID from query parameters

  switch (method) {
    case "POST":
      // POST request: Not supported for this endpoint
      return response(res, 405, "Method Not Allowed", []); // Return a 405 error

    case "GET":
      // GET request: Not supported for this endpoint
      return response(res, 405, "Method Not Allowed", []); // Return a 405 error

    case "DELETE":
      // DELETE request: Not supported for this endpoint
      return response(res, 405, "Method Not Allowed", []); // Return a 405 error

    case "PUT":
    case "PATCH":
      // PUT/PATCH request: Update payment information by tracking ID
      if (TrackID) {
        try {
          // Find the order by tracking ID
          const findOrder = await Order.findOne({ trackingId: TrackID });
          if (findOrder) {
            // Get payment information from request body or use existing value
            const payment = body.payment ?? findOrder.payment;

            // Update the payment information
            findOrder.payment = payment;

            // Save the updated order
            await findOrder.save();

            // Return a success response with the updated order
            return response(res, 200, "Successfully Updated", findOrder);
          } else {
            // Return a 404 status if no order is found
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