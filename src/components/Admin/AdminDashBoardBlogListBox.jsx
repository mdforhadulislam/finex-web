import React from "react";

const AdminDashBoardBlogListBox = ({blogData,index}) => {
  return (
    <div className="w-full h-auto p-2 shadow-3xl rounded-md relative flex gap-2 sm:gap-10  flex-col sm:flex-row">
      <div>{index+1}.</div>
      <div>Title : {blogData.title}</div>
      <div>Date : {new Date(blogData.createdAt).toDateString()} </div>
    </div>
  );
};

export default AdminDashBoardBlogListBox;
