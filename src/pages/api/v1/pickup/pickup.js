export default async function handler(req, res) {
    if (req.method == "POST") {
    } else if (req.method == "GET") {
      response(res, 400, "Only open for post request", []);
    } else if (req.method == "DELETE") {
      response(res, 400, "Only open for post request", []);
    } else if (req.method == "PUT" || req.method == "PATCH") {
      response(res, 400, "Only open for post request", []);
    } else {
      response(res, 400, "Only open for post request", []);
    }
  }