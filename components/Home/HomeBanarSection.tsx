"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const slider_image = [
  { id: 135, src: "/slider-1.jpg" },
  { id: 2345, src: "/banar2.png" },
  { id: 123, src: "/slider-1.jpg" },
  { id: 234, src: "/banar2.png" },
  { id: 156, src: "/slider-1.jpg" },
  { id: 278, src: "/banar2.png" },
  
  { id: 1535, src: "/slider-1.jpg" },
  { id: 267, src: "/banar2.png" },
  { id: 165, src: "/slider-1.jpg" },
  { id: 243, src: "/banar2.png" },
  { id: 121, src: "/slider-1.jpg" },
  { id: 23456, src: "/banar2.png" },




];

const HomeBanarSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full h-auto py-16 pb-0 bg-white px-5">
      <div className="container h-auto m-auto p-10">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {slider_image.map((item) => (
              <CarouselItem key={item.id}>
                <div
                  className="w-full h-[230px] md:h-[480px] p-2 bg-cover rounded-lg bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${item.src})` }}
                ></div>
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

export default HomeBanarSection;