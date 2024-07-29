import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import HeroServiceProcessSingleBox from "./HeroServiceProcessSingleBox";
import { processData } from "@/data/process";

const HeroServiceProcessSection = () => {
  return (
    <div className="w-full h-auto">
      <div className="lg:container  sm:p-2 p-4 h-auto m-auto py-12">
        <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-10 mt-4">
            OUR PROCESS
          </h1>
        </IsEnglish>

        <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bfont text-defult px-5 mb-10 mt-4">
            আমাদের প্রক্রিয়া
          </h1>
        </IsBangla>

        <div className="w-full h-auto px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {processData.map((item) => (
            <HeroServiceProcessSingleBox
              key={item.id}
              title={item.title}
              icon={item.icon}
              details={item.details}
              detailsBn={item.detailsBn}
              titleBn={item.titleBn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroServiceProcessSection;
