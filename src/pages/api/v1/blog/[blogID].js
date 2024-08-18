import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Blog from "@/libs/models/Blog.Model";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  const { method, query, body } = req; // Destructure request properties
  const blogID = query?.blogID; // Get the 'id' from query parameters
  try {
    switch (req.method) {
      case "POST":
        return response(res, 405, "Method Not Allowed", []);

      case "GET":
        if (blogID) {
          const allBlog = await Blog.findById({ _id: blogID });
          return response(res, 200, "Delete Blog", allBlog);
        } else {
          return response(res, 400, "You Not Allowed", []);
        }

      case "DELETE":
        if (blogID) {
          const allBlog = await Blog.findByIdAndDelete({ _id: blogID });
          return response(res, 200, "Delete Blog", []);
        } else {
          return response(res, 400, "You Not Allowed", []);
        }

      case "PUT":
      case "PATCH":
        if (blogID) {
          const SBlog = await Blog.findById({ _id: blogID });
          if (SBlog) {
            SBlog.image = body.image ?? SBlog.image;
            SBlog.title = body.title ?? SBlog.title;
            SBlog.details = body.details ?? SBlog.details;

            await SBlog.save();

            return response(res, 200, "Successfuly updated Blog", []);
          } else {
            return response(res, 400, "Blog Not Found", []);
          }
        } else {
          return response(res, 400, "You Not Allowed", []);
        }

      default:
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    console.error("API handler error:", error);
    return response(res, 500, "Internal Server Error", []);
  }
}
