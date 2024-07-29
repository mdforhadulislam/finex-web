import { serviceBox } from "@/data/service";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import HeroServiceSingleBox from "./HeroServiceSingleBox";

const HeroServiceSection = () => {
  return (
    <div className="w-full h-auto">
      <div className="lg:container m-auto px-2  sm:p-2 p-4 sm:py-20">
        <div className="w-full h-auto text-center flex justify-center align-middle items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-10 mt-4">
            <IsEnglish>OUR SERVICE</IsEnglish>
            <IsBangla className={"bfont md:text-7xl text-5xl lg:text-8xl"}>
              আমাদের সেবা
            </IsBangla>
          </h1>
        </div>

        <IsEnglish className="w-full h-auto px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {serviceBox.map((item) => (
            <HeroServiceSingleBox
              key={item.id}
              title={item.title}
              icon={item.icon}
              details={item.details}
            />
          ))}
        </IsEnglish>

        <IsBangla className="w-full h-auto px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {serviceBox.map((item) => (
            <HeroServiceSingleBox
              key={item.id}
              title={item.titleBn}
              icon={item.icon}
              details={item.detailsBn}
            />
          ))}
        </IsBangla>
      </div>
    </div>
  );
};

export default HeroServiceSection;
