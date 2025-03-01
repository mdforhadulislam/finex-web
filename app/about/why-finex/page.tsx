import WhyFinexBodySection from "@/components/About/WhyFinexBodySection";
import WhyFinexHeaderSection from "@/components/About/WhyFinexHeaderSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import Head from "next/head";

const WhyFinex = () => {
  return (
    <>
    <Head>
      <title>Finex - About Finex</title>
    </Head>
      <WhyFinexHeaderSection />
      <WhyFinexBodySection />
      <HomeCustomerReview />
    </>
  );
};

export default WhyFinex;
