import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
const teamMember = [
  {
    id: 1,
    name: "MD. ABDULLA",
    title: "CO-FOUNDER & MANAGING DIRECTOR",
    image: "/mdabdullah.jpg",
    phone: "+8801645034000",
    email: "mdabdulla@finex.ltd",
  },
  {
    id: 2,
    name: "FORHADUL ISLAM",
    title: "FOUNDER & HEAD OF OPERATION",
    image: "/forhad.png",
    phone: "+8801577057714",
    email: "forhad@finex.ltd",
  },
  {
    id: 3,
    name: "MD. TAUHIDUL ISLAM",
    title: "CO-FOUNDER & SALES MANAGER",
    image: "/towhid.jpg",
    phone: "+8801645034000",
    email: "tauhid@finex.ltd",
  },
  {
    id: 4,
    name: "MD. NAZMUL HOSSAIN",
    title: "CO-FOUNDER & OPERATION SUPPERVISOR",
    image: "/Nazmul.png",
    phone: "+8801645034000",
    email: "nazmul@finex.ltd",
  },
];
const OurTeamMemberBodySection = () => {
  return (
    <div className="container sm:p-2 p-4 py-14 m-auto h-auto">
      {" "}
      {/* Responsive container with padding and auto height */}
      {/* English Section Title */}
      <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-5 mt-10">
          TEAM MEMBER
        </h1>
      </IsEnglish>
      {/* Bangla Section Title */}
      <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl bfont font-bold text-defult px-5 mb-5 mt-10">
          আমাদের দলের সদস্য
        </h1>
      </IsBangla>
      {/* Slider Component */}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3 align-middle justify-center m-auto items-center p-12">
        {teamMember.map((item, index) => (
          <div className="w-full h-full" key={index}>
            <Card className=" w-full h-full  shadow-3xl p-1">
              <CardContent className="w-full flex flex-col aspect-square py-2 items-center p-2 gap-1  bg-white rounded-md cursor-pointer">
                {/* Display the team member's image */}
                <Image
                  width={190}
                  height={250}
                  src={item?.image}
                  alt={item.name}
                  className="sm:w-[190px] w-[140px] sm:h-[250px] h-[160px] object-cover rounded-md"
                />

                {/* Container for the team member's name and title */}
                <div className="w-full  p-1 px-0 text-center">
                  {/* Display the team member's name and title */}
                  <h1 className="text-base font-bold text-gray-800">
                    {item.name}
                  </h1>
                  <span className="text-[12px] font-medium text-gray-600">
                    ({item.title})
                  </span>
                </div>

                <div className=" flex gap-1">
                  <IsEnglish className="">
                    <Link
                      href={`https://api.whatsapp.com/send?phone=${item.phone}&text=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`}
                      target="_blank"
                    >
                      <Button className="bg-white text-gray-800 p-4 hover:bg-gray-100 rounded-full text-[12px] pl-[4px] pr-2 flex justify-center align-middle items-center gap-1">
                        <SiWhatsapp className="w-7 h-7 p-[5px] bg-green-600 text-white rounded-full" />
                        Whatsapp Message
                      </Button>
                    </Link>
                  </IsEnglish>
                  <IsBangla className="">
                    <Link
                      href={`https://api.whatsapp.com/send?phone=${item.phone}&text=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`}
                      target="_blank"
                    >
                      <Button className="bg-white text-gray-800 p-4 hover:bg-gray-100 rounded-full text-[20px] pl-[4px] pr-2 flex justify-center align-middle items-center gap-1 bfont">
                        <SiWhatsapp className="w-7 h-7 p-[5px] bg-green-600 text-white rounded-full" />
                        হোয়াটস্যাপে মেসেজ
                      </Button>
                    </Link>
                  </IsBangla>
                  <Link
                    href={`mailto:${item.email}?subject=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`}
                    target="_blank"
                  >
                    <Button className="bg-white text-gray-800 p-4 hover:bg-gray-100 rounded-full px-1 flex justify-center align-middle items-center gap-1">
                      <BiMailSend className="w-7 h-7 p-[5px] bg-red-600 text-white rounded-full" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamMemberBodySection;
