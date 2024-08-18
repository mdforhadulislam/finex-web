import { aboutData } from '@/data/about' // Importing data for the about section
import IsBangla from '@/utils/IsBangla'  // Importing a utility to conditionally render Bangla content
import IsEnglish from '@/utils/IsEnglish' // Importing a utility to conditionally render English content
import Image from 'next/image'            // Importing Next.js Image component for optimized image rendering
import Head from 'next/head'              // Importing Head component for setting SEO meta tags
import React from 'react'

const AboutDetailsSection = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <meta name="description" content="Discover more about FINEX, a top-tier courier service provider offering hassle-free shipping and a dedicated network of couriers." /> {/* Meta description */}
        <meta property="og:title" content="About FINEX - Leading Courier Service" /> {/* Open Graph title */}
        <meta property="og:description" content="Learn why FINEX is the best choice for courier services, providing personalized care and unmatched professionalism." /> {/* Open Graph description */}
        <meta property="og:image" content="/path/to/image.jpg" /> {/* Open Graph image */}
        <meta name="robots" content="index, follow" /> {/* Robots meta tag */}
      </Head>

      {/* Main wrapper */}
      <div className="w-full h-auto">
        <div className="lg:container sm:p-2 p-4 h-auto sm:py-8 m-auto">
          <div className="w-full h-auto">

            {/* English Section Title */}
            <IsEnglish className="w-full h-auto py-3">
              <h1 className="text-3xl sm:text-5xl font-bold text-defult text-left">
                FINEX
              </h1>
            </IsEnglish>

            {/* Bangla Section Title */}
            <IsBangla className="w-full h-auto py-3">
              <h1 className="text-5xl sm:text-6xl bfont font-bold text-defult text-left">
                ফিনেক্স
              </h1>
            </IsBangla>

            {/* English Text Content */}
            <IsEnglish className="w-full h-auto text-gray-700 text-base py-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                unde ea illum quaerat aut ullam esse blanditiis odio iure odit?
                Quo perspiciatis suscipit distinctio harum velit, fugit earum,
                voluptate ex sequi tempore minus porro consectetur, dicta error
                aliquam possimus ducimus perferendis dolor consequuntur numquam.
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                unde ea illum quaerat aut ullam esse blanditiis odio iure odit?
                Quo perspiciatis suscipit distinctio harum velit, fugit earum,
                voluptate ex sequi tempore minus porro consectetur,
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                unde ea illum quaerat aut ullam esse blanditiis odio iure odit?
                Quo perspiciatis suscipit distinctio harum velit, fugit earum,
                voluptate ex sequi tempore minus porro consectetur, Quo
                perspiciatis suscipit distinctio harum velit, fugit earum,
                voluptate ex sequi tempore minus porro consectetur,
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                unde ea illum quaerat aut ullam esse blanditiis odio iure odit?
                Quo perspiciatis
              </p>
            </IsEnglish>

            {/* Bangla Text Content */}
            <IsBangla className="w-full h-auto text-gray-700 text-2xl py-4">
              <p className="bfont">
                জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ
                হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন
                নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়
                দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে
                প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম,
                প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে
                উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব
                অনিবার্য।
              </p>
              <br />
              <p className="bfont">
                মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ
                হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে
                পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে
                ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও
                স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও
                তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম
                করে দিয়ে নিজে রইল নেপথ্যে।
              </p>
              <br />
              <p className="bfont">
                মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ
                হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে
                পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে
                ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও
                স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও
                তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম
                করে দিয়ে নিজে রইল নেপথ্যে।
              </p>
              <br />
              <p className="bfont">
                মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ
                হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে
                পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে
                ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও
                স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও
                তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম
                করে দিয়ে নিজে রইল নেপথ্যে।
              </p>
            </IsBangla>
          </div>

          {/* About Details */}
          <div className="w-full h-auto py-8 flex flex-col items-start align-top justify-start gap-8">
            {aboutData.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto flex items-center align-middle justify-start"
              >
                {/* Icon Container */}
                <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] p-3 sm:p-5 flex items-center align-middle justify-center">
                  <div className="sm:w-[100px] w-[80px] h-[80px] sm:h-[100px] bg-defult p-4 rounded-full shadow-4xl">
                    <Image width={80} height={80} src={item?.icon?.src} alt={item?.title} />
                  </div>
                </div>

                {/* English Details */}
                <IsEnglish className="w-auto h-auto pl-2">
                  <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h1>
                  <p className="text-base font-normal text-gray-700">
                    {item.details}
                  </p>
                </IsEnglish>

                {/* Bangla Details */}
                <IsBangla className="w-auto h-auto pl-2">
                  <h1 className="text-3xl bfont font-semibold text-gray-800 mb-2">
                    {item?.titleBn}
                  </h1>
                  <p className="text-2xl bfont font-normal text-gray-700">
                    {item?.detailsBn}
                  </p>
                </IsBangla>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutDetailsSection