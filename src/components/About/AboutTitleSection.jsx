import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

import BG from "@/public/bg.png";
import Head from 'next/head'

const AboutTitleSection = () => {
  return (
    <>
      {/* SEO meta tags for the About page */}
      <Head>
        <meta name="description" content="Learn more about Faster-In, our mission, and our team. Discover what drives us and how we make an impact." />
        <meta property="og:title" content="About Us | Faster-In" />
        <meta property="og:description" content="Learn more about Faster-In, our mission, and our team. Discover what drives us and how we make an impact." />
      </Head>

      {/* Main container with background image */}
      <div className='w-full h-auto bg' style={{ backgroundImage: `url('${BG.src}')` }}>
        {/* Inner container with padding and alignment */}
        <div className='lg:container h-auto m-auto sm:p-2 p-4 sm:py-24'>
          {/* English heading */}
          <IsEnglish>
            <h1 className='font-bold text-3xl sm:text-5xl text-white'>
              ABOUT
            </h1>
          </IsEnglish>

          {/* Bangla heading */}
          <IsBangla>
            <h1 className='font-bold text-5xl sm:text-6xl text-white bfont'>
              আমাদের সম্পর্কে
            </h1>
          </IsBangla>

          {/* English breadcrumb navigation */}
          <IsEnglish>
            <span className='flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white'>
              <Link href={"/"}>HOME</Link>
              <FaChevronRight className='w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]' />
              <Link href={"/about"}>ABOUT</Link>
            </span>
          </IsEnglish>

          {/* Bangla breadcrumb navigation */}
          <IsBangla>
            <span className='flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white'>
              <Link href={"/"} className='bfont text-xl sm:text-3xl'>
                হোম
              </Link>
              <FaChevronRight className='w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]' />
              <Link href={"/about"} className='bfont text-xl sm:text-3xl'>
                আমাদের সম্পর্কে
              </Link>
            </span>
          </IsBangla>
        </div>
      </div>
    </>
  )
}

export default AboutTitleSection