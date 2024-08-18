import Image from "next/image"; // Importing Image component from Next.js for optimized image rendering
import React from "react"; // Importing React
import BlogFirstImage from "@/assets/1.jpg"; // Importing a default blog image (though not used in this component)

// BlogPostBox component definition
const BlogPostBox = ({ blogData, action }) => {
  return (
    <div className="w-[290px] h-auto inline-block p-2">
      {/* Blog post box container */}
      <div className="flex flex-col shadow-3xl rounded-md p-3 gap-3">
        {/* Image of the blog post */}
        <Image
          width={300} // Width of the image
          height={300} // Height of the image
          className="w-full h-full rounded-md" // Full width and height, with rounded corners
          src={blogData?.image} // Image source from blogData
          alt={blogData?.title} // Alt text for the image
        />
        {/* Blog title */}
        <h1 className="text-lg font-bold">
          {blogData?.title} {/* Title of the blog post */}
        </h1>

        {/* Button to read the blog */}
        <button
          className="w-full h-auto p-2 bg-defult-button rounded-md shadow-5xl text-white" // Styling for the button
          onClick={action} // OnClick handler for the button, triggers action passed as prop
        >
          Read Blog
        </button>
      </div>
    </div>
  );
};

export default BlogPostBox;
