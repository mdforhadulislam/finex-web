"use client";
import Image from "next/image";
import React from "react";
import ProfileImage from "../../public/profile.svg";
import ReactApexChart from "react-apexcharts";

const UserSetting = () => {
  return (
    <div className="w-full h-auto p-3 ">
      <div className="w-full h-auto bg-defult transition-all duration-300 rounded-md p-5 md:flex-row flex-col flex align-middle items-center justify-between gap-2">
        <div className="w-full md:w-auto h-auto flex justify-start align-middle items-start gap-5 md:gap-3 flex-col md:flex-row">
          <div className="w-full flex justify-center align-middle items-center md:block md:w-auto h-auto p-2 bg-white rounded-md">
            <Image
              width={180}
              height={180}
              className={"w-[180px] h-[180px] rounded-md shadow-3xl"}
              src={ProfileImage.src}
              alt="Profile Image"
            />
          </div>
          <div className="w-auto h-auto flex flex-col justify-center align-middle items-start font-sans text-white mb-5">
            <h1 className={"text-2xl font-bold text-white font-sans uppercase"}>
              Forhadul Islam
            </h1>
            <div className="w-full md:w-auto flex-col justify-center items-start align-baseline mt-3">
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Role</span>: <span>User</span>
              </div>
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Email</span>:{" "}
                <span>mdforhadul44@gmail.com</span>
              </div>
              <div className="w-auto flex justify-start items-center align-middle gap-3">
                <span className="w-[56px]">Phone</span>:{" "}
                <span>+880193063191*</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="chart"
          className="w-full md:w-[260px] h-auto shadow-3xl rounded-md bg-white flex flex-col justify-center align-middle items-center"
        >
          <ReactApexChart
            options={{
              chart: {
                height: 220,
                type: "radialBar",
              },
            }}
            series={[67]}
            type="radialBar"
            height={220}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
