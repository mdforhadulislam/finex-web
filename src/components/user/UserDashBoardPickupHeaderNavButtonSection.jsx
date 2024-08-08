import DashBoardLinkButton from "@/utils/DashBoardLinkButton";
import React from "react";

const UserDashBoardPickupHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
      <DashBoardLinkButton
        link={"/user/pickup/create"}
        title={"Create Pickup"}
      />
      <DashBoardLinkButton
        link={"/admin/#Alltracking"}
        title={"All Tracking"}
      />
    </div>
  );
};

export default UserDashBoardPickupHeaderNavButtonSection;
