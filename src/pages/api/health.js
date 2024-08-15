import configDB from "@/libs/config/db";

// Initialize database connection
await configDB();

export default function handler(req, res) {
  // Send a JSON response with status 200 and a success message
  res.status(200).json({
    status: 200, // HTTP status code
    message: "Success", // Message indicating success
    data: [], // Empty data array
  });
}
