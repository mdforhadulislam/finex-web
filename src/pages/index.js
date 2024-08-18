import HeroAboutUsSection from "@/components/About/HeroAboutUsSection";
import HomeCustomerReviewSection from "@/components/Home/HomeCustomerReviewSection";
import HomeHeddingSection from "@/components/Home/HomeHeddingSection";
import HomeHeroDeliveryPartnersSection from "@/components/Home/HomeHeroDeliveryPartnersSection";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HeroServiceFeaturesSection from "@/components/Service/HeroServiceFeaturesSection";
import HeroServiceProcessSection from "@/components/Service/HeroServiceProcessSection";
import HeroServiceSection from "@/components/Service/HeroServiceSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finex - Home</title>
        <meta
          title="Finex - Home"
          content="Faster International Express - Finex"
        />
        <meta
          name="description"
          content="Finex: Your trusted Bangladeshi courier for low-cost, global delivery of official goods, documents, and more. ✈️"
        />

        <meta
          name="keyword"
          content="Faster,International, Express, Finex, DHL Express, DHL Bangladesh, Fedex Express, Fedex Bangladesh, Aramex, International Courier Express, Any Percel Courier, Shipment"
        />
      </Head>

      <HomeHeroSection />
      <HeroServiceSection />
      <HeroAboutUsSection />
      <HomeHeddingSection />
      <HeroServiceFeaturesSection />
      <HeroServiceProcessSection />
      <HomeHeroDeliveryPartnersSection />
      <HomeCustomerReviewSection />
    </>
  );
}
