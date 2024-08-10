"use client"
import { AuthContext } from '@/context/AuthContext';
import { LoadingContext } from '@/context/LoadingContext';
import { getRequestSend, putRequestSend, USER_ACCOUNT_PHONE } from '@/data/ApiMethod';
import InputBox from '@/utils/InputBox';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md';
import { toast } from 'react-toastify';

const AdminSetting = () => {
  const authContext = useContext(AuthContext);
  const loading = useContext(LoadingContext)
  const [profileImages, setProfileImages] = useState([]);
  const [nidFront, setNidFront] = useState([]);
  const [nidBack, setNidBack] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const profileImageHendler = (e) => {
    // const fromData = new FormData();
    // fromData.append("image", e.target.files);
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImages(reader.result);
    };
    reader?.readAsDataURL(e.target.files[0]);
  };
  const nidFrontImageHendler = (e) => {
    // const fromData = new FormData();
    // fromData.append("image", e.target.files);
    const reader = new FileReader();
    reader.onload = () => {
      setNidFront(reader.result);
    };
    reader?.readAsDataURL(e.target.files[0]);
  };
  const nidBackImageHendler = (e) => {
    // const fromData = new FormData();
    // fromData.append("image", e.target.files);
    const reader = new FileReader();
    reader.onload = () => {
      setNidBack(reader.result);
    };
    reader?.readAsDataURL(e.target.files[0]);
  };

  const uploadUpdatedHandler = (e) => {
    loading.loadingStart()
    putRequestSend(
      USER_ACCOUNT_PHONE(authContext?.user?.phone),
      {},
      {
        ...userData,
        profile: profileImages,
        nationalID: {
          front: nidFront,
          back: nidBack,
        },
      }
    ).then((res) => {
      loading.loadingEnd()
      if (res.status == 200) {
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    });
  };

  useEffect(() => {
    getRequestSend(USER_ACCOUNT_PHONE(authContext?.user?.phone)).then((res) => {
      if ((res.status = 200)) {
        setUserData({ ...res.data });
        setProfileImages(res.data?.profile);
        setNidFront(res.data?.nationalID?.front);
        setNidBack(res.data?.nationalID?.back);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto p-3 ">
      <div className="w-full h-auto bg-defult transition-all duration-300 rounded-md p-5 md:flex-row flex-col flex align-middle items-center justify-between gap-2">
        <div className="w-full sm:w-auto h-auto flex justify-start align-middle items-start gap-5 sm:gap-3 flex-col sm:flex-row">
          <div className="w-full flex justify-center align-middle items-center sm:block sm:w-auto h-auto p-2 bg-white rounded-md">
            <Image
              width={180}
              height={180}
              className={"w-[180px] h-[180px] rounded-md shadow-3xl"}
              src={profileImages}
              alt="Profile Image"
            />
          </div>
          <div className="w-auto h-auto flex flex-col justify-center align-middle items-start font-sans text-white mb-5">
            <h1 className={"text-2xl font-bold text-white font-sans uppercase"}>
              Forhadul Islam
            </h1>
            <div className="w-full md:w-auto flex-col justify-center items-start align-baseline mt-3">
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Role</span>:
                <span>{authContext?.user?.role}</span>
              </div>
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Email</span>:
                <span>{authContext?.user?.email}</span>
              </div>
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Phone</span>:
                <span>{authContext?.user?.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto p-3">
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex gap-3  md:flex-row flex-col">
            <label className="" htmlFor="profilePic">
              <span className="w-full block h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
                Profile
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="profilePic"
                  className="hidden"
                  onChange={profileImageHendler}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={profileImages}
                  alt="PROFILE PIC"
                  className="w-36 h-36 border shadow-3xl text-gray-400 rounded-md"
                ></Image>
              </div>
            </label>

            <label className="" htmlFor="nidFront">
              <span className="w-full block h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
                NID Front
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="nidFront"
                  className="hidden"
                  onChange={nidFrontImageHendler}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={nidFront}
                  alt="NID FRONT"
                  className="w-36 h-36 border shadow-3xl text-gray-400 rounded-md"
                ></Image>
              </div>
            </label>

            <label className="" htmlFor="nidBanck">
              <span className="w-full block h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
                NID Back
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="nidBanck"
                  className="hidden"
                  onChange={nidBackImageHendler}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={nidBack}
                  alt="NID BACK"
                  className="w-36 h-36 border shadow-3xl text-gray-400 rounded-md"
                ></Image>
              </div>
            </label>
          </div>

          <InputBox
            title={"Name"}
            value={userData.name}
            action={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <InputBox
            title={"Phone"}
            value={userData.phone}
            action={(e) => {
              setUserData({ ...userData, phone: e.target.value });
            }}
          />
          <InputBox
            title={"Email"}
            value={userData.email}
            action={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />

          <button
            className="inline-flex items-center p-1 py-2 px-[6px] bg-defult-button rounded-lg text-white shadow-3xl justify-center  text-center focus:outline-none  text-base mt-4"
            onClick={uploadUpdatedHandler}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting