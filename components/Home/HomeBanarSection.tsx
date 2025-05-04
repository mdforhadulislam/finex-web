import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const slider_image = [
  {id:1, src:"/slider-1.jpg"},
  {id:2, src:"/banar2.png"},
]


const HomeBanarSection = () => {
  return (
    <div className="w-full h-auto py-14 bg-white px-5">
      <div className=" container h-auto m-auto p-10">
        <Carousel>
          <CarouselContent>
            {slider_image.map((item, index) => (
              <CarouselItem key={index}>
                <div
                  className="w-full h-[250px] md:h-[550px] p-2 bg-cover rounded-lg bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  
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

export default HomeBanarSection;
