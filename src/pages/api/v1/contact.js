import response from "@/libs/common/response";
import configDB from "@/libs/config/db";
import Contact from "@/libs/models/Contact.Model";

configDB();

export default async function handler(req, res) {
  const { method, body } = req;
  
  try {
    switch (method) {
      case "POST":
        const { name = "", phone, email = "", message = "", date = new Date() } = body;
        
        if (!phone) {
          return response(res, 400, "Please provide all required data", []);
        }
        
        const newContact = new Contact({ name, phone, email, message, date });
        await newContact.save();
        return response(res, 200, `Thank you ${name}`, []);

      case "GET":
        const allContacts = await Contact.find();
        return response(res, 200, "All Contact Messages", allContacts);

      case "DELETE":
      case "PUT":
      case "PATCH":
        return response(res, 501, "Method not implemented", []);

      default:
        return response(res, 405, "Method Not Allowed", []);
    }
  } catch (error) {
    console.error("API handler error:", error);
    return response(res, 500, "Internal Server Error", []);
  }
}