"use client";

import { getRequestSend, USER_ACCOUNT_API } from "@/data/ApiMethod";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SiteUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    getRequestSend(USER_ACCOUNT_API).then((res) => {
      if (res.status == 200) {
        setAllUser(res.data);
      }
    });
  },[]);
  return (
    <div className="w-full h-auto p-2" id="AllUser">

<div className="w-full h-auto py-1 mb-4">
            <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
              Site User
            </h1>
          </div>

      <div className="w-full h-auto p-2 shadow-3xl rounded-lg py-4">
      <div className="w-full h-auto grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
        {allUser?.map((sUser) => (
          <div
            key={sUser?._id}
            className="w-full h-full p-2 shadow-3xl rounded-md flex flex-col gap-1 relative"
          >
            <div className="p-2 w-[80px] h-[80px] flex justify-center align-middle items-center rounded-full shadow-3xl m-auto">
              <Image
                width={70}
                height={70}
                src={sUser?.profile}
                className="w-[70px] h-[70px] border rounded-full"
                alt="User name"
              />
            </div>

            <table className="w-full h-full">
              <tbody  className="w-full h-full">
              <tr>
                <td>Name:</td> <td>{sUser?.name}</td>
              </tr>
              <tr>
                <td>role:</td> <td>{sUser?.role}</td>
              </tr>
              <tr>
                <td>Phone:</td> <td>{sUser?.phone}</td>
              </tr>
              <tr>
                <td>E-mail:</td> <td>{sUser?.email}</td>
              </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SiteUser;
