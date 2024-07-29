import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import HomeHeroPriceingSection from "./HomeHeroPriceingSection";
import HomeHeroTrackBoxSection from "./HomeHeroTrackBoxSection";

const HomeHeroSection = () => {
  return (
    <div className="w-full h-full bg-defult pb-5">
      <div className="lg:container m-auto  flex flex-col align-middle items-center">
        <IsEnglish
          className={
            "w-full h-auto flex justify-left align-middle items-center p-5 pt-14"
          }
        >
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-extrabold text-white">
            Faster International Express -
            <span className="text-xl font-medium block">
              From Here To There, We Care
            </span>
          </h1>
        </IsEnglish>

        <IsBangla
          className={
            "w-full h-auto flex justify-left align-middle items-center p-5 pt-14"
          }
        >
          <h1 className="text-6xl  md:text-7xl lg:text-8xl font-bold text-white bfont">
            ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস -
            <span className="text-2xl font-medium block bfont -mt-5">
              এখান থেকে সেখানে, আমরা যত্ন করি
            </span>
          </h1>
        </IsBangla>

        <div className="w-full h-auto p-3 px-4 mt-10 grid lg:grid-cols-3 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-6">
          <div className="col-span-3 lg:col-span-2 w-full h-auto">
            <HomeHeroPriceingSection />
          </div>

          <div className="col-span-3 lg:col-span-1 w-full h-full">
            <HomeHeroTrackBoxSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
