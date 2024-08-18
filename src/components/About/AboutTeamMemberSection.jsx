import IsBangla from '@/utils/IsBangla' // Importing utility to conditionally render Bangla content
import IsEnglish from '@/utils/IsEnglish' // Importing utility to conditionally render English content
import Slider from '@/utils/Slider' // Importing a custom Slider component for displaying team members
import React from 'react'
import AboutTeamMemberSingleBox from './AboutTeamMemberSingleBox' // Importing the component to display individual team member details
import { teamMember } from '@/data/about' // Importing data of team members
import Head from 'next/head'

const AboutTeamMemberSection = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <meta name="description" content="Get to know the team behind FINEX, a group of dedicated professionals ensuring top-notch courier services." /> {/* Meta description */}
        <meta property="og:title" content="Meet the FINEX Team - Our Dedicated Members" /> {/* Open Graph title */}
        <meta property="og:description" content="Introducing the talented individuals making FINEX a leader in the courier service industry." /> {/* Open Graph description */}
        <meta property="og:image" content="/path/to/team-image.jpg" /> {/* Open Graph image */}
        <meta name="robots" content="index, follow" /> {/* Robots meta tag */}
      </Head>

      {/* Main wrapper */}
      <div className="w-full h-auto bg-defult"> {/* Full-width container with a default background color */}
        <div className="lg:container sm:p-2 p-4 py-8 m-auto h-auto"> {/* Responsive container with padding and auto height */}
          
          {/* English Section Title */}
          <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white px-5 mb-10 mt-4">
              TEAM MEMBER
            </h1>
          </IsEnglish>

          {/* Bangla Section Title */}
          <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl bfont font-bold text-white px-5 mb-10 mt-4">
              আমাদের দলের সদস্য
            </h1>
          </IsBangla>

          {/* Slider Component */}
          <Slider
            coustomResponsive={{
              superLargeDesktop: {
                // Custom responsive settings for different screen sizes
                breakpoint: { max: 4000, min: 3000 },
                items: 7, // Show 7 items for very large desktops
              },
              desktop3: {
                breakpoint: { max: 3000, min: 1500 },
                items: 6, // Show 6 items for large desktops
              },
              desktop2: {
                breakpoint: { max: 1500, min: 1024 },
                items: 5, // Show 5 items for medium desktops
              },
              desktop1: {
                breakpoint: { max: 1024, min: 800 },
                items: 4, // Show 4 items for small desktops
              },
              tablet: {
                breakpoint: { max: 800, min: 600 },
                items: 3, // Show 3 items for tablets
              },
              mobile: {
                breakpoint: { max: 600, min: 0 },
                items: 1, // Show 1 item for mobile devices
              },
            }}
          >
            {/* Mapping through teamMember data to create individual member boxes */}
            {teamMember.map((item) => (
              <AboutTeamMemberSingleBox
                key={item?.id} // Unique key for each item
                title={item.title} // Member title
                name={item.name} // Member name
                image={item.image} // Member image
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default AboutTeamMemberSection