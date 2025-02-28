"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRequestSend, OUR_BLOG_API } from "../ApiCall/ApiMethod";
import IsEnglish from "@/utils/IsEnglish";
import IsBangla from "@/utils/IsBangla";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter } from "../ui/alert-dialog";

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

  const [isZoomIn, setIsZoomIn] = useState(false);

  useEffect(() => {
    getRequestSend(OUR_BLOG_API).then((res) => {
      if (res.status == 200) {
        setAllBlog(res.data);
      }
    });
  }, []);

  return (
    <div className=" container h-auto py-10 px-4 sm:px-8 md:px-12 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-2 items-center align-middle justify-center m-auto">
      
      <Card
          
          className="w-full flex-col gap-2 shadow-4xl cursor-pointer flex"
        >
          <Image
            className="rounded-t-xl w-full h-[200px]"
            src={'/finex ltd ramadan iftari chart.jpg'}
            alt={"finex ltd ramadan iftari chart"}
            width={200}
            height={200}
          />
          <div className=" w-full h-auto flex flex-col gap-2 p-2 text-left">
            <IsEnglish className="">
              <h1 className=" text-lg font-semibold text-gray-800 leading-4">
                {"finex ltd ramadan iftari chart"}
              </h1>
            </IsEnglish>
            <IsBangla className="">
              <h1 className=" text-2xl bfont text-gray-800 leading-4">
                {"-ফিনেক্স- লিমিটেড রমজান ইফতার চার্ট"}
              </h1>
            </IsBangla>

            <IsEnglish className="">
              <p className=" text-sm font-light line-clamp-4 text-gray-600 leading-4">
                {" "}
              </p>
            </IsEnglish>

            <IsBangla className="">
              <p className=" text-lg font-light bfont line-clamp-4 text-gray-600 leading-4">
                {" "}
              </p>
            </IsBangla>

              <Button className="bg-defult hover:bg-defult/80 w-full" onClick={() => setIsZoomIn(true)}>
                Zoom In
              </Button>
          </div>
        </Card>



        <AlertDialog open={isZoomIn} onOpenChange={setIsZoomIn}>
        <AlertDialogContent className="bg-transparent bg-none border-none p-3 max-w-full h-[calc(100%-300px)] sm:h-full overflow-auto">
          <div className="bg-white p-4 border border-white rounded-lg">
            <Image
              className="rounded-t-xl w-full h-[calc(100%-110px)]"
              src={'/finex ltd ramadan iftari chart.jpg'}
              alt={"finex ltd ramadan iftari chart"}
              width={1000}
              height={1000}
            />
           
             
          

            <AlertDialogFooter className="mt-5 gap-3">
            <a
          href="/finex ltd ramadan iftari chart.jpg"
          download="finex_ltd_ramadan_iftari_chart.jpg"
        > <Button className="bg-defult hover:bg-defult/80 w-full">
          Download
          </Button>
        </a>
              <AlertDialogAction className="bg-white border border-defult text-defult hover:text-white hover:bg-defult/90">
                Cencel
              </AlertDialogAction>
             
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      
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
