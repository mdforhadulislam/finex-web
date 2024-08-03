import response from "@/libs/common/response";
import Tracking from "@/libs/models/Tracking.Model";

export default async function handler(req, res) {
  if (req.method == "POST") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "GET") {
    const trackData = await Tracking.find();
    response(res, 200, "All Tracking", trackData);
  } else if (req.method == "DELETE") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 400, "Server side error", []);
  } else {
    response(res, 400, "Server side error", []);
  }
}
