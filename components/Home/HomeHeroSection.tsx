

import HomeHeroSectionHedding from "./HomeHeroSectionHedding";
import HomeHeroSectionTrackingBox from "./HomeHeroSectionTrackingBox";

const HomeHeroSection = () => {
  return (
    <div
      className="w-full h-[600px] sm:h-screen bg-cover bg-center bg-no-repeat flex justify-center align-middle items-center mb-44"
      style={{ backgroundImage: `url(/hero-bg-gift.gif)` }}
    >
      <div className="w-full h-full sm:container flex-col sm:flex-row flex justify-center sm:justify-between align-middle items-center p-6 gap-4 pt-18">
        <HomeHeroSectionHedding />
        <HomeHeroSectionTrackingBox />
      </div>
    </div>
  );
};

export default HomeHeroSection;
