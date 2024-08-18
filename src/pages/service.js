import ServiceByAirSection from "@/components/Service/ServiceByAirSection";
import ServiceBySeaSection from "@/components/Service/ServiceBySeaSection";
import ServiceHeaddingSection from "@/components/Service/ServiceHeaddingSection";
import Head from "next/head";
import React from "react";

const service = () => {
  return (
    <>
      <Head>
        <title>Finex - Service</title>
        <meta
          title="Finex - Our Service"
          content="Faster International Express - Finex"
        />
        <meta
          name="description"
          content="Finex: Your trusted Bangladeshi courier for low-cost, global delivery of official goods, documents, and more. ✈️"
        />
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Finex - Services" />
        <meta
          property="og:description"
          content="Explore Finex's comprehensive shipping services, including air and sea freight options tailored for your global shipping needs."
        />
        <meta
          name="keyword"
          content="Faster,International, Express, Finex, DHL Express, DHL Bangladesh, Fedex Express, Fedex Bangladesh, Aramex, International Courier Express, Any Percel Courier, Shipment"
        />
        <meta
          name="Our Service"
          content="Finex offer door-to- door and door-to-airport services to over 800
          hundred cities in major markets across the globe, specialising in
          time sensitive shipments."
        />

        <meta
          name="Our Service"
          content="Finex offer Sea freight, or ocean freight, is the main shipping method for
          global export & import business. Low prices, large volumes, FCL or
          LCL options, all these advantages make delivery by sea a first
          choice for most international trade. When it comes to shipping from
          India, AICS has been proud in this freight forwarding industry for
          more than 5 years, and is good at providing ocean cargo services for
          small and medium companies as well as individuals all over the
          world."
        />
      </Head>
      <ServiceHeaddingSection />
      <ServiceByAirSection />
      <ServiceBySeaSection />
    </>
  );
};

export default service;
