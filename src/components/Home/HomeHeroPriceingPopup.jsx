import { getRequestSend, SINGLE_COUNTRY_API } from '@/data/ApiMethod'; // Import API methods
import { priceNote } from '@/data/parcel'; // Import pricing notes
import Modal from '@/utils/Modal'; // Import Modal component
import Head from 'next/head';
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { FaRegHandPointRight, FaWhatsapp } from 'react-icons/fa'; // Import icons

const HomeHeroPriceingPopup = ({ searchPrice, seletedWeightId, seletedToId }) => {
  const [countryName, setCountryName] = useState(""); // State for country name

  // Fetch country name when component mounts or `seletedToId` changes
  useEffect(() => {
    getRequestSend(SINGLE_COUNTRY_API(seletedToId)).then((res) => {
      setCountryName(res.data.name);
    });
  }, [seletedToId]);

  return (
    <Modal>
      <Head>
        <meta name="description" content="Get accurate shipping pricing quotes for exporting packages with Faster International Express. Compare rates from DHL, Fedex, UPS, and Aramex." />
        <meta name="keywords" content="shipping pricing, export rates, DHL, Fedex, UPS, Aramex, international shipping" />
        <meta property="og:title" content="Shipping Pricing Quote - Faster International Express" />
        <meta property="og:description" content="Receive detailed shipping pricing quotes for exporting packages with Faster International Express. Compare rates from top courier services." />
        <meta name="twitter:title" content="Shipping Pricing Quote - Faster International Express" />
        <meta name="twitter:description" content="Get precise shipping pricing quotes for international exports with Faster International Express. Compare rates from leading courier services." />
      </Head>
      <div className="w-full h-auto p-2">
        {/* Header with dynamic country name */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
          Your Quote of Exporting to {countryName?.toLocaleUpperCase()}
        </h1>

        {/* Subheader with weight and contact info */}
        <h1 className="text-[18px] flex gap-2 py-2 align-middle items-center">
          For Weight {seletedWeightId.name}
          <a href="tel:+01577185840">
            <FaWhatsapp className="w-8 h-8 text-emerald-500" />
          </a>
        </h1>

        {/* Pricing table */}
        <div className="w-full h-auto mt-2">
          <div className="w-full h-auto">
            {/* Table headers */}
            <div className="w-full h-auto flex justify-between">
              <div className="w-full h-auto text-center p-2 border font-semibold">
                Description
              </div>
              <div className="w-full h-auto text-center p-2 border font-semibold">
                Delivery By
              </div>
              <div className="w-full h-auto text-center p-2 border font-semibold">
                Price
              </div>
            </div>
            {/* Pricing rows */}
            {
              searchPrice?.price?.map((item, index) => (
                <div key={index} className="w-full h-auto flex justify-between">
                  <div className="w-full h-auto text-center p-2 border">
                    {item?.dhl ? "DHL" : item.fedex ? "Fedex" : item.ups ? "UPS" : item.aramex ? "Aramex" : ""} {" "} {searchPrice?.message}
                  </div>
                  <div className="w-full h-auto text-center p-2 border">
                    {item?.dhl ? "DHL" : item.fedex ? "Fedex" : item.ups ? "UPS" : item.aramex ? "Aramex" : ""}
                  </div>
                  <div className="w-full h-auto text-center p-2 border">
                    {item?.dhl ? item?.dhl : item.fedex ? item.fedex : item.ups ? item.ups : item.aramex ? item.aramex : ""} TAKA
                  </div>
                </div>
              ))
            }
          </div>

          {/* Notes section */}
          <div className="w-full h-auto pt-6 text-[18px]">
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

          {/* Important notice section */}
          <div className="w-full h-auto pt-6 text-[18px]">
            <b className="text-defult-red">IMPORTANT NOTICE:</b>
            <p className="inline-block pb-8 text-base">
              Dear Customer, <br />
              We Always Strives To Ensure The Highest Level Of Customer Service.
              Please Be Advised That In The Event Of An Unfortunate Product
              Missing During Export/Import: We Suggest You Provide The Actual
              Packing List To Us Before The Package Departure. After Receiving
              The Package, Make Sure To Take A Short Uncut Video While
              Unboxing. We Will Not Be Held Responsible If There Is No Uncut
              Video Of The Unboxing. We Are Always Trying Our Best To Ensure
              Customer Service And Not Face Any Hurdles, Hence We Have Taken
              This Step. We Hope You Will Always Be With Us. Thank You
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HomeHeroPriceingPopup;
