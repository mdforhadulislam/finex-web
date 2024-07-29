import { partnersData } from '@/data/clientsAndPartners'
import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Image from 'next/image'
import React from 'react'

const HomeHeroDeliveryPartnersSection = () => {
  return (
    <div className='w-full h-auto'>
    <div className='lg:container  sm:p-2 p-4 sm:py-20 m-auto'>
    <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-10 mt-4">
      FINEX SHIPPING PARTNERS
      </h1>
    </IsEnglish>

    <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-defult px-5 mb-10 mt-4 bfont">
      ফিনেক্স শিপিং অংশীদার
      </h1>
    </IsBangla>

    <div className='w-full h-auto text-center'>
        {
            partnersData.map(item=> <Image width={150} height={150} className='w-[150px] inline-block p-3' key={item.id} src={item.logo.src} alt={item?.id} />
            )
        }


    </div>
    </div>
</div>
  )
}

export default HomeHeroDeliveryPartnersSection