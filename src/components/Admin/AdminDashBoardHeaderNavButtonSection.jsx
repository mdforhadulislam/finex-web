import DashBoardLinkButton from "@/utils/DashBoardLinkButton";
import React from "react";

const AdminDashBoardHeaderNavButtonSection = ({tab, setTab}) => {
  return (
    <div className="w-full h-auto py-1">
      <DashBoardLinkButton
        link={"/admin/#pickup"}
        title={"All Pickup Request"}action={()=>{
          setTab({
              pickup:true,
              track:false,
              order:false
          })
      }}
      />
      <DashBoardLinkButton
        link={"/admin/#allTrack"}
        title={"All Tracking"}  action={()=>{
          setTab({
              pickup:false,
              track:true,
              order:false
          })
      }}
      />
      <DashBoardLinkButton link={"/admin/#allOrder"} title={"All Order"}   action={()=>{
            setTab({
                pickup:false,
                track:false,
                order:true
            })
        }} />
      <DashBoardLinkButton link={"/admin/#AllUser"} title={"All User"} />
    </div>
  );
};

export default AdminDashBoardHeaderNavButtonSection;
