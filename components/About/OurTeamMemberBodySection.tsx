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
const teamMember = [
  {
    id: 1,
    name: "MD. ABDULLA",
    title: "CO-FOUNDER & MANAGING DIRECTOR",
    image: "/mdabdullah.jpg",
  },
  {
    id: 2,
    name: "FORHADUL ISLAM",
    title: "FOUNDER & HEAD OF OPARATION",
    image: "/forhad.png",
  },
  {
    id: 3,
    name: "MD. TAUHIDUL ISLAM",
    title: "CO-FOUNDER & SALES MANAGER",
    image: "/towhid.jpg",
  },
  {
    id: 4,
    name: "MD. NAZMUL HOSSAIN",
    title: "CO-FOUNDER & OPARATION SUPPERVISOR",
    image: "/Nazmul.png",
  },
];
const OurTeamMemberBodySection = () => {
  return (
    <div className="container sm:p-2 p-4 py-14 m-auto h-auto">
      {" "}
      {/* Responsive container with padding and auto height */}
      {/* English Section Title */}
      <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-10 mt-4">
          TEAM MEMBER
        </h1>
      </IsEnglish>
      {/* Bangla Section Title */}
      <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl bfont font-bold text-defult px-5 mb-10 mt-4">
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
                <div className="p-3">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center  gap-3 shadow-3xl h-auto p-4 bg-white rounded-md cursor-pointer">
                      {/* Display the team member's image */}
                      <Image
                        width={200}
                        height={250}
                        src={item?.image}
                        alt={item.name}
                        className="w-[200px] h-[250px]"
                      />

                      {/* Container for the team member's name and title */}
                      <div className="w-full h-auto p-1 px-0">
                        {/* Display the team member's name and title */}
                        <h1 className="text-base font-bold text-gray-800">
                          {item.name}
                          <span className="text-sm font-medium text-gray-600">
                            ({item.title})
                          </span>
                        </h1>
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
