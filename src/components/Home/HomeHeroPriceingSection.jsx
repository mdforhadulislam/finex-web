import { COUNTRY_API, getRequestSend, QUOT_PRICE_API } from "@/data/ApiMethod";
import { parcelWeight } from "@/data/parcel";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import RadioBox from "@/utils/RadioBox";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useContext, useEffect, useState } from "react";
import HomeHeroPriceingPopup from "./HomeHeroPriceingPopup";
import { toast } from "react-toastify";
import { ModalContext } from "@/context/ModalContext";

const HomeHeroPriceingSection = () => {
  const [isExport, setIsExport] = useState(true);
  const [isImport, setIsImport] = useState(false);

  const [allCountry, setAllCountry] = useState([]);
  const [searchPrice, setSearchPrice] = useState({});
  const [seletedFromId, setSeletedFromId] = useState("");
  const [seletedToId, setSeletedToId] = useState("");
  const [seletedWeightId, setSeletedWeightId] = useState({});

  const modal = useContext(ModalContext);

  const submitHendler = (e) => {
    e.preventDefault();
    if (seletedFromId && seletedToId && seletedWeightId) {
      getRequestSend(
        QUOT_PRICE_API(seletedFromId, seletedToId, seletedWeightId?.value)
      ).then((res) => {
        if (res.status == 200) {
          toast.success(res.message);
          setSearchPrice({
            message: res.message,
            price:[{dhl: res.data?.dhl},
              {fedex: res.data?.fedex},
              {ups: res.data?.ups},
              {aramex: res.data?.aramex}]
          });
          modal.open();
        } else {
          toast.error("Price List Not Found");
        }
      });
    } else {
      toast.error(
        "Provied Shiping From Country, Shiping To Country And Parcel Weight"
      );
    }
  };

  useEffect(() => {
    getRequestSend(COUNTRY_API).then((res) => {
      if (res.status == 200) {
        setAllCountry(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto p-5 bg-white rounded-md shadow-md">
      <form action="">
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex justify-start gap-3">
            <IsEnglish>
              <RadioBox
                name={"exportAndInput"}
                title={"Export"}
                id={"export"}
                color={"white"}
                value={isExport}
                action={(e) => {
                  setIsExport(true);
                  setIsImport(false);
                }}
              />
            </IsEnglish>
            <IsEnglish>
              <RadioBox
                name={"exportAndInput"}
                title={"Import"}
                id={"import"}
                color={"white"}
                value={isImport}
                action={(e) => {
                  setIsExport(false);
                  setIsImport(true);
                }}
              />
            </IsEnglish>
            <IsBangla>
              <RadioBox
                name={"exportAndInput"}
                title={"এক্সপোর্ট"}
                id={"exportBn"}
                color={"white"}
                value={isExport}
                action={(e) => {
                  setIsExport(true);
                  setIsImport(false);
                }}
              />
            </IsBangla>
            <IsBangla>
              <RadioBox
                name={"exportAndInput"}
                title={"ইম্পোরট"}
                id={"importBn"}
                color={"white"}
                value={isImport}
                action={(e) => {
                  setIsExport(false);
                  setIsImport(true);
                }}
              />
            </IsBangla>
          </div>

          <div className="w-full h-auto flex items-center gap-4 sm:flex-row flex-col">
            {isExport && (
              <>
                <IsEnglish className="flex flex-col md:w-[240px] w-full">
                  <SelecteSearchBox
                    title={"Shift From"}
                    datas={allCountry?.filter((item) =>
                      item?.name?.toLowerCase().includes("bangladesh")
                    )}
                    setValue={(e) => {
                      setSeletedFromId(e?._id);
                    }}
                  />
                </IsEnglish>
                <IsBangla className="flex flex-col md:w-[240px] w-full">
                  <SelecteSearchBox
                    title={"শিপিং ফ্রম"}
                    datas={allCountry?.filter((item) =>
                      item?.name?.toLowerCase().includes("bangladesh")
                    )}
                    setValue={(e) => {
                      setSeletedFromId(e?._id);
                    }}
                  />
                </IsBangla>

                <IsEnglish className="flex flex-col md:w-[240px]  w-full">
                  <SelecteSearchBox
                    title={"Ship To"}
                    datas={allCountry?.filter(
                      (item) =>
                        !item?.name?.toLowerCase().includes("bangladesh")
                    )}
                    setValue={(e) => {
                      setSeletedToId(e?._id);
                    }}
                  />
                </IsEnglish>
                <IsBangla className="flex flex-col md:w-[240px]  w-full">
                  <SelecteSearchBox
                    title={"শিপিং টু"}
                    datas={allCountry?.filter(
                      (item) =>
                        !item?.name?.toLowerCase().includes("bangladesh")
                    )}
                    setValue={(e) => {
                      setSeletedToId(e?._id);
                    }}
                  />
                </IsBangla>
              </>
            )}

            {isImport && (
              <>
                <IsEnglish className="flex flex-col md:w-[240px] w-full">
                  <SelecteSearchBox
                    title={"Import From"}
                    datas={[{ id: 1, name: "hello" }]}
                    setValue={() => {}}
                  />
                </IsEnglish>
                <IsBangla className="flex flex-col md:w-[240px] w-full">
                  <SelecteSearchBox
                    title={"ইম্পোরট ফ্রম"}
                    datas={[{ id: 1, name: "hello" }]}
                    setValue={() => {}}
                  />
                </IsBangla>
                <IsEnglish className="flex flex-col md:w-[240px]  w-full">
                  <SelecteSearchBox
                    title={"Import To"}
                    datas={[{ id: 1, name: "hello" }]}
                    setValue={() => {}}
                  />
                </IsEnglish>
                <IsBangla className="flex flex-col md:w-[240px]  w-full">
                  <SelecteSearchBox
                    title={"ইম্পোরট টু"}
                    datas={[{ id: 1, name: "hello" }]}
                    setValue={() => {}}
                  />
                </IsBangla>
              </>
            )}

            <IsEnglish className="flex flex-col md:w-[240px]  w-full">
              <SelecteSearchBox
                title={"Parcel Weight"}
                datas={parcelWeight}
                setValue={(e) => setSeletedWeightId(e)}
              />
            </IsEnglish>

            <IsBangla className="flex flex-col md:w-[240px]  w-full">
              <SelecteSearchBox
                title={"পার্সেল ওজন"}
                datas={parcelWeight}
                setValue={(e) => setSeletedWeightId(e)}
              />
            </IsBangla>
          </div>
        </div>

        <IsEnglish className="w-full h-auto flex justify-end items-center align-middle pt-5">
          <button
            className={`px-10 py-2 bg-defult-button text-white rounded-md md:w-auto w-full`}
            onClick={submitHendler}
          >
            Get Price
          </button>
        </IsEnglish>
        <IsBangla className="w-full h-auto flex justify-end items-center align-middle pt-5">
          <button
            className={`px-10 py-2 bg-defult-button text-white rounded-md md:w-auto w-full bfont text-2xl `}
            onClick={submitHendler}
          >
            টাকা পরিমাণ দেখুন
          </button>
        </IsBangla>
      </form>

      <HomeHeroPriceingPopup
        searchPrice={searchPrice}
        seletedWeightId={seletedWeightId}
        seletedToId={seletedToId}
      />
    </div>
  );
};

export default HomeHeroPriceingSection;
