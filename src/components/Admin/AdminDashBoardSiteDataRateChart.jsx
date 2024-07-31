import { COUNTRY_API, getRequestSend } from "@/data/ApiMethod";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminDashBoardSiteDataRateChart = () => {

    const [allCountry,setAllCountry] = useState([])
    const [selectedCountry,setSelectedCountry] = useState({from:"",to:""})

    const router = useRouter()


    const rateChartCreateHandler=()=>{
        if(selectedCountry.from && selectedCountry.to){
            router.push(`/admin/site-data/${selectedCountry.from}/${selectedCountry.to}`)
        }else{
            toast.error("Plz! selecte Ship Country")
        }
    }


useEffect(()=>{
    getRequestSend(COUNTRY_API).then(res=>{
        if(res.status==200){
            setAllCountry(res.data)
        }
    })


},[allCountry])
  return (
    <div className="w-full h-auto py-2" id="createratechart">
      <div className=" w-full h-auto p-2 pb-8 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
            Rate Chart
          </h1>
        </div>

        {/* rate chart list  */}
        <div></div>

        {/* ratechart create */}
        <div className="w-full h-auto py-1 pt-5 mb-2">
          <h1 className="font-semibold text-base justify-center text-center align-middle items-center">
            Create Chart
          </h1>
        </div>

        <div className="w-full h-auto flex-col sm:flex-row  flex gap-3 items-end align-middle justify-center">
          <div className="w-full sm:flex-row flex-col flex gap-2">
            <SelecteSearchBox
              titleStyle={"text-sm"}
              boxStyle={"px-3 py-1 text-sm"}
              datas={allCountry?.filter((item) =>
                item?.name?.toLowerCase().includes("bangladesh")
              )}
              title={"Ship From"}
              setValue={(e) => {setSelectedCountry({...selectedCountry,from:e._id})}}
            />

            <SelecteSearchBox
              titleStyle={"text-sm"}
              boxStyle={"px-3 py-1 text-sm"}
              datas={allCountry?.filter((item) =>
                !item?.name?.toLowerCase().includes("bangladesh")
              )}
              title={"Ship To"}
              setValue={(e) => {setSelectedCountry({...selectedCountry,to:e._id})}}
            />
          </div>
          <button onClick={rateChartCreateHandler}
              className="w-full sm:w-[220px] bg-defult-button text-base rounded-md text-white py-1 px-2"
              type="submit"
            >
              Create
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardSiteDataRateChart;
