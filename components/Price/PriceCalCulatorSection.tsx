"use client";
import { useLoad } from "@/context/LoadContext";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import SelecteSearchBox from "@/utils/SearchSelectBox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  COUNTRY_API,
  GET_SHIPPING_PRICE_QUOTE,
  getRequestSend,
} from "../ApiCall/ApiMethod";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface Country {
  name: string;
  _id: string;
}

const countryList = [
  {
    "region": "EUROPE (D)",
    "countries": [
      "UNITED KINGDOM", "ANDORRA", "AUSTRIA", "BELGIUM", "GERMANY", "ITALY",
      "FRANCE", "LIECHTENSTEIN", "LUXEMBOURG", "MONACO", "NETHERLANDS",
      "SPAIN", "VATICAN CITY"
    ]
  },
  {
    "region": "EUROPE (E)",
    "countries": [
      "CYPRUS", "CZECH REPUBLIC", "DENMARK", "FINLAND", "IRELAND", "GREECE",
      "HUNGARY", "NORWAY", "POLAND", "PORTUGAL", "SWEDEN", "SWITZERLAND"
    ]
  },
  {
    "region": "EUROPE (J)",
    "countries": [
      "CROATIA", "ESTONIA", "LATVIA", "LITHUANIA", "ROMANIA", "SLOVENIA",
      "BULGARIA", "SLOVAKIA", "SERBIA", "MONTENEGRO", "MACEDONIA"
    ]
  },
  {
    "region": "MIDDLE EAST (B)",
    "countries": [
      "BAHRAIN", "IRAQ REPUBLIC", "KUWAIT", "LEBANON", "OMAN", "QATAR",
      "SAUDI ARABIA", "UNITED ARAB EMIRATES", "YEMEN"
    ]
  },
  {
    "region": "ASIA (B)",
    "countries": [
      "INDIA", "PAKISTAN", "SRI LANKA", "NEPAL", "BHUTAN", "MALDIVES"
    ]
  },
  {
    "region": "ASIA (F)",
    "countries": [
      "CAMBODIA", "CHINA", "INDONESIA", "LAOS", "MACAU", "MALAYSIA",
      "MYANMAR", "PHILIPPINES", "SOUTH KOREA", "TAIWAN", "THAILAND", "VIETNAM"
    ]
  },
  {
    "region": "AFRICA (J)",
    "countries": [
      "ALGERIA", "ANGOLA", "SOUTH AFRICA", "BENIN", "BURKINA FASO", "CAMEROON", 
      "CAPE VERDE", "CENTRAL AFRICAN REPUBLIC", "DEMOCRATIC REPUBLIC OF CONGO",
      "EQUATORIAL GUINEA", "ERITREA", "ETHIOPIA", "GABON", "GAMBIA", "GHANA",
      "GUINEA", "KENYA", "LIBERIA", "LIBYA", "MADAGASCAR", "MALAWI", "MALI",
      "MAURITANIA", "MOROCCO", "MOZAMBIQUE", "NIGERIA", "NIGER", "RWANDA",
      "SEYCHELLES", "SIERRA LEONE", "SOMALIA", "SUDAN", "TANZANIA", "TOGO",
      "TUNISIA", "UGANDA", "ZAIRE", "ZAMBIA", "ZIMBABWE"
    ]
  }
]

const PriceCalCulatorSection = () => {
  const [allCountryList, setAllCountryList] = useState<Country[] | null>([]);

  const [selectedFromCountry, setSelectedFromCountry] = useState<string>("");
  const [selectedToCountry, setSelectedToCountry] = useState<string>("");

  const [searchCountryList, setSearchCountryList] = useState<{ region: string; countries: string[] }[] >(
    []
  );
  const [inputSearchCountry, setInputSearchCountry] = useState<string | null>("");

  

  const router = useRouter();
  const load = useLoad();

  useEffect(() => {
    getRequestSend(COUNTRY_API).then((res) => {
      if (res.status == 200) {
        setAllCountryList(res.data);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full h-auto px-4 pt-14 m-auto pb-24">
          <div className="w-full h-auto pb-16">
          <IsEnglish className="w-full h-auto flex justify-center align-middle items-center pb-8">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
              IMPORTANT NOTICE
            </h1>
          </IsEnglish>
          <IsBangla className="w-full h-auto flex justify-center align-middle items-center pb-6">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
              গুরুত্বপূর্ণ বিজ্ঞপ্তি
            </h1>
          </IsBangla>

          <div className="w-full h-auto px-5 py-8 pt-5 border-defult rounded-lg border shadow-3xl ">
            {/* <IsEnglish className="">
              <h2 className="text-lg text-defult font-bold text-left">
                Country Zone list:
              </h2>
            </IsEnglish>
            <IsBangla className="">
              <h2 className="text-2xl text-defult font-bold text-left bfont">
                দেশের অঞ্চল তালিকা:
              </h2>
            </IsBangla> */}

            <Table className="w-full h-auto">
              <TableHeader>

                <TableRow className="border-b">
                  <TableHead colSpan={2} className="p-0 px-0 py-2 pt-0 relative">
                    <form className="w-full h-auto relative" onSubmit={(e)=>{
                      e.preventDefault();
                        if (inputSearchCountry) {
                          const filteredCountries = countryList?.filter((item) =>
                            item?.countries?.some(country =>
                              country.toLowerCase().includes(inputSearchCountry.toLowerCase())
                            )
                          );
                          setSearchCountryList(filteredCountries ?? null);
                        } else {
                          setSearchCountryList(countryList);
                        }
                      }}> 
                      <Input className="w-full h-auto py-2" onChange={(e)=>{
                      setInputSearchCountry(e.target.value);
                    }} />
                    
                      <Button className="bg-defult p-[1px] px-2 absolute top-[1px] right-[1px] hover:bg-defult/85">
                        <Search className="" />
                      </Button>
                    </form>
                  
                  </TableHead>
                </TableRow>

                <TableRow className="border-b">
                  <TableHead className="text-center w-36 border text-defult  font-bold">ZONE NAME</TableHead>
                  <TableHead className=" text-center border text-defult  font-bold">COUNTRY NAME</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className={`h-auto p-2`}>

                {( searchCountryList?.length == 0 ? countryList : searchCountryList ).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center w-36 border-b border-r text-defult font-bold">
                      {item.region}
                    </TableCell>
                    <TableCell className="border-b text-left">
                      {item.countries.join(", ")}
                    </TableCell>
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </div>
        </div>



        <IsEnglish className="w-full h-auto flex justify-center align-middle items-center pb-8">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
            PRICE CALCULATOR
          </h1>
        </IsEnglish>
        <IsBangla className="w-full h-auto flex justify-center align-middle items-center pb-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
            প্রাইস ক্যালকুলেটর
          </h1>
        </IsBangla>

        <div className="w-full h-auto px-5 py-8 pt-5 border-defult rounded-lg border shadow-3xl ">
          <div className="w-full flex sm:flex-row flex-col">
            <div className="w-full h-auto p-2">
              <SelecteSearchBox
                title="Ship From"
                // @ts-expect-error: Filtering out Bangladesh from the country list
                datas={allCountryList?.filter((item) =>
                  item?.name?.toLowerCase().includes("bangladesh")
                )}
                setValue={(e) => setSelectedFromCountry((e as Country)?._id)}
              />
            </div>
            <div className="w-full h-auto p-2">
              <SelecteSearchBox
                title="Ship To"
                // @ts-expect-error: Filtering out Bangladesh from the country list
                datas={allCountryList?.filter(
                  (item) => !item?.name?.toLowerCase().includes("bangladesh")
                )}
                setValue={(e) => setSelectedToCountry((e as Country)?._id)}
              />
            </div>
          </div>

          <div className="w-full h-auto flex justify-end p-3 pt-5">
            <Button
              className="bg-defult hover:bg-defult/85"
              onClick={() => {
                load.loadingStart();
                if (selectedToCountry && selectedFromCountry) {
                  getRequestSend(
                    GET_SHIPPING_PRICE_QUOTE(
                      selectedFromCountry,
                      selectedToCountry
                    )
                  ).then((res) => {
                    if (res.status == 200) {
                      toast.success(res.message);
                      router.push(
                        `/price/${res.data.from._id}/${res.data.to._id}`
                      );
                    } else {
                      load.loadingEnd();
                      toast.error(res.message);
                    }
                  });
                } else {
                  load.loadingEnd();
                  toast.error("Select Country Name");
                }
              }}
            >
              GET PRICE LIST
            </Button>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default PriceCalCulatorSection;
