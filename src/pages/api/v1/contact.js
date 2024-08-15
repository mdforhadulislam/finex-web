import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Contact from "@/libs/models/Contact.Model";

// Initialize database connection
await configDB();

export default async function handler(req, res) {
  const { method, body } = req; // Destructure method and body from the request

  try {
    switch (method) {
      case "POST":
        // Extract and set default values for body parameters
        const { name = "", phone, email = "", message = "", date = new Date() } = body;

        // Validate if phone is provided
        if (!phone) {
          return response(res, 400, "Please provide all required data", []); // Return 400 Bad Request if phone is missing
        }

        // Create a new contact document
        const newContact = new Contact({ name, phone, email, message, date });
        await newContact.save(); // Save the new contact to the database
        return response(res, 200, `Thank you ${name}`, []); // Return success response

      case "GET":
        // Fetch all contact messages from the database
        const allContacts = await Contact.find();
        return response(res, 200, "All Contact Messages", allContacts); // Return success response with all contacts

      case "DELETE":
      case "PUT":
      case "PATCH":
        // Return 501 Not Implemented for unsupported methods
        return response(res, 501, "Method not implemented", []); 

      default:
        // Return 405 Method Not Allowed for unsupported HTTP methods
        return response(res, 405, "Method Not Allowed", []); 
    }
  } catch (error) {
    // Log and return error response for server-side issues
    console.error("API handler error:", error);
    return response(res, 500, "Internal Server Error", []); // Return 500 Internal Server Error
  }
}