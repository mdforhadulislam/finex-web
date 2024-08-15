import multer from "multer"; // Import multer for handling file uploads
import cloudinary from "cloudinary"; // Import cloudinary for cloud storage
import { CloudinaryStorage } from "multer-storage-cloudinary"; // Import CloudinaryStorage for configuring multer to use Cloudinary
import configDB from "@/libs/config/db"; // Import custom database configuration
import User from "@/libs/models/User.Model"; // Import the User model from your database schema
import response from "@/libs/common/response"; // Import a custom response utility function
import dotenv from "dotenv"; // Import dotenv to manage environment variables

dotenv.config(""); // Load environment variables from a .env file

// Initialize the database connection
configDB();

// Configure Cloudinary with your account credentials
cloudinary.v2.config({
  cloud_name: "dw6gu0tzu",
  api_key: "241176846243258",
  api_secret: "TDqfP5GeVUUbRdB5pl12vhBuf3U",
});

// Configure Multer to use Cloudinary for storing uploaded files
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2, // Use the cloudinary instance
  params: async (req, file) => {
    let folderName = "user_profiles"; // Default folder name for storing user profiles
    let publicId;

    // Set the publicId and folderName based on the fieldname of the uploaded file
    if (file.fieldname === "profile") {
      publicId = `profile_${req.query.phone}`;
    } else if (file.fieldname === "nationalID.front") {
      folderName = "national_ids";
      publicId = `nationalID_front_${req.query.phone}`;
    } else if (file.fieldname === "nationalID.back") {
      folderName = "national_ids";
      publicId = `nationalID_back_${req.query.phone}`;
    }

    return {
      folder: folderName, // Folder to store the image in Cloudinary
      format: "jpg", // Format for the stored image
      public_id: publicId, // Unique identifier for the image
      allowed_formats: ["jpg", "jpeg", "png"], // Allowed file formats
    };
  },
});

// Initialize the multer middleware with Cloudinary storage
const upload = multer({ storage: storage });

export default async function handler(req, res) {
  const { method, query, body } = req; // Extract method, query, and body from the request
  const phone = query?.phone; // Extract phone from the query parameters

  if (!phone) {
    return response(res, 400, "Phone number is required", []); // Return a 400 error if phone number is missing
  }

  try {
    let findUser;
    switch (method) {
      case "POST":
        return response(res, 405, "Method Not Allowed", []); // Return a 405 error for unsupported methods

      case "GET":
        findUser = await User.findOne({ phone }); // Find user by phone number
        if (findUser) {
          const user = {
            name: findUser.name,
            phone: findUser.phone,
            email: findUser.email,
            role: findUser.role,
            profile: findUser.profile,
            nationalID: findUser.nationalID,
          };
          return response(res, 200, "User found", user); // Return user data if found
        } else {
          return response(res, 404, "User Not Found", []); // Return a 404 error if user is not found
        }

      case "DELETE":
        findUser = await User.findOneAndDelete({ phone }); // Find and delete the user by phone number
        if (findUser) {
          return response(res, 200, "User successfully deleted", []); // Return success message if user is deleted
        } else {
          return response(res, 404, "User Not Found", []); // Return a 404 error if user is not found
        }

      case "PUT":
      case "PATCH":
        return upload.fields([
          { name: "profile", maxCount: 1 }, // Handle profile image upload
          { name: "nationalID.front", maxCount: 1 }, // Handle front of national ID upload
          { name: "nationalID.back", maxCount: 1 }, // Handle back of national ID upload
        ])(req, res, async function (err) {
          if (err) {
            return response(res, 500, "Image upload failed", []); // Return a 500 error if image upload fails
          }

          findUser = await User.findOne({ phone }); // Find user by phone number
          if (!findUser) {
            return response(res, 404, "User Not Found", []); // Return a 404 error if user is not found
          }

          // Prepare the updated data
          const updatedData = {
            name: body?.name ?? findUser.name,
            phone: body?.phone ?? findUser.phone,
            email: body?.email ?? findUser.email,
            profile: req.files?.profile?.[0]?.path ?? findUser.profile,
            nationalID: {
              front:
                req.files?.["nationalID.front"]?.[0]?.path ??
                findUser.nationalID?.front,
              back:
                req.files?.["nationalID.back"]?.[0]?.path ??
                findUser.nationalID?.back,
            },
            role: body?.role ?? findUser.role,
          };

          // Update the user document with new data
          Object.assign(findUser, updatedData);
          await findUser.save(); // Save the updated user

          return response(res, 200, "Successfully updated user data", findUser); // Return success message
        });

      default:
        return response(res, 405, "Method Not Allowed", []); // Return a 405 error for unsupported methods
    }
  } catch (error) {
    console.error("Server Error:", error); // Log server errors
    return response(res, 500, "Internal Server Error", []); // Return a 500 error for any server issues
  }
}

// Disable Next.js body parser to handle file uploads with multer
export const config = {
  api: {
    bodyParser: false,
  },
};
