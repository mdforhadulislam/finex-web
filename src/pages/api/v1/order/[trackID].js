export default async function handler(req, res) {
    if (req.method == "POST") {
    } else if (req.method == "GET") {
      response(res, 400, "Server side error", []);
    } else if (req.method == "DELETE") {
      response(res, 400, "Server side error", []);
    } else if (req.method == "PUT" || req.method == "PATCH") {
      response(res, 400, "Server side error", []);
    } else {
      response(res, 400, "Server side error", []);
    }
  }