import BlogPostBox from "./BlogPostBox";
import BlogFirstImage from "@/assets/1.jpg";
import BlogPostViewPopup from "./BlogPostViewPopup";
import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";

const BlogBodySection = ({ blogData }) => {
    const modal = useContext(ModalContext)
  const [seletedBlog, setSeletedBlog] = useState({});

  return (
    <div className="w-full h-auto">
      <div className="lg:container sm:p-2 p-4 h-auto sm:py-8 m-auto">
        <div className="w-full h-auto">
          <div className="w-fukk h-auto py-3 sm:pb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-defult text-left">
              OUR BLOG
            </h1>
          </div>

          <div className="w-full h-auto flex flex-col md:flex-row items-center align-middle mb-10">
            <div className="w-full md:w-[50%] lg:w-[40%] h-auto flex justify-center align-middle items-center p-3">
              <img
                src={blogData[0]?.image}
                alt="Delivery-Man"
                className="w-full h-full "
              />
            </div>
            <div className="w-full md:w-[50%] lg:w-[60%] h-auto p-4">
              <div className="w-full h-auto flex justify-center align-middle items-center py-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-defult">
                  {blogData[0]?.title.toUpperCase()}
                </h1>
              </div>

              <p className="w-full h-auto text-base text-gray-900">
                {blogData[0]?.details.toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto  text-center py-4">
          {blogData.map((sBlog, index) => (
            <BlogPostBox
              key={index}
              blogData={sBlog}
              action={() => {
                modal.open()
                setSeletedBlog(sBlog);
              }}
            />
          ))}
        </div>
      </div>
          <BlogPostViewPopup blogData={seletedBlog} />
    </div>
  );
};

export default BlogBodySection;
