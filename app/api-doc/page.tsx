import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FcCancel, FcCheckmark } from 'react-icons/fc'

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




        <div className="container h-auto m-auto p-4 py-14 pb-5">
          <div>
              <IsEnglish className="w-full h-auto flex justify-center align-middle items-center">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
              INTEGRATE SUBSCRIPTION PLAN
            </h1>
          </IsEnglish>
          <IsBangla className="w-full h-auto flex justify-center align-middle items-center ">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
              সাবস্ক্রিপশন প্ল্যান ইন্টিগ্রেট
            </h1>
          </IsBangla>
          </div>




            <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 p-2 py-10 ">


          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">BASIC</h1>
                <h2 className="text-3xl">Free</h2>
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">বেসিক</h1>
                <h2 className="text-5xl bfont">ফ্রী</h2>
              </IsBangla>
              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                     
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Free Home Pickup</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Standard Packaging</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
            <FcCancel className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
              <FcCancel className="w-6 h-6" />
                    <span>Live Tracking Api</span>
                  </li>


                  
                   <li className="flex justify-start items-center align-middle gap-3">
                <FcCancel className="w-6 h-6" />
                    <span>Price Checking Api</span>
                  </li>
                  
                  
                   <li className="flex justify-start items-center align-middle gap-3">
                   <FcCancel className="w-6 h-6" />
                    <span>Country Zone List Api</span>
                  </li>
                  
                   <li className="flex justify-start items-center align-middle gap-3">
           <FcCancel className="w-6 h-6" />
                    <span>Order Api</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* special suggestion */}
   
          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">STANDARD</h1>
                <h2 className="text-3xl">2000TK/MONTH</h2>
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">স্ট্যান্ডার্ড</h1>
                <h2 className="text-5xl bfont">২০০০টাকা/মাস</h2>
              </IsBangla>
              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Free Home Pickup</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Standard Packaging</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Live Tracking Api</span>
                  </li>


                  
                   <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Price Checking Api</span>
                  </li>
                  
                  
                   <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Country Zone List Api</span>
                  </li>
                  
                   <li className="flex justify-start items-center align-middle gap-3">
           <FcCancel className="w-6 h-6" />
                    <span>Order Api</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">PREMIUM</h1>
                <h2 className="text-3xl">3500TK/MONTH</h2> 
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">প্রিমিয়াম </h1>
                <h2 className="text-5xl bfont">৩৫০০টাকা/মাস</h2>
              </IsBangla>

              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Free Home Pickup</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Standard Packaging</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Live Tracking Api</span>
                  </li>


                  
                   <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Price Checking Api</span>
                  </li>
                  
                  
                   <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Country Zone List Api</span>
                  </li>
                  
                   <li className="flex justify-start items-center align-middle gap-3">
         <FcCheckmark className="w-6 h-6" />
                    <span>Order Api</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
              <FcCheckmark className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
               <FcCheckmark className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>


        </div>





        <div className="container h-auto m-auto sm:p-2 p-4">
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
                <p className="text-lg text-gray-700 mb-6">
                Welcome to the Finex API documentation. Here you will find all the necessary information to integrate with our API.
                </p>
                <Link href="/air-freight-breadcrumb.jpg" download="air-freight-breadcrumb.jpg" target="_blank" className="text-blue-500 hover:underline">
                View API Documentation
                </Link>
            </div>
        </div>

    </>
  )
}

export default OurApiDoc