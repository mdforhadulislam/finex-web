import Modal from '@/utils/Modal'
import React from 'react'

const BlogPostViewPopup = ({blogData}) => {
  return (
    <Modal>
        <img src={blogData.image} alt={blogData.title} className='w-full h-[450px] rounded-md mb-3' />
            <h1 className=' text-2xl font-semibold pb-2'>{blogData.title}</h1>
            {blogData.details}
    </Modal>
  )
}

export default BlogPostViewPopup