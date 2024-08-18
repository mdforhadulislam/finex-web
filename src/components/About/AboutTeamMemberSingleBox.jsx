import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

// Component to display an individual team member's information
const AboutTeamMemberSingleBox = ({ title, name, image }) => {
  return (
    <>
      {/* SEO meta tags for the team member page */}
      <Head>
        {/* Meta description for the page */}
        <meta name="description" content={`${name} is a key team member at Faster-In, holding the position of ${title}. Discover more about their role and contributions.`} />
        {/* Open Graph title for social media sharing */}
        <meta property="og:title" content={`Meet ${name} | Our Team | Faster-In`} />
        {/* Open Graph description for social media sharing */}
        <meta property="og:description" content={`${name} is a key team member at Faster-In, holding the position of ${title}.`} />
        {/* Type of content for Open Graph */}
        <meta property="og:type" content="profile" />
      </Head>

      {/* Container for the team member's card */}
      <div className='w-full h-auto p-3 flex justify-center items-center'>
        {/* Card styling for the team member */}
        <div className='w-[255px] h-auto p-2 bg-white rounded-md flex-col shadow-3xl flex justify-center items-center cursor-pointer'>
          {/* Display the team member's image */}
          <Image width={230} height={100} src={image.src} alt={`Image of ${name}`} />

          {/* Container for the team member's name and title */}
          <div className='w-full h-auto p-1 px-0'>
            {/* Display the team member's name and title */}
            <h1 className='text-base font-bold text-gray-800'>
              {name} <span className='text-sm font-medium text-gray-600'>({title})</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutTeamMemberSingleBox