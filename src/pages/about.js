import AboutDetailsSection from "@/components/About/AboutDetailsSection";
import AboutTeamMemberSection from "@/components/About/AboutTeamMemberSection";
import AboutTitleSection from "@/components/About/AboutTitleSection";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Finex - About</title>
        <meta
          title="Finex - About"
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
      <AboutTitleSection />
      <AboutDetailsSection />
      <AboutTeamMemberSection />
    </>
  );
};

export default about;
