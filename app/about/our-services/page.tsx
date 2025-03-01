import OurServicesBodySection from "@/components/About/OurServicesBodySection";
import OurServicesHeaderSection from "@/components/About/OurServicesHeaderSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import Head from "next/head";

const OurServices = () => {
  return (
    <>
    <Head>
      <title>Finex - Our Service</title>
    </Head>
      <OurServicesHeaderSection />
      <OurServicesBodySection />
      <HomeCustomerReview />
    </>
  );
};

export default OurServices;
