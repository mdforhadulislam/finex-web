import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Slider from '@/utils/Slider'
import React from 'react'
import CustomarReviewSingleBox from './CustomarReviewSingleBox'
import { review } from '@/data/review'

const HomeCustomerReviewSection = ({ name, star, details }) => {
  return (
    <div className="w-full h-auto bg-defult ">
    <div className="lg:container  sm:p-2 p-4 h-auto py-14 m-auto">
      <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white px-5 mb-10 mt-4">
          CUSTOMER REVIEW
        </h1>
      </IsEnglish>
      <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white px-5 mb-6 mt-4 bfont">
        গ্রাহক রিভিউ 
        </h1>
      </IsBangla>

      <Slider>
        {review.map((item) => (
          <CustomarReviewSingleBox
            key={item.id}
            name={item.name}
            star={item.star}
            details={item.details}
          />
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default HomeCustomerReviewSection