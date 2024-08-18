import Slider from '@/utils/Slider'; // Importing the custom slider component
import Image from 'next/image'; // Importing Image component from Next.js
import React from 'react'; // Importing React
import Image1 from "@/assets/1.jpg"; // Importing image assets
import Image2 from "@/assets/2.jpg";
import Image3 from "@/assets/3.jpg";
import Image4 from "@/assets/4.jpg";
import Image5 from "@/assets/5.jpg";
import Image6 from "@/assets/6.jpg";
import Image7 from "@/assets/7.jpg";
import Image8 from "@/assets/8.jpg";
import Image9 from "@/assets/9.jpg";
import Head from 'next/head';

// Array of slides with image sources and IDs
const Slides = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
  { id: 4, image: Image4 },
  { id: 5, image: Image5 },
  { id: 6, image: Image6 },
  { id: 7, image: Image7 },
  { id: 8, image: Image8 },
  { id: 9, image: Image9 },
];

const BlogHeaderSliderSection = () => {
  return (
    <>
      {/* SEO meta tags for the Blog Header Slider Section */}
      <Head>
        <meta name="description" content="Browse through our stunning blog header images in the slider section. Discover the latest posts visually." />
        <meta property="og:title" content="Blog Header Slider | Faster-In" />
        <meta property="og:description" content="Browse through our stunning blog header images in the slider section. Discover the latest posts visually." />
       
      </Head>

      <div className="container h-auto m-auto">
        <div className="relative">
          <Slider
            coustomResponsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1,
              },
              desktop3: {
                breakpoint: { max: 3000, min: 1500 },
                items: 1,
              },
              desktop2: {
                breakpoint: { max: 1500, min: 1024 },
                items: 1,
              },
              desktop1: {
                breakpoint: { max: 1024, min: 800 },
                items: 1,
              },
              tablet: {
                breakpoint: { max: 800, min: 600 },
                items: 1,
              },
              mobile: {
                breakpoint: { max: 600, min: 0 },
                items: 1,
              },
            }}
          >
            {Slides.map((slide, i) => (
              <div
                key={slide.id} // Use slide.id as the key for better uniqueness
                className="w-full h-[85vh] relative aspect-auto sm:aspect-video overflow-hidden"
              >
                <img
                  className="w-full h-[100vh] bg-cover"
                  src={slide.image.src} // Use src attribute to get the image URL
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Cover the entire container while maintaining aspect ratio
                  alt={`Slide ${slide.id}`} // Use slide.id in alt for accessibility
                  fetchPriority="high" // Optimize image loading
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BlogHeaderSliderSection;
