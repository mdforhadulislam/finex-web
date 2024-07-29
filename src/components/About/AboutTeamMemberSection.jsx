import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Slider from '@/utils/Slider'
import React from 'react'
import AboutTeamMemberSingleBox from './AboutTeamMemberSingleBox'
import { teamMember } from '@/data/about'

const AboutTeamMemberSection = () => {
  return (
    <div className="w-full h-auto bg-defult">
    <div className="lg:container  sm:p-2 p-4 py-8 m-auto h-auto">
      <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white px-5 mb-10 mt-4">
          TEAM MEMBER
        </h1>
      </IsEnglish>
      <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl bfont font-bold text-white px-5 mb-10 mt-4">
        আমাদের দলের সদস্য
        </h1>
      </IsBangla>

      <Slider
        coustomResponsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
          },
          desktop3: {
            breakpoint: { max: 3000, min: 1500 },
            items: 6,
          },
          desktop2: {
            breakpoint: { max: 1500, min: 1024 },
            items: 5,
          },
          desktop1: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 800, min: 600 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
          },
        }}
      >
        {teamMember.map((item) => (
          <AboutTeamMemberSingleBox
            key={item?.id}
            title={item.title}
            name={item.name}
            image={item.image}
          />
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default AboutTeamMemberSection