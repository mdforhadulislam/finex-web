import { LangugeContext } from '@/context/langugeContext';
import Image from 'next/image';
import React, { useContext } from 'react'

const HeroServiceFeatureSingleBox = ({ title, icon, details }) => {
    const lang = useContext(LangugeContext)
    return (
      <div className="w-full h-full p-2">
        <div className="w-full h-full p-5 shadow-3xl rounded-lg border">
          <div className="w-full h-auto flex justify-center align-middle items-center p-3 pt-1">
            <Image width={130} height={130} src={icon?.src} alt={title} className="w-[130px] h-[130px]"/>
          </div>
          <div className="w-full h-full p-2 ">
            <h1 className={` mb-3 text-gray-900 ${lang.isBangla ? "text-3xl font-semibold bfont"  : "text-xl font-semibold" }`}>{title}</h1>
            <p className={`font-normal text-gray-800 text-justify ${lang.isBangla ? "text-xl bfont"  : "text-base " }`}>
              {details}
            </p>
          </div>
        </div>
      </div>
    );
}

export default HeroServiceFeatureSingleBox