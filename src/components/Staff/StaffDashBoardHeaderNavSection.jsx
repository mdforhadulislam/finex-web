'use client'
import DashBoardLinkButton from "@/utils/DashBoardLinkButton";
import React from "react";

const StaffDashBoardHeaderNavSection = ({tab,setTab}) => {
  return (
    <div className="w-full h-auto py-1">
      <DashBoardLinkButton
        link={"/staff/#pickup"}
        title={"All Pickup Request"}
        action={()=>{
            setTab({
                pickup:true,
                tracking:false,
                order:false
            })
        }}
      />
      <DashBoardLinkButton link={"/staff/#allOrder"} title={"All Order"}    action={()=>{
            setTab({
                pickup:false,
                tracking:false,
                order:true
            })
        }}/>
      <DashBoardLinkButton
        link={"/staff/#Alltracking"}
        title={"All Tracking"}   action={()=>{
            setTab({
                pickup:false,
                tracking:true,
                order:false
            })
        }}
      />
    </div>
  );
};

export default StaffDashBoardHeaderNavSection;
