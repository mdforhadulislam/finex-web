import Image from 'next/image'
import React from 'react'

const AboutTeamMemberSingleBox = ({title,name,image}) => {
  return (
    <div className='w-full h-auto p-3 flex justify-center align-middle items-center'>
      <div className='w-[255px] h-auto p-2 bg-white rounded-md flex-col shadow-3xl flex justify-center items-center align-middle cursor-pointer'>
            <Image width={230} height={100} src={image.src} alt={name} />

            <div className='w-full h-auto p-1 px-0'>
                <h1 className=' text-base font-bold text-gray-800'>{name} <span className='text-sm font-medium text-gray-600'>({title})</span></h1>
                
            </div>
      </div>
    </div>
  )
}

export default AboutTeamMemberSingleBox