import { LoadingContext } from "@/context/LoadingContext";
import {
  BLOG_API,
  BLOG_IMAGE_UPLOAD_API,
  getRequestSend,
  postRequestSend,
  putRequestSend,
  SINGLE_BLOG_API,
} from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { toast } from "react-toastify";
import Profile from "@/public/profile.svg";

const SingleBlog = () => {
  const router = useRouter();
  let { blogID } = router.query;
  const loading = useContext(LoadingContext);
  const [blogImage, setBlogImage] = useState("");
  const formData = new FormData();
  const [blogData, setBlogData] = useState({
    image: "",
    title: "",
    details: "",
  });

  useEffect(() => {
    getRequestSend(SINGLE_BLOG_API(blogID)).then((res) => {
      if (res.status == 200) {
        setBlogData({
          image: res.data.image,
          title: res.data.title,
          details: res.data.details,
        });
        setBlogImage(res.data.image);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto py-2" id="Country">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-center text-lg justify-center align-middle items-center">
            Blog Create
          </h1>
        </div>

        <div className="w-full h-auto p-3 py-4  shadow-3xl rounded-md flex gap-3 flex-col">
          <label htmlFor="blogImage">
            <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
              Blog Image
            </span>
            <div className="w-full h-auto flex flex-col sm:flex-row cursor-pointer gap-3">
              <input
                type="file"
                id="blogImage"
                className="hidden"
                onChange={(e) => {
                  loading.loadingStart();
                  const file = e.target.files[0];

                  if (file) {
                    formData.append("image", file);
                    fetch(BLOG_IMAGE_UPLOAD_API, {
                      method: "POST",
                      body: formData,
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        loading.loadingEnd();
                        if (res.status == 200) {
                          setBlogData({ ...blogData, image: res.data.url });
                          const reader = new FileReader();
                          reader.onload = () => {
                            setBlogImage(reader.result);
                          };
                          reader?.readAsDataURL(file);
                        }
                      });
                  }
                }}
              />
              <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
              <img
                src={blogImage ? blogImage : Profile.src}
                alt="Profile Pic"
                className="w-full h-72 border shadow-3xl rounded-md"
              />
            </div>
          </label>

          <InputBox
            title={"Blog Title"}
            placeholder={"Blog Title"}
            value={blogData.title}
            action={(e) => {
              setBlogData({ ...blogData, title: e.target.value });
            }}
          />
          <InputBox
            title={"Blog Details"}
            isTextArea={true}
            placeholder={"Blog Details"}
            value={blogData.details}
            action={(e) => {
              setBlogData({ ...blogData, details: e.target.value });
            }}
          />

          <button
            className="inline-flex items-center p-1  py-2 px-[6px] bg-defult-button rounded-lg text-white shadow-3xl justify-center text-center mt-4 "
            onClick={() => {
              loading.loadingStart();
              putRequestSend(SINGLE_BLOG_API(blogID), {}, blogData).then(
                (res) => {
                  loading.loadingEnd();
                  if (res.status == 200) {
                    toast.success(res.message);
                    setBlogData({
                      image: "",
                      title: "",
                      details: "",
                    });
                    setBlogImage("");
                    router.push("/admin/site-data/blog");
                  } else {
                    toast.error(res.message);
                  }
                }
              );
            }}
          >
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
