"use client";

import { LoadingContext } from "@/context/LoadingContext";
import { getRequestSend, postRequestSend, PRICE_API, SINGLE_COUNTRY_API } from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Single = () => {
  const router = useRouter();
  let { from, to } = router.query;
  const loading = useContext(LoadingContext)

  const [fromCountry, setFromCountry] = useState({ country: "", id: "" });
  const [toCountry, setToCountry] = useState({ country: "", id: "" });
  const [tab, setTab] = useState({
    dhl: true,
    fedex: false,
    ups: false,
    aramex: false,
  });

  const [dhlRate, setDhlRate] = useState({
    gm500: 0,
    gm1000: 0,
    gm1500: 0,
    gm2000: 0,
    gm2500: 0,
    gm3000: 0,
    gm3500: 0,
    gm4000: 0,
    gm4500: 0,
    gm5000: 0,
    gm5500: 0,
    kg6to10: 0,
    kg11to15: 0,
    kg16to20: 0,
    kg21to25: 0,
    kg26to30: 0,
    kg31to40: 0,
    kg41to50: 0,
    kg51to80: 0,
    kg81to100: 0,
    kg101to500: 0,
    kg501to1000: 0,
  });
  const [fedexRate, setFedexRate] = useState({
    gm500: 0,
    gm1000: 0,
    gm1500: 0,
    gm2000: 0,
    gm2500: 0,
    gm3000: 0,
    gm3500: 0,
    gm4000: 0,
    gm4500: 0,
    gm5000: 0,
    gm5500: 0,
    kg6to10: 0,
    kg11to15: 0,
    kg16to20: 0,
    kg21to25: 0,
    kg26to30: 0,
    kg31to40: 0,
    kg41to50: 0,
    kg51to80: 0,
    kg81to100: 0,
    kg101to500: 0,
    kg501to1000: 0,
  });
  const [upsRate, setUpsRate] = useState({
    gm500: 0,
    gm1000: 0,
    gm1500: 0,
    gm2000: 0,
    gm2500: 0,
    gm3000: 0,
    gm3500: 0,
    gm4000: 0,
    gm4500: 0,
    gm5000: 0,
    gm5500: 0,
    kg6to10: 0,
    kg11to15: 0,
    kg16to20: 0,
    kg21to25: 0,
    kg26to30: 0,
    kg31to40: 0,
    kg41to50: 0,
    kg51to80: 0,
    kg81to100: 0,
    kg101to500: 0,
    kg501to1000: 0,
  });
  const [aramexRate, setAramexRate] = useState({
    gm500: 0,
    gm1000: 0,
    gm1500: 0,
    gm2000: 0,
    gm2500: 0,
    gm3000: 0,
    gm3500: 0,
    gm4000: 0,
    gm4500: 0,
    gm5000: 0,
    gm5500: 0,
    kg6to10: 0,
    kg11to15: 0,
    kg16to20: 0,
    kg21to25: 0,
    kg26to30: 0,
    kg31to40: 0,
    kg41to50: 0,
    kg51to80: 0,
    kg81to100: 0,
    kg101to500: 0,
    kg501to1000: 0,
  });

  const dhlChangeHandler = (e) => {
    setDhlRate({
      ...dhlRate,
      [e.target.name]: Number(e.target.value),
    });
  };
  const fedexChangeHandler = (e) => {
    setFedexRate({
      ...fedexRate,
      [e.target.name]: Number(e.target.value),
    });
  };
  const upsChangeHandler = (e) => {
    setUpsRate({
      ...upsRate,
      [e.target.name]: Number(e.target.value),
    });
  };
  const aramexChangeHandler = (e) => {
    setAramexRate({
      ...aramexRate,
      [e.target.name]: Number(e.target.value),
    });
  };



  const submitHandler = ()=>{
    loading.loadingStart()
    postRequestSend(PRICE_API,{},{fromCountry:fromCountry,toCountry:toCountry,dhlRate:dhlRate,fedexRate:fedexRate,upsRate:upsRate,aramexRate:aramexRate}).then(res=>{
      loading.loadingEnd()
      if(res.status=200){
        toast.error(res.message)
        router.push("/admin/site-data")
      }else{
        toast.error(res.message)
      }
    })
  }

  useEffect(() => {
    getRequestSend(SINGLE_COUNTRY_API(from)).then((res) => {
      if (res.status == 200) {
        setFromCountry({ country: res.data.name, id: res.data._id });
      } else {
        router.push("/not-found");
      }
    });
    getRequestSend(SINGLE_COUNTRY_API(to)).then((res) => {
      if (res.status == 200) {
        setToCountry({ country: res.data.name, id: res.data._id });
      } else {
        router.push("/not-found");
      }
    });
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto py-2 px-2 flex gap-2">
        <InputBox value={fromCountry?.country} title={"From"} />
        <InputBox value={toCountry?.country} title={"To"} />
      </div>

      <div className="w-full h-auto px-2 py-2">
        <div class="sm:hidden">
          <select
            class="w-full px-3 py-[6px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            onChange={(e) => {
              if (e.target.value == "dhl") {
                setTab({ dhl: true, fedex: false, ups: false, aramex: false });
              } else if (e.target.value == "fedex") {
                setTab({ dhl: false, fedex: true, ups: false, aramex: false });
              } else if (e.target.value == "ups") {
                setTab({ dhl: false, fedex: false, ups: true, aramex: false });
              } else if (e.target.value == "aramex") {
                setTab({ dhl: false, fedex: false, ups: false, aramex: true });
              }
            }}
          >
            <option value={"dhl"}>Dhl</option>
            <option value={"fedex"}>FedEx</option>
            <option value={"ups"}>Ups</option>
            <option value={"aramex"}>Aramex</option>
          </select>
        </div>
        <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex ">
          <li
            class="w-full focus-within:z-10 cursor-pointer"
            onClick={() => {
              setTab({ dhl: true, fedex: false, ups: false, aramex: false });
            }}
          >
            <span class="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white border-r rounded-s-lg">
              Dhl
            </span>
          </li>
          <li
            class="w-full focus-within:z-10 cursor-pointer "
            onClick={() => {
              setTab({ dhl: false, fedex: true, ups: false, aramex: false });
            }}
          >
            <span class="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white border-r">
              Fedex
            </span>
          </li>
          <li
            class="w-full focus-within:z-10 cursor-pointer"
            onClick={() => {
              setTab({ dhl: false, fedex: false, ups: true, aramex: false });
            }}
          >
            <span class="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white border-r">
              Ups
            </span>
          </li>
          <li
            class="w-full focus-within:z-10 cursor-pointer"
            onClick={() => {
              setTab({ dhl: false, fedex: false, ups: false, aramex: true });
            }}
          >
            <span class="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white  rounded-e-lg ">
              Aramex
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full h-auto px-2 py-2">
        {tab.dhl && (
          <>
            <h1 className="text-xl font-medium">DHL RATE</h1>

            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 pt-3 pb-3">
              <InputBox
                placeholder={"500 GM"}
                type={"number"}
                title={"500 GM"}
                name={"gm500"}
                value={dhlRate.gm500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"1000 GM"}
                type={"number"}
                title={"1000 GM"}
                name={"gm1000"}
                value={dhlRate.gm1000}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"1500 GM"}
                title={"1500 GM"}
                name={"gm1500"}
                type={"number"}
                value={dhlRate.gm1500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"2000 GM"}
                title={"2000 GM"}
                name={"gm2000"}
                type={"number"}
                value={dhlRate.gm2000}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"2500 GM"}
                title={"2500 GM"}
                name={"gm2500"}
                type={"number"}
                value={dhlRate.gm2500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"3000 GM"}
                title={"3000 GM"}
                name={"gm3000"}
                type={"number"}
                value={dhlRate.gm3000}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"3500 GM"}
                title={"3500 GM"}
                name={"gm3500"}
                type={"number"}
                value={dhlRate.gm3500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"4000 GM"}
                title={"4000 GM"}
                name={"gm4000"}
                type={"number"}
                value={dhlRate.gm4000}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"4500 GM"}
                title={"4500 GM"}
                name={"gm4500"}
                type={"number"}
                value={dhlRate.gm4500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"5000 GM"}
                title={"5000 GM"}
                name={"gm5000"}
                type={"number"}
                value={dhlRate.gm5000}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"5500 GM"}
                title={"5500 GM"}
                name={"gm5500"}
                type={"number"}
                value={dhlRate.gm5500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"6 TO 10 KG"}
                title={"6 TO 10 KG"}
                name={"kg6to10"}
                type={"number"}
                value={dhlRate.kg6to10}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"11 TO 15 KG"}
                title={"11 TO 15 KG"}
                name={"kg11to15"}
                type={"number"}
                value={dhlRate.kg11to15}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"16 TO 20 KG"}
                title={"16 TO 20 KG"}
                name={"kg16to20"}
                type={"number"}
                value={dhlRate.kg16to20}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"21 TO 25 KG"}
                title={"21 TO 25 KG"}
                name={"kg21to25"}
                type={"number"}
                value={dhlRate.kg21to25}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"25 TO 30 KG"}
                title={"25 TO 30 KG"}
                name={"kg26to30"}
                type={"number"}
                value={dhlRate.kg26to30}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"31 TO 40 KG"}
                title={"31 TO 40 KG"}
                name={"kg31to40"}
                type={"number"}
                value={dhlRate.kg31to40}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"41 TO 50 KG"}
                title={"41 TO 50 KG"}
                name={"kg41to50"}
                type={"number"}
                value={dhlRate.kg41to50}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"51 TO 80 KG"}
                title={"51 TO 80 KG"}
                name={"kg51to80"}
                type={"number"}
                value={dhlRate.kg51to80}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"81 TO 100 KG"}
                title={"81 TO 100 KG"}
                name={"kg81to100"}
                type={"number"}
                value={dhlRate.kg81to100}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"101 TO 500 KG"}
                title={"101 TO 500 KG"}
                name={"kg101to500"}
                type={"number"}
                value={dhlRate.kg101to500}
                action={dhlChangeHandler}
              />
              <InputBox
                placeholder={"501 TO 1000 KG"}
                title={"501 TO 1000 KG"}
                name={"kg501to1000"}
                type={"number"}
                value={dhlRate.kg501to1000}
                action={dhlChangeHandler}
              />
            </div>
          </>
        )}

        {tab.fedex && (
          <>
            <h1 className="text-xl font-medium">FEDEX RATE</h1>

            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 pt-3 pb-3">
              <InputBox
                placeholder={"500 GM"}
                type={"number"}
                title={"500 GM"}
                name={"gm500"}
                value={fedexRate.gm500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"1000 GM"}
                type={"number"}
                title={"1000 GM"}
                name={"gm1000"}
                value={fedexRate.gm1000}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"1500 GM"}
                title={"1500 GM"}
                name={"gm1500"}
                type={"number"}
                value={fedexRate.gm1500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"2000 GM"}
                title={"2000 GM"}
                name={"gm2000"}
                type={"number"}
                value={fedexRate.gm2000}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"2500 GM"}
                title={"2500 GM"}
                name={"gm2500"}
                type={"number"}
                value={fedexRate.gm2500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"3000 GM"}
                title={"3000 GM"}
                name={"gm3000"}
                type={"number"}
                value={fedexRate.gm3000}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"3500 GM"}
                title={"3500 GM"}
                name={"gm3500"}
                type={"number"}
                value={fedexRate.gm3500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"4000 GM"}
                title={"4000 GM"}
                name={"gm4000"}
                type={"number"}
                value={fedexRate.gm4000}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"4500 GM"}
                title={"4500 GM"}
                name={"gm4500"}
                type={"number"}
                value={fedexRate.gm4500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"5000 GM"}
                title={"5000 GM"}
                name={"gm5000"}
                type={"number"}
                value={fedexRate.gm5000}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"5500 GM"}
                title={"5500 GM"}
                name={"gm5500"}
                type={"number"}
                value={fedexRate.gm5500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"6 TO 10 KG"}
                title={"6 TO 10 KG"}
                name={"kg6to10"}
                type={"number"}
                value={fedexRate.kg6to10}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"11 TO 15 KG"}
                title={"11 TO 15 KG"}
                name={"kg11to15"}
                type={"number"}
                value={fedexRate.kg11to15}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"16 TO 20 KG"}
                title={"16 TO 20 KG"}
                name={"kg16to20"}
                type={"number"}
                value={fedexRate.kg16to20}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"21 TO 25 KG"}
                title={"21 TO 25 KG"}
                name={"kg21to25"}
                type={"number"}
                value={fedexRate.kg21to25}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"25 TO 30 KG"}
                title={"25 TO 30 KG"}
                name={"kg26to30"}
                type={"number"}
                value={fedexRate.kg26to30}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"31 TO 40 KG"}
                title={"31 TO 40 KG"}
                name={"kg31to40"}
                type={"number"}
                value={fedexRate.kg31to40}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"41 TO 50 KG"}
                title={"41 TO 50 KG"}
                name={"kg41to50"}
                type={"number"}
                value={fedexRate.kg41to50}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"51 TO 80 KG"}
                title={"51 TO 80 KG"}
                name={"kg51to80"}
                type={"number"}
                value={fedexRate.kg51to80}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"81 TO 100 KG"}
                title={"81 TO 100 KG"}
                name={"kg81to100"}
                type={"number"}
                value={fedexRate.kg81to100}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"101 TO 500 KG"}
                title={"101 TO 500 KG"}
                name={"kg101to500"}
                type={"number"}
                value={fedexRate.kg101to500}
                action={fedexChangeHandler}
              />
              <InputBox
                placeholder={"501 TO 1000 KG"}
                title={"501 TO 1000 KG"}
                name={"kg501to1000"}
                type={"number"}
                value={fedexRate.kg501to1000}
                action={fedexChangeHandler}
              />
            </div>
          </>
        )}

        {tab.ups && (
          <>
            <h1 className="text-xl font-medium">UPS RATE</h1>

            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 pt-3 pb-3">
              <InputBox
                placeholder={"500 GM"}
                type={"number"}
                title={"500 GM"}
                name={"gm500"}
                value={upsRate.gm500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"1000 GM"}
                type={"number"}
                title={"1000 GM"}
                name={"gm1000"}
                value={upsRate.gm1000}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"1500 GM"}
                title={"1500 GM"}
                name={"gm1500"}
                type={"number"}
                value={upsRate.gm1500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"2000 GM"}
                title={"2000 GM"}
                name={"gm2000"}
                type={"number"}
                value={upsRate.gm2000}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"2500 GM"}
                title={"2500 GM"}
                name={"gm2500"}
                type={"number"}
                value={upsRate.gm2500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"3000 GM"}
                title={"3000 GM"}
                name={"gm3000"}
                type={"number"}
                value={upsRate.gm3000}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"3500 GM"}
                title={"3500 GM"}
                name={"gm3500"}
                type={"number"}
                value={upsRate.gm3500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"4000 GM"}
                title={"4000 GM"}
                name={"gm4000"}
                type={"number"}
                value={upsRate.gm4000}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"4500 GM"}
                title={"4500 GM"}
                name={"gm4500"}
                type={"number"}
                value={upsRate.gm4500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"5000 GM"}
                title={"5000 GM"}
                name={"gm5000"}
                type={"number"}
                value={upsRate.gm5000}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"5500 GM"}
                title={"5500 GM"}
                name={"gm5500"}
                type={"number"}
                value={upsRate.gm5500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"6 TO 10 KG"}
                title={"6 TO 10 KG"}
                name={"kg6to10"}
                type={"number"}
                value={upsRate.kg6to10}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"11 TO 15 KG"}
                title={"11 TO 15 KG"}
                name={"kg11to15"}
                type={"number"}
                value={upsRate.kg11to15}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"16 TO 20 KG"}
                title={"16 TO 20 KG"}
                name={"kg16to20"}
                type={"number"}
                value={upsRate.kg16to20}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"21 TO 25 KG"}
                title={"21 TO 25 KG"}
                name={"kg21to25"}
                type={"number"}
                value={upsRate.kg21to25}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"25 TO 30 KG"}
                title={"25 TO 30 KG"}
                name={"kg26to30"}
                type={"number"}
                value={upsRate.kg26to30}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"31 TO 40 KG"}
                title={"31 TO 40 KG"}
                name={"kg31to40"}
                type={"number"}
                value={upsRate.kg31to40}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"41 TO 50 KG"}
                title={"41 TO 50 KG"}
                name={"kg41to50"}
                type={"number"}
                value={upsRate.kg41to50}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"51 TO 80 KG"}
                title={"51 TO 80 KG"}
                name={"kg51to80"}
                type={"number"}
                value={upsRate.kg51to80}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"81 TO 100 KG"}
                title={"81 TO 100 KG"}
                name={"kg81to100"}
                type={"number"}
                value={upsRate.kg81to100}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"101 TO 500 KG"}
                title={"101 TO 500 KG"}
                name={"kg101to500"}
                type={"number"}
                value={upsRate.kg101to500}
                action={upsChangeHandler}
              />
              <InputBox
                placeholder={"501 TO 1000 KG"}
                title={"501 TO 1000 KG"}
                name={"kg501to1000"}
                type={"number"}
                value={upsRate.kg501to1000}
                action={upsChangeHandler}
              />
            </div>
          </>
        )}

        {tab.aramex && (
          <>
            <h1 className="text-xl font-medium">ARAMEX RATE</h1>

            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 pt-3 pb-3">
              <InputBox
                placeholder={"500 GM"}
                type={"number"}
                title={"500 GM"}
                name={"gm500"}
                value={aramexRate.gm500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"1000 GM"}
                type={"number"}
                title={"1000 GM"}
                name={"gm1000"}
                value={aramexRate.gm1000}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"1500 GM"}
                title={"1500 GM"}
                name={"gm1500"}
                type={"number"}
                value={aramexRate.gm1500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"2000 GM"}
                title={"2000 GM"}
                name={"gm2000"}
                type={"number"}
                value={aramexRate.gm2000}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"2500 GM"}
                title={"2500 GM"}
                name={"gm2500"}
                type={"number"}
                value={aramexRate.gm2500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"3000 GM"}
                title={"3000 GM"}
                name={"gm3000"}
                type={"number"}
                value={aramexRate.gm3000}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"3500 GM"}
                title={"3500 GM"}
                name={"gm3500"}
                type={"number"}
                value={aramexRate.gm3500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"4000 GM"}
                title={"4000 GM"}
                name={"gm4000"}
                type={"number"}
                value={aramexRate.gm4000}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"4500 GM"}
                title={"4500 GM"}
                name={"gm4500"}
                type={"number"}
                value={aramexRate.gm4500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"5000 GM"}
                title={"5000 GM"}
                name={"gm5000"}
                type={"number"}
                value={aramexRate.gm5000}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"5500 GM"}
                title={"5500 GM"}
                name={"gm5500"}
                type={"number"}
                value={aramexRate.gm5500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"6 TO 10 KG"}
                title={"6 TO 10 KG"}
                name={"kg6to10"}
                type={"number"}
                value={aramexRate.kg6to10}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"11 TO 15 KG"}
                title={"11 TO 15 KG"}
                name={"kg11to15"}
                type={"number"}
                value={aramexRate.kg11to15}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"16 TO 20 KG"}
                title={"16 TO 20 KG"}
                name={"kg16to20"}
                type={"number"}
                value={aramexRate.kg16to20}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"21 TO 25 KG"}
                title={"21 TO 25 KG"}
                name={"kg21to25"}
                type={"number"}
                value={aramexRate.kg21to25}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"25 TO 30 KG"}
                title={"25 TO 30 KG"}
                name={"kg26to30"}
                type={"number"}
                value={aramexRate.kg26to30}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"31 TO 40 KG"}
                title={"31 TO 40 KG"}
                name={"kg31to40"}
                type={"number"}
                value={aramexRate.kg31to40}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"41 TO 50 KG"}
                title={"41 TO 50 KG"}
                name={"kg41to50"}
                type={"number"}
                value={aramexRate.kg41to50}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"51 TO 80 KG"}
                title={"51 TO 80 KG"}
                name={"kg51to80"}
                type={"number"}
                value={aramexRate.kg51to80}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"81 TO 100 KG"}
                title={"81 TO 100 KG"}
                name={"kg81to100"}
                type={"number"}
                value={aramexRate.kg81to100}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"101 TO 500 KG"}
                title={"101 TO 500 KG"}
                name={"kg101to500"}
                type={"number"}
                value={aramexRate.kg101to500}
                action={aramexChangeHandler}
              />
              <InputBox
                placeholder={"501 TO 1000 KG"}
                title={"501 TO 1000 KG"}
                name={"kg501to1000"}
                type={"number"}
                value={aramexRate.kg501to1000}
                action={aramexChangeHandler}
              />
            </div>
          </>
        )}

        
<div className="w-full h-auto pt-2 pb-6 flex justify-end items-end">
                        <button className="bg-defult-button text-base rounded-md text-white py-2 px-10 text-center w-full sm:w-auto " onClick={submitHandler}>Submit Rate Chart</button>
  
                      </div>
      </div>
    </div>
  );
};

export default Single;
