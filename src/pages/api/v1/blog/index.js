import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Blog from "@/libs/models/Blog.Model";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const image = req.body.image ? req.body.image : "";
        const title = req.body.title ? req.body.title : "";
        const details = req.body.details ? req.body.details : "";

        if (image && title && details) {
          const createBlog = new Blog({image, title, details});
          await createBlog.save();

          return response(res, 200, "Successfuly created Blog", []);
        } else {
          return response(res, 400, "send valid Data", []);
        }

      case "GET":
        const allBlog = await Blog.find()
        return response(res, 200, "All Blog",allBlog);

      case "DELETE":
        return response(res, 405, "Method Not Allowed", []);
      case "PUT":
      case "PATCH":
        return response(res, 405, "Method Not Allowed", []);
      default:
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    console.error("API handler error:", error);
    return response(res, 500, "Internal Server Error", []);
  }
}
