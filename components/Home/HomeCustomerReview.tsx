"use client";

import CLIENTSVG from "@/components/assets/client.svg";
import COMPLITEDSVG from "@/components/assets/complited.svg";
import EXPRINCESVG from "@/components/assets/exprince.svg";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { FEEDBACK_API, getRequestSend } from "../ApiCall/ApiMethod";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
interface Feedback {
  _id: number;
  name: string;
  profile: string;
  rating: number;
  content: string;
  isApproved: boolean;
}




const HomeCustomerReview = () => {
  
  const [allFeedBack, setFeedBack] = useState<Feedback[]>([]);

  useEffect(() => {
    getRequestSend(FEEDBACK_API).then((res) => {
      if (res.status == 200) {
        setFeedBack(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto bg-white">
      <div className=" container m-auto px-2 sm:px-2 py-6">
        <IsEnglish className="w-full h-auto flex justify-center align-middle items-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
            Transparency You Can Trust
          </h1>
        </IsEnglish>
        <IsBangla className="w-full h-auto flex justify-center align-middle items-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
            স্বচ্ছতা আপনি বিশ্বাস করতে পারেন
          </h1>
        </IsBangla>

        <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 p-2 py-10">
          <div className="w-full h-auto p-2 flex justify-start items-center align-middle gap-4 group">
            <div className="bg-blue-100 w-[130px] h-[130px] flex justify-center align-middle items-center rounded-lg group-hover:bg-blue-200 transition-all duration-200">
              <Image width={100} height={100} src={CLIENTSVG} alt="CLIENTSVG" />
            </div>
            <div>
              <h2 className=" text-2xl font-semibold text-gray-700 group-hover:text-defult transition-all duration-300">
                600+
              </h2>
              <h3 className="text-lg text-gray-600 group-hover:text-defult/80 transition-all duration-200">
                Happy Clients
              </h3>
            </div>
          </div>

          <div className="w-full h-auto p-2 flex justify-start items-center align-middle gap-4 group">
            <div className="bg-blue-100 w-[130px] h-[130px] flex justify-center align-middle items-center rounded-lg group-hover:bg-blue-200 transition-all duration-200">
              <Image
                width={100}
                height={100}
                src={EXPRINCESVG}
                alt="CLIENTSVG"
              />
            </div>
            <div>
              <h2 className=" text-2xl font-semibold text-gray-700 group-hover:text-defult transition-all duration-300">
                3+
              </h2>
              <h3 className="text-lg text-gray-600 group-hover:text-defult/80 transition-all duration-200">
                Years of Experience
              </h3>
            </div>
          </div>

          <div className="w-full h-auto p-2 flex justify-start items-center align-middle gap-4 group">
            <div className="bg-blue-100 w-[130px] h-[130px] flex justify-center align-middle items-center rounded-lg group-hover:bg-blue-200 transition-all duration-200">
              <Image
                width={100}
                height={100}
                src={COMPLITEDSVG}
                alt="CLIENTSVG"
              />
            </div>
            <div>
              <h2 className=" text-2xl font-semibold text-gray-700 group-hover:text-defult transition-all duration-300">
                1000+
              </h2>
              <h3 className="text-lg text-gray-600 group-hover:text-defult/80 transition-all duration-200">
                Shipments Delivered
              </h3>
            </div>
          </div>
        </div>

        <IsEnglish className="w-full h-auto flex justify-center align-middle items-center flex-col gap-8 py-5">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
            Hear what our customers have to say about us!
          </h1>

          <p className=" text-base font-light text-gray-800 px-8 sm:px-24 md:px-36 lg:px-44 text-center">
            Faster International Express-(Finex) Service’s clients and their
            results are the best proof that our methodologies work. We’ve also
            received numerous awards and praise from the media and our peers.
          </p>
        </IsEnglish>

        <IsBangla className="w-full h-auto flex justify-center align-middle items-center flex-col gap-8 py-5">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
            আমাদের গ্রাহকদের আমাদের সম্পর্কে কি বলে তা শুনুন!
          </h1>

          <p className=" text-[22px] font-light text-gray-800 px-8 sm:px-24 md:px-36 lg:px-44 text-center bfont leading-6">
            ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস-(ফাইনেক্স) পরিষেবার ক্লায়েন্ট এবং
            তাদের ফলাফল হল আমাদের পদ্ধতিগুলি কাজ করার সেরা প্রমাণ। আমরা মিডিয়া
            এবং আমাদের সহকর্মীদের কাছ থেকে অসংখ্য পুরস্কার এবং প্রশংসা পেয়েছি।
          </p>
        </IsBangla>

        <div className="w-full h-auto flex justify-center align-middle items-center p-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {allFeedBack
                ?.filter((sFFeedBack) => sFFeedBack?.isApproved == true)
                .map((sFeedBack) => (
                  <CarouselItem
                    key={sFeedBack._id}
                    className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full"
                  >
                    <div className="p-2 h-full">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-4 gap-5 ">
                          <div className="w-[90px] h-[90px] border-[2px] border-defult rounded-full overflow-hidden flex justify-center align-middle items-center">
                            <Image
                              width={84}
                              height={84}
                              src={
                                sFeedBack?.profile
                                  ? sFeedBack?.profile
                                  : "/profile.png"
                              }
                              alt={sFeedBack.name}
                            />
                          </div>

                          <h2 className="text-lg font-medium">
                            {sFeedBack.name}
                          </h2>
                          <div className="w-full h-auto flex justify-center align-middle items-center gap-1 -mt-6 text-orange-400">
                            <ReactStars
                              count={5} // Number of stars
                              value={sFeedBack.rating} // Current rating
                              size={32} // Size of stars
                              half={false} // Allow half stars or not
                              color2={"#fa913c"} // Active star color
                              color1={"#d4d4d4"} // Inactive star color
                            />
                          </div>

                          <p className="line-clamp-4 text-center text-sm">
                            {sFeedBack.content}
                          </p>

                          <Button className=" px-5 rounded-full py-3 bg-defult hover:bg-defult/80">
                            Read More
                          </Button>
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
    </div>
  );
};

export default HomeCustomerReview;
