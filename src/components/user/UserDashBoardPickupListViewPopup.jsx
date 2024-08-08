import Modal from "@/utils/Modal";
import React from "react";

const UserDashBoardPickupListViewPopup = ({ pickupData }) => {
  return (
    <Modal>
      <table className="w-full">
        <tr>
          <td>Customar Name: </td> <td>{pickupData?.name}</td>
        </tr>

        <tr>
          <td>Customar Phone: </td> <td>{pickupData?.phone}</td>
        </tr>

        <tr>
          <td>Pickup Time: </td>
          <td>
            {new Date(pickupData?.dateTime).toLocaleDateString()}-
            {new Date(pickupData?.dateTime).toLocaleTimeString()}
          </td>
        </tr>

        <tr>
          <td>Parcel Weight: </td>
          <td>{pickupData?.weight}</td>
        </tr>

        <tr>
          <td>Pickup Address: </td>
          <td>
            {pickupData?.address?.address}, {pickupData?.address?.area},
            {pickupData?.address?.city}, {pickupData?.address?.region}
          </td>
        </tr>
      </table>
      <h1 className="pt-3">{pickupData?.isConfirm?.confirm && "Pickup Accepted"}</h1>
    </Modal>
  );
};

export default UserDashBoardPickupListViewPopup;
