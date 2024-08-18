import React, { useContext, useEffect, useState } from "react";
import AdminDashBoardBlogListBox from "./AdminDashBoardBlogListBox";
import {
  BLOG_API,
  deleteRequestSend,
  getRequestSend,
  SINGLE_BLOG_API,
} from "@/data/ApiMethod";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import AdminDashBoardBlogViewPopup from "./AdminDashBoardBlogViewPopup";
import { ModalContext } from "@/context/ModalContext";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AdminDashBoardBlogListSection = () => {
  const modal = useContext(ModalContext);
  const loading = useContext(LoadingContext);
  const router = useRouter()
  const [allBlog, setAllBlog] = useState([]);
  const [blogViewData, setAllViewData] = useState({});

  useEffect(() => {
    getRequestSend(BLOG_API).then((res) => {
      if (res.status == 200) {
        setAllBlog(res.data.reverse());
      }
    });
  }, []);

  return (
    <div className="w-full h-auto py-2" id="Country">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-center text-lg justify-center align-middle items-center">
            Blog List
          </h1>
        </div>

        <div className="w-full h-auto p-3 py-4  shadow-3xl rounded-md flex gap-[10px] flex-col">
          {allBlog.map((sBlog, index) => {
            return (
              <div className="w-full h-auto relative" key={index}>
                <AdminDashBoardBlogListBox blogData={sBlog} index={index} />

                <div className="flex gap-1 sm:gap-3 absolute right-1 z-10 top-[2%] sm:top-[8%] flex-col sm:flex-row">
                  <IoEyeOutline
                    className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      setAllViewData(sBlog);
                      modal.open();
                    }}
                  />
                  <FiEdit
                    className="w-8 h-8 p-[6px] text-blue-600 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      router.push(`/admin/site-data/blog/${sBlog._id}`);
                    }}
                  />
                  <MdDeleteOutline
                    className="w-8 h-8 p-1 text-red-600 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      loading.loadingStart();
                      deleteRequestSend(SINGLE_BLOG_API(sBlog._id)).then(
                        (res) => {
                          loading.loadingEnd();
                          toast.success(res.message);
                          getRequestSend(BLOG_API).then((res) => {
                            if (res.status == 200) {
                              setAllBlog(res.data.reverse());
                            }
                          });
                        }
                      );
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AdminDashBoardBlogViewPopup blogData={blogViewData} />
    </div>
  );
};

export default AdminDashBoardBlogListSection;
