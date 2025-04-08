import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiWhatsapp } from "react-icons/si";
import { BiMailSend } from "react-icons/bi";
const teamMember = [
  {
    id: 1,
    name: "MD. ABDULLA",
    title: "CO-FOUNDER & MANAGING DIRECTOR",
    image: "/mdabdullah.jpg",phone: "+8801645034000", email:"mdabdulla@finex.ltd"
  },
  {
    id: 2,
    name: "FORHADUL ISLAM",
    title: "FOUNDER & HEAD OF OPERATION",
    image: "/forhad.png",phone: "+8801577057714", email:"forhad@finex.ltd"
  },
  {
    id: 3,
    name: "MD. TAUHIDUL ISLAM",
    title: "CO-FOUNDER & SALES MANAGER",
    image: "/towhid.jpg",phone: "+8801645034000", email:"tauhid@finex.ltd"
  },
  {
    id: 4,
    name: "MD. NAZMUL HOSSAIN",
    title: "CO-FOUNDER & OPERATION SUPPERVISOR",
    image: "/Nazmul.png",phone: "+8801645034000", email:"nazmul@finex.ltd"
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
      <div className="w-full h-auto flex justify-center align-middle items-center p-12">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {teamMember.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center  gap-1 shadow-3xl h-auto p-2 bg-white rounded-md cursor-pointer">
                      {/* Display the team member's image */}
                      <Image
                        width={200}
                        height={250}
                        src={item?.image}
                        alt={item.name}
                        className="w-[200px] h-[250px]"
                      />

                      {/* Container for the team member's name and title */}
                      <div className="w-full h-auto p-1 px-0 text-center">
                        {/* Display the team member's name and title */}
                        <h1 className="text-base font-bold text-gray-800">
                          {item.name}
                          
                        </h1>
                        <span className="text-sm font-medium text-gray-600">
                            ({item.title})
                          </span>
                      </div>

                      <div className=" flex gap-1 pb-2">
                      <IsEnglish className="">
                  <Link
                    href={
                      `https://api.whatsapp.com/send?phone=${item.phone}&text=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`
                    }
                    target="_blank"
                  >
                    <Button className="bg-white text-gray-800 p-4 hover:bg-gray-100 rounded-full text-[12px] pl-[4px] pr-2 flex justify-center align-middle items-center gap-1">
                      <SiWhatsapp className="w-7 h-7 p-[5px] bg-green-600 text-white rounded-full" />
                      Send Whatsapp Message
                    </Button>
                  </Link>
                </IsEnglish>
                <IsBangla className="">
                  <Link
                    href={
                      `https://api.whatsapp.com/send?phone=${item.phone}&text=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`
                    }
                    target="_blank"
                  >
                    <Button className="bg-white text-gray-800 p-4 hover:bg-gray-100 rounded-full text-[20px] pl-[4px] pr-2 flex justify-center align-middle items-center gap-1 bfont">
                      <SiWhatsapp className="w-7 h-7 p-[5px] bg-green-600 text-white rounded-full" />
                      হোয়াটস্যাপে মেসেজ পাঠান
                    </Button>
                  </Link>
                </IsBangla>
                <Link
                    href={
                      `mailto:${item.email}?subject=Hello%20${item.name}!%20Can%20I%20get%20more%20information%20about%20your%20service?`
                    }
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeamMemberBodySection;
