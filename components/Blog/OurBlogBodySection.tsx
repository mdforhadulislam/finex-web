"use client";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRequestSend, OUR_BLOG_API } from "../ApiCall/ApiMethod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Blog {
  _id: string;
  title: string;
  titleBn?: string;
  blog: {
    image: string;
    discraption: string;
    discraptionBn?: string;
  }[];
}

const OurBlogBodySection = () => {
  const [allBlog, setAllBlog] = useState<Blog[]>([]);

  useEffect(() => {
    getRequestSend(OUR_BLOG_API).then((res) => {
      if (res.status == 200) {
        setAllBlog(res.data);
      }
    });
  }, []);

  return (
    <div className=" container h-auto py-15 px-4 sm:px-8 md:px-12 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-2 items-center align-middle justify-center m-auto">
      {allBlog.map((sBlog) => (
        <Card
          key={sBlog._id}
          className="w-full flex-col gap-2 shadow-4xl cursor-pointer flex"
        >
          <Image
            className="rounded-t-xl w-full h-[200px]"
            src={sBlog.blog[0].image}
            alt={sBlog.title}
            width={200}
            height={200}
          />
          <div className=" w-full h-auto flex flex-col gap-2 p-2 text-left">
            <IsEnglish className="">
              <h1 className=" text-lg font-semibold text-gray-800 leading-4">
                {sBlog.title}
              </h1>
            </IsEnglish>
            <IsBangla className="">
              <h1 className=" text-2xl bfont text-gray-800 leading-4">
                {sBlog.titleBn}
              </h1>
            </IsBangla>

            <IsEnglish className="">
              <p className=" text-sm font-light line-clamp-4 text-gray-600 leading-4">
                {" "}
                {sBlog?.blog[0].discraption}
              </p>
            </IsEnglish>

            <IsBangla className="">
              <p className=" text-lg font-light bfont line-clamp-4 text-gray-600 leading-4">
                {" "}
                {sBlog?.blog[0].discraptionBn}
              </p>
            </IsBangla>

            <Link href={`/blog/${sBlog._id}`} className="w-full h-auto block">
              <Button className="bg-defult hover:bg-defult/80 w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OurBlogBodySection;
