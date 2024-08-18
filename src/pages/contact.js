import ContactDetailsSection from "@/components/Contact/ContactDetailsSection";
import ContactHeaddingSection from "@/components/Contact/ContactHeaddingSection";
import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Finex - Contact</title>
        {/* Description meta tag for search engines and previews */}
        <meta
          name="description"
          content="Contact Finex for all your international courier needs. Reach out to us for low-cost, reliable global delivery of official goods, documents, and more."
        />
        {/* Keywords meta tag for SEO purposes (note: less influential than it used to be) */}
        <meta
          name="keywords"
          content="Finex, Contact, Courier Services, International Shipping, DHL, Fedex, Aramex, Express Delivery"
        />
      </Head>
      <ContactHeaddingSection />
      <ContactDetailsSection />
    </>
  );
};

export default Contact;
