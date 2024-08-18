import { LoadingContext } from "@/context/LoadingContext"; // Importing LoadingContext for managing loading state
import { CONTACT_API, postRequestSend } from "@/data/ApiMethod"; // Importing API methods for contact form submission
import InputBox from "@/utils/InputBox"; // Importing a reusable input component
import IsBangla from "@/utils/IsBangla"; // Component for rendering content in Bangla
import IsEnglish from "@/utils/IsEnglish"; // Component for rendering content in English
import Head from "next/head";
import React, { useContext, useState } from "react"; // Importing React and hooks
import { toast } from "react-toastify"; // Importing toast for notifications

const ContactDetailsFrom = () => {
  // Accessing the loading context to control loading spinner visibility
  const loading = useContext(LoadingContext);

  // State to manage contact form data
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    date: new Date(), // Storing current date, if needed
  });

  // Handler function for input field changes
  const changeHandler = (e) => {
    // Update state with the new value from the input field
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Handler function for form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    loading.loadingStart(); // Start loading spinner
    console.log(contactData); // Log form data for debugging

    // Sending POST request with form data
    postRequestSend(CONTACT_API, {}, contactData).then((res) => {
      loading.loadingEnd(); // Stop loading spinner
      console.log(res); // Log response for debugging

      // Display success or error message based on response status
      if (res.status === 200) {
        toast.success(res.message); // Success notification
      } else {
        toast.error(res.message); // Error notification
      }
    });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <meta name="description" content="Get in touch with Faster for inquiries, support, or feedback. We are here to assist you." />
        <meta name="keywords" content="contact, support, inquiries, feedback, Faster" />
        <meta property="og:title" content="Contact Us - Faster" />
        <meta property="og:description" content="Get in touch with Faster for inquiries, support, or feedback. We are here to assist you." />
        <meta name="twitter:description" content="Get in touch with Faster for inquiries, support, or feedback. We are here to assist you." />
      </Head>

      <form className="w-full h-auto flex flex-col gap-3" onSubmit={submitHandler}>
        {/* Input field for name */}
        <InputBox
          title={"Name"}
          placeholder={"Name"}
          type={"text"}
          name={"name"}
          value={contactData.name}
          action={changeHandler}
        />
        {/* Input field for phone number */}
        <InputBox
          title={"Phone"}
          placeholder={"Phone"}
          type={"text"}
          name={"phone"}
          value={contactData.phone}
          action={changeHandler}
        />
        {/* Input field for email */}
        <InputBox
          title={"E-mail"}
          placeholder={"E-mail"}
          type={"text"}
          name={"email"}
          value={contactData.email}
          action={changeHandler}
        />
        {/* Textarea for message */}
        <InputBox
          title={"Message"}
          placeholder={"Message"}
          type={"text"}
          isTextArea={true}
          name={"message"}
          value={contactData.message}
          action={changeHandler}
        />

        {/* English submit button */}
        <IsEnglish>
          <button className="px-4 py-2 text-center text-[16.6px] shadow hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full">
            Send Message
          </button>
        </IsEnglish>

        {/* Bangla submit button */}
        <IsBangla>
          <button className="px-4 py-[4px] bfont text-2xl text-center shadow hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full">
            সেন্ড ম্যাসেজ
          </button>
        </IsBangla>
      </form>
    </>
  );
};

export default ContactDetailsFrom;
