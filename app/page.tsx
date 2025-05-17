import HomeBanarSection from "@/components/Home/HomeBanarSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import PriceCalCulatorSection from "@/components/Price/PriceCalCulatorSection";
import Head from "next/head";
// import HomeSubscriptionSection from "@/components/Home/HomeSubscriptionSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:logo" content="https://www.finex.ltd/logo-en-.png" />
        <meta property="og:finex" content="https://www.finex.ltd/" />
        <meta property="og:Finex - Home" content="Link preview title" />
        <meta
          property="og:description"
          content="Finex provides fast, reliable, and affordable international shipping solutions, specializing in air and sea freight, custom clearance, and competitive pricing."
        />
      </Head>
      <HomeHeroSection />
      <HomeBanarSection />
      <div  className=" w-full p-2 sm:container h-auto m-auto">
      <PriceCalCulatorSection />
      </div>
      <HomeCustomerReview />
    </>
  );
}
