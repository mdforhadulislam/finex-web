import Image from 'next/image'
import React from 'react'

import Star from "../../public/star.png";

const CustomarReviewSingleBox = ({ name, star, details }) => {
  return (
    <div className="w-full h-auto  sm:p-2 p-4">
    <div className="w-full h-auto p-4 shadow-3xl rounded-md border bg-slate-50 cursor-pointer select-none">
      <div className="w-full h-auto flex flex-col items-center align-middle justify-center">
        <h1 className="text-lg font-semibold text-gray-900">{name}</h1>
        <div className="w-full h-auto flex justify-center align-middle items-center gap-1">
          {star == 1 && <Image src={Star} alt="Star" />}
          {star == 2 && (
            <>
              <Image width={24} height={24}  src={Star} alt="Star"/>
              <Image width={24} height={24} src={Star} alt="Star" />
            </>
          )}
          {star == 3 && (
            <>
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
            </>
          )}
          {star == 4 && (
            <>
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
            </>
          )}
          {star == 5 && (
            <>
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
              <Image width={24} height={24} src={Star} alt="Star" />
            </>
          )}
        </div>
      </div>

      <div className="w-full h-auto pt-2">
        <h1 className="text-lg font-medium text-gray-800">Feedback</h1>
        <p className=" text-base font-normal text-gray-700">{details}</p>
      </div>
    </div>
  </div>
  )
}

export default CustomarReviewSingleBox