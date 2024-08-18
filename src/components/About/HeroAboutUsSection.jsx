import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import React from "react";
import DeliveryMan from "../../public/delivery-man.png";
import Head from 'next/head';

const HeroAboutUsSection = () => {
  return (
    <>
      {/* SEO meta tags for the About Us section */}
      <Head>
        <meta name="description" content="Discover why FINEX stands out with our commitment to hassle-free shipping, professionalism, and personal care. Serving Surat since 2014 with flexible delivery solutions." />
        <meta property="og:title" content="Why Choose FINEX | Faster-In" />
        <meta property="og:description" content="Discover why FINEX stands out with our commitment to hassle-free shipping, professionalism, and personal care. Serving Surat since 2014 with flexible delivery solutions." />
      </Head>

      {/* Main container */}
      <div className="w-full h-auto">
        {/* Inner container with padding and alignment */}
        <div className="lg:container sm:p-2 p-4 px-2 pb-10 pt-0 m-auto">
          {/* Flex container for image and text */}
          <div className="w-full h-auto flex flex-col md:flex-row items-center align-middle mb-14">
            {/* Image section */}
            <div className="w-full md:w-[50%] lg:w-[35%] h-auto flex justify-center align-middle items-center p-3">
              {/* Image component */}
              <img
                src={DeliveryMan?.src}
                alt="Delivery-Man"
                className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[380px] lg:h-[450px]"
              />
            </div>

            {/* Text section */}
            <div className="w-full md:w-[50%] lg:w-[65%] h-auto p-5">
              {/* English heading */}
              <IsEnglish>
                <div className="w-full h-auto flex justify-center align-middle items-center py-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-defult">
                    Why Choose FINEX
                  </h1>
                </div>
              </IsEnglish>

              {/* Bangla heading */}
              <IsBangla>
                <div className="w-full h-auto flex justify-center align-middle items-center py-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-defult text-center bfont">
                    কেন ফিনেক্স কে নির্বাচন করবেন
                  </h1>
                </div>
              </IsBangla>

              {/* English text */}
              <IsEnglish>
                <p className="w-full h-auto text-base text-gray-900">
                  Our commitment to hassle-free shipping, coupled with our
                  unwavering professionalism and personal care, sets us apart at
                  AICS. As an independent courier service provider, we take great
                  pride in delivering the highest level of service. With our
                  extensive network of local couriers throughout Surat, we possess
                  a distinct advantage over our competitors.
                  <br />
                  <br />
                  Since 2014, we have been dedicated to serving our clients with
                  utmost satisfaction. We understand that flexibility is key to
                  success, which is why we offer maximum adaptability in
                  deliveries. From route adjustments to courier schedules, our aim
                  is to provide a bespoke service that caters to each client’s
                  unique requirements.
                </p>
              </IsEnglish>

              {/* Bangla text */}
              <IsBangla>
                <p className="w-full h-auto text-xl text-gray-900 bfont">
                  আমাদের অটুট পেশাদারিত্ব এবং ব্যক্তিগত যত্ন সহ ঝামেলা-মুক্ত
                  শিপিংয়ের প্রতি আমাদের প্রতিশ্রুতি আমাদের আলাদা করে। একটি
                  স্বাধীন কুরিয়ার পরিষেবা প্রদানকারী হিসাবে, আমরা সর্বোচ্চ স্তরের
                  পরিষেবা প্রদানের জন্য অত্যন্ত গর্বিত। সুরাট জুড়ে আমাদের
                  স্থানীয় কুরিয়ারগুলির বিস্তৃত নেটওয়ার্কের সাথে, আমরা আমাদের
                  প্রতিযোগীদের তুলনায় একটি স্বতন্ত্র সুবিধার অধিকারী।
                  <br />
                  <br />
                  2014 সাল থেকে, আমরা অত্যন্ত সন্তুষ্টির সাথে আমাদের ক্লায়েন্টদের
                  পরিবেশন করার জন্য নিবেদিত হয়েছি। আমরা বুঝি যে নমনীয়তা সাফল্যের
                  চাবিকাঠি, তাই আমরা ডেলিভারিতে সর্বাধিক অভিযোজনযোগ্যতা অফার করি।
                  রুট সামঞ্জস্য থেকে কুরিয়ার সময়সূচী পর্যন্ত, আমাদের লক্ষ্য একটি
                  বেস্পোক পরিষেবা প্রদান করা যা প্রতিটি ক্লায়েন্টের অনন্যতা পূরণ
                  করে প্রয়োজনীয়তা
                </p>
              </IsBangla>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAboutUsSection;