import OurTeamMemberBodySection from "@/components/About/OurTeamMemberBodySection";
import WhyFinexBodySection from "@/components/About/WhyFinexBodySection";
import WorkProcessBodySection from "@/components/About/WorkProcessBodySection";
import OurBlogBodySection from "@/components/Blog/OurBlogBodySection";
import HomeBanarSection from "@/components/Home/HomeBanarSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import PriceCalCulatorSection from "@/components/Price/PriceCalCulatorSection";
// import HomeSubscriptionSection from "@/components/Home/HomeSubscriptionSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBanarSection />
      <div className=" w-full sm:container h-auto m-auto">
        <WhyFinexBodySection />
        <PriceCalCulatorSection />
        </div>
        
      <div className=" w-full">
        <WorkProcessBodySection />
        <OurBlogBodySection />
      </div>
      <OurTeamMemberBodySection />
      <HomeCustomerReview />
    </>
  );
}
