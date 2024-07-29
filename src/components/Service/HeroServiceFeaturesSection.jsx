import { featuresData } from '@/data/features'
import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import React from 'react'
import HeroServiceFeatureSingleBox from './HeroServiceFeatureSingleBox'

const HeroServiceFeaturesSection = () => {
  return (
    <div className="w-full h-auto">
    <div className="lg:container  sm:p-2 p-4 h-auto m-auto py-5">
      <IsEnglish className="w-full h-auto text-center flex flex-col justify-center align-middle items-center py-12">
      
      
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult p-2 py-4">
          OUR FEATURES
        </h1>
        <p className="md:w-[600px] w-full px-8 h-auto flex justify-center align-middle items-center text-base">
          We enjoy adapting our strategies to offer every client the best
          solutions that are at the forefront of the industry.
        </p>
      </IsEnglish>
      <IsBangla className="w-full h-auto text-center flex flex-col justify-center align-middle items-center py-12">
      
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-defult p-2 py-4 bfont">
      আমাদের বৈশিষ্ট্য
      </h1>
      <p className="md:w-[600px] w-full px-8 h-auto flex justify-center align-middle items-center bfont text-xl">
      আমরা প্রতিটি ক্লায়েন্টকে শিল্পের অগ্রভাগে থাকা সেরা সমাধানগুলি অফার করার জন্য আমাদের কৌশলগুলিকে অভিযোজিত করা উপভোগ করি।
      </p>
    </IsBangla>




      <IsEnglish className="w-full h-auto px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pb-5">
        {featuresData.map((item) => (
          <HeroServiceFeatureSingleBox
            key={item.id}
            title={item.title}
            icon={item.icon}
            details={item.details}
          />
        ))}
      </IsEnglish>


      <IsBangla className="w-full h-auto px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pb-5 ">
        {featuresData.map((item) => (
          <HeroServiceFeatureSingleBox
            key={item.id}
            title={item.titleBn}
            icon={item.icon}
            details={item.detailsBn}
          />
        ))}
      </IsBangla>




    </div>
  </div>
  )
}

export default HeroServiceFeaturesSection