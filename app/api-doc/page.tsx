import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const OurApiDoc = () => {
  return (
    <>

        {/* header start  */}
         <div
      className="w-full h-auto bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/air-freight-breadcrumb.jpg)` }}
    >
      {/* Inner container with padding and alignment */}
      <div className="lg:container h-auto m-auto sm:p-2 p-4 py-20 sm:py-24">
        {/* English heading */}
        <IsEnglish className="">
          <h1 className="font-bold text-3xl sm:text-5xl text-white">
            FINEX API DOCUMENTATION
          </h1>
        </IsEnglish>

        {/* Bangla heading */}
        <IsBangla className="">
          <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
            ফিনেক্স এপিআই ডকুমেন্টেশন
          </h1>
        </IsBangla>

        {/* English breadcrumb navigation */}
        <IsEnglish className="">
          <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
            <Link href={"/"}>HOME</Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link href={"/contact"}>FINEX API DOCUMENTATION</Link>
          </span>
        </IsEnglish>

        {/* Bangla breadcrumb navigation */}
        <IsBangla className="">
          <span className="flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white">
            <Link href={"/"} className="bfont text-xl sm:text-3xl">
              হোম
            </Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link
              href={"/about/contact"}
              className="bfont text-xl sm:text-3xl"
            >
            ফিনেক্স এপিআই ডকুমেন্টেশন
            </Link>
          </span>
        </IsBangla>
      </div>
    </div>
        {/* header end  */}


        <div className="container h-auto m-auto sm:p-2 p-4">
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
                <p className="text-lg text-gray-700 mb-6">
                Welcome to the Finex API documentation. Here you will find all the necessary information to integrate with our API.
                </p>
                <Link href="/air-freight-breadcrumb.jpg" download="http://localhost:3000/air-freight-breadcrumb.jpg" target="_blank" className="text-blue-500 hover:underline">
                View API Documentation
                </Link>
            </div>
        </div>

    </>
  )
}

export default OurApiDoc