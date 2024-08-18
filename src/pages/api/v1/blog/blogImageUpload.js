import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import cloudinary from "cloudinary";
import multer from "multer";
import streamifier from "streamifier";

// Initialize database connection
await configDB();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dw6gu0tzu",
  api_key: "241176846243258",
  api_secret: "TDqfP5GeVUUbRdB5pl12vhBuf3U",
});

// Set up Multer storage engine
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle Multer file upload manually
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res
          .status(200)
          .json({ message: "File upload error", error: err.message, status: 400 });
      }

      try {
        // Check if file is provided
        if (!req.file) {
          return res
            .status(200)
            .json({ message: "No file uploaded", status: 400 });
        }

        // Upload the image to Cloudinary
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.v2.uploader.upload_stream(
            { folder: "blog-images" }, // Optional: folder in Cloudinary
            (error, image) => {
              if (error) {
                return reject(error);
              }
              resolve(image);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });

        return response(res, 200, "Image uploaded successfully", {
          url: result.secure_url,
          public_id: result.public_id,
        });
      } catch (error) {
        res.status(200).json({ message: "Server error", status: 500 });
      }
    });
  } else {
    return response(res, 405, "Method Not Allowed", []);
  }
}
