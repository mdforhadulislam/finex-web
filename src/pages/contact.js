import ContactDetailsSection from "@/components/Contact/ContactDetailsSection";
import ContactHeaddingSection from "@/components/Contact/ContactHeaddingSection";
import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Finex - Contact</title>
        <meta
          title="Finex - Contact"
          content="Faster International Express - Finex"
        />
        <meta
          name="description"
          content="Finex: Your trusted Bangladeshi courier for low-cost, global delivery of official goods, documents, and more. ✈️"
        />
        <meta name="description" content="Contact with us any time." />

        <meta
          name="keyword"
          content="Faster,International, Express, Finex, DHL Express, DHL Bangladesh, Fedex Express, Fedex Bangladesh, Aramex, International Courier Express, Any Percel Courier, Shipment"
        />
      </Head>
      <ContactHeaddingSection />
      <ContactDetailsSection />
    </>
  );
};

export default Contact;
