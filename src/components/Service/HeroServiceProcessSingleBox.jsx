import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Image from 'next/image'
import React from 'react'

const HeroServiceProcessSingleBox = ({title,icon,details,titleBn, detailsBn}) => {
  return (
    <div className='w-full h-auto p-2'>
    <div className='w-full h-auto p-5 shadow-3xl rounded-lg border'>
        <div className='w-full h-auto p-3 pt-1'>
            <Image width={150} height={150} src={icon.src} alt={title} className='w-[150px] h-[150px] m-auto'/>
        </div>
        <IsEnglish className='w-full h-auto'>
            <h1 className='text-lg font-semibold text-gray-900 mb-4'>{title}</h1>
            <p className='w-full h-auto text-justify text-base text-gray-800'>{details}</p>
        </IsEnglish>
        <IsBangla className='w-full h-auto'>
            <h1 className='text-3xl font-semibold text-gray-900 mb-3 bfont'>{titleBn}</h1>
            <p className='w-full h-auto text-justify text-xl bfont text-gray-800'>{detailsBn}</p>
        </IsBangla>
    </div>
</div>
  )
}

export default HeroServiceProcessSingleBox