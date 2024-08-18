import Modal from '@/utils/Modal'
import React from 'react'

const AdminDashBoardBlogViewPopup = ({blogData}) => {
  return (
    <Modal>
        <div className='w-full h-auto p-2'>
            <img src={blogData.image} alt={blogData.title} className='w-full h-[400px] ' />
            <h1 className=' text-2xl font-semibold pb-3'>{blogData.title}</h1>
            {blogData.details}
        </div>

    </Modal>
  )
}

export default AdminDashBoardBlogViewPopup