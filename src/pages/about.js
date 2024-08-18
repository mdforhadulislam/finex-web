import AboutDetailsSection from "@/components/About/AboutDetailsSection";
import AboutTeamMemberSection from "@/components/About/AboutTeamMemberSection";
import AboutTitleSection from "@/components/About/AboutTitleSection";
import Head from "next/head";

// Functional component for the About page
const AboutPage = () => {
  return (
    <>
      {/* Head component for managing meta tags and title */}
      <Head>
        {/* Page title displayed in the browser tab and search results */}
        <title>Finex - About</title>
        {/* Description meta tag for search engines and previews */}
        <meta
          name="description"
          content="Finex: Your trusted Bangladeshi courier for low-cost, global delivery of official goods, documents, and more. ✈️"
        />
        {/* Keywords meta tag for SEO purposes (note: not as influential as it once was) */}
        <meta
          name="keywords"
          content="Faster, International, Express, Finex, DHL Express, DHL Bangladesh, Fedex Express, Fedex Bangladesh, Aramex, International Courier Express, Any Parcel Courier, Shipment"
        />
      </Head>
      {/* Section displaying the title of the About page */}
      <AboutTitleSection />
      {/* Section providing detailed information about Finex */}
      <AboutDetailsSection />
      {/* Section showcasing the team members */}
      <AboutTeamMemberSection />
    </>
  );
};

export default AboutPage;
