import BlogPostBox from "./BlogPostBox";
import BlogPostViewPopup from "./BlogPostViewPopup";
import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";
import Head from 'next/head';

const BlogBodySection = ({ blogData }) => {
  // Access the modal context and state for selected blog
  const modal = useContext(ModalContext);
  const [seletedBlog, setSeletedBlog] = useState({});

  return (
    <>
      {/* SEO meta tags for the Blog Body Section */}
      <Head>
        <title>Our Blog | Faster-In</title>
        <meta name="description" content="Read the latest posts from our blog. Stay updated with news, tips, and insights from Faster-In." />
        <meta property="og:title" content="Our Blog | Faster-In" />
        <meta property="og:description" content="Read the latest posts from our blog. Stay updated with news, tips, and insights from Faster-In." />
      
      </Head>

      {/* Main container */}
      <div className="w-full h-auto">
        {/* Inner container with padding and alignment */}
        <div className="lg:container sm:p-2 p-4 h-auto sm:py-8 m-auto">
          {/* Blog section title */}
          <div className="w-full h-auto py-3 sm:pb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-defult text-left">
              OUR BLOG
            </h1>
          </div>

          {/* Featured blog post section */}
          <div className="w-full h-auto flex flex-col md:flex-row items-center align-middle mb-10">
            <div className="w-full md:w-[50%] lg:w-[40%] h-auto flex justify-center align-middle items-center p-3">
              {/* Featured blog image */}
              <img
                src={blogData[0]?.image}
                alt="Featured Blog"
                className="w-full h-full"
              />
            </div>
            <div className="w-full md:w-[50%] lg:w-[60%] h-auto p-4">
              {/* Featured blog title */}
              <div className="w-full h-auto flex justify-center align-middle items-center py-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-defult">
                  {blogData[0]?.title.toUpperCase()}
                </h1>
              </div>

              {/* Featured blog details */}
              <p className="w-full h-auto text-base text-gray-900">
                {blogData[0]?.details.toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Blog post boxes */}
        <div className="w-full h-auto text-center py-4">
          {blogData.map((sBlog, index) => (
            <BlogPostBox
              key={index}
              blogData={sBlog}
              action={() => {
                modal.open(); // Open the modal
                setSeletedBlog(sBlog); // Set the selected blog for the modal
              }}
            />
          ))}
        </div>
      </div>
      {/* Blog post view popup */}
      <BlogPostViewPopup blogData={seletedBlog} />
    </>
  );
};

export default BlogBodySection;
