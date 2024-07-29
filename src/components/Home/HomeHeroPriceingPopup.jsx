import { priceNote } from '@/data/parcel';
import Modal from '@/utils/Modal'
import React, { useState } from 'react'
import { FaRegHandPointRight, FaWhatsapp } from 'react-icons/fa'

const HomeHeroPriceingPopup = ({ searchPrice, seletedWeightId, seletedToId }) => {
    const [countryName, setCountryName] = useState("");
  return (
     <Modal>
      <div className="w-full h-auto p-2">
        <h1 className="text-xl sm:text-2xl  md:text-4xl font-extrabold">
          Your Quote of Exporting to {countryName?.toLocaleUpperCase()}
        </h1>

        <h1 className="text-[18px] flex gap-2 py-2 align-middle items-center">
          For Weight {seletedWeightId.name}{" "}
          <a href="tel:+01577185840">
            <FaWhatsapp className="w-8 h-8 text-emerald-500" />
          </a>
        </h1>

        <div className="w-full h-auto mt-2">
          <div className="w-full h-auto">
            <div className="w-full h-auto flex justify-between">
              <div className="w-full h-auto text-center p-2 border font-semibold">
                Description
              </div>
              <div className="w-full h-auto text-center p-2 border  font-semibold">
                Price
              </div>
            </div>
            <div className="w-full h-auto flex justify-between">
              <div className="w-full h-auto text-center p-2 border">
                {searchPrice?.message}
              </div>
              <div className="w-full h-auto text-center p-2 border">
                {searchPrice?.data} TAKA
              </div>
            </div>
          </div>

          <div className="w-full h-auto pt-6 text-[18px] ">
            <b className="text-defult-red pb-2">NOTE:</b>

            {priceNote?.map((item) => (
              
                <li className="list-none gap-4 flex py-1 text-base" key={item?.id}>
                  <div className="w-6 h-6 inline-block">
                    <FaRegHandPointRight className="w-6 h-6 inline-block" />
                  </div>
                  <p className="inline-block">{item?.block}</p>
                </li>
             
            ))}
          </div>

          <div className="w-full h-auto pt-6 text-[18px] ">
              <b className=" text-defult-red">IMPORTANT NOTICE:</b>
         

            <p className="inline-block pb-8 text-base">
              Dear Customer, <br />
              We Always Strives To Ensure The Highest Level Of Customer Service.
              Please Be Advised That In The Event Of An Unfortunate Product
              Missing During Export/Import: We Suggest You Provide The Actual
              Packing List To Us Before The Package Departure. After Receiving
              The Package, Make Sure To Take A Short Uncut Video While
              Unboxing.We Will Not Be Held Responsible If There Is No Uncut
              Video Of The Unboxing. We Are Always Trying Our Best To Ensure
              Customer Service And Not Face Any Hurdles, Hence We Have Taken
              This Step. We Hope You Will Always Be With Us. Thank You
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default HomeHeroPriceingPopup