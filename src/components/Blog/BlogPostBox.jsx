import Image from "next/image";
import React from "react";
import BlogFirstImage from "@/assets/1.jpg";

const BlogPostBox = ({blogData, action}) => {
  return (
    <div className="w-[290px] h-auto inline-block p-2">
      <div className="flex flex-col   shadow-3xl rounded-md p-3 gap-3">
        <Image
          width={300}
          height={300}
          className="w-full h-full rounded-md"
          src={blogData?.image}
          alt={blogData?.title}
        />
        <h1 className="text-lg font-bold">
        {blogData?.title}
        </h1>

        <button className="w-full h-auto p-2 bg-defult-button rounded-md shadow-5xl text-white" onClick={action}>
          Read Blog
        </button>
      </div>
    </div>
  );
};

export default BlogPostBox;
