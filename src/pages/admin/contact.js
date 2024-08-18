import { CONTACT_API, getRequestSend } from "@/data/ApiMethod";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [allContact, setAllContact] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await getRequestSend(CONTACT_API);
        if (res.status === 200) {
          setAllContact(res.data);
        } else {
          console.error("Failed to fetch contacts", res);
        }
      } catch (error) {
        console.error("Error fetching contacts", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="w-full h-auto p-2">
      
    <Head><title>Admin Contact</title></Head>
      <div className="w-full h-auto flex flex-col">
        {allContact.map(({ _id, name, phone, email, message, date }) => (
          <div key={_id} className="w-full h-auto p-2">
            <div className="w-full h-auto p-2 shadow-3xl border rounded-lg flex justify-around items-start align-middle flex-col">
              <div className="w-full h-auto flex flex-col sm:flex-row justify-between">
                <span>{name}</span>
                <span>{phone}</span>
                <span>{email}</span>
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
              <div>Message: {message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;