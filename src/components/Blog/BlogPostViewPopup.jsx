import Modal from '@/utils/Modal'; // Importing the Modal component for displaying popups
import React from 'react'; // Importing React

// BlogPostViewPopup component definition
const BlogPostViewPopup = ({ blogData }) => {
  return (
    <Modal>
      {/* Displaying the blog post image */}
      <img 
        src={blogData.image} // Image source from blogData
        alt={blogData.title} // Alt text for the image
        className='w-full h-[450px] rounded-md mb-3' // Full width, fixed height, rounded corners, and margin bottom
      />
      
      {/* Displaying the blog post title */}
      <h1 className='text-2xl font-semibold pb-2'>
        {blogData.title} {/* Title of the blog post */}
      </h1>
      
      {/* Displaying the blog post details */}
      <div>
        {blogData.details} {/* Details or content of the blog post */}
      </div>
    </Modal>
  );
};

export default BlogPostViewPopup;
