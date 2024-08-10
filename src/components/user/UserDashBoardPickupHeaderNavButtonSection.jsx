import DashBoardLinkButton from "@/utils/DashBoardLinkButton";
import React from "react";

const UserDashBoardPickupHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
      <DashBoardLinkButton
        link={"/user/pickup/create"}
        title={"Create Pickup Request"}
      />
    </div>
  );
};

export default UserDashBoardPickupHeaderNavButtonSection;
