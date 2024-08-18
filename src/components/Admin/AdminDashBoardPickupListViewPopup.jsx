import Modal from "@/utils/Modal";

const AdminDashBoardPickupListViewPopup = ({ pickupData }) => {
  return (
    <Modal>
      <table className="w-full">
        <tbody className="w-full">
        <tr>
          <td>Customar Name: </td> <td>{pickupData?.name}</td>
        </tr>

        <tr>
          <td>Customar Phone: </td> <td>{pickupData?.phone}</td>
        </tr>
        
        <tr>
          <td>Pickup Time: </td>
          <td>{new Date(pickupData?.dateTime).toLocaleDateString()}-
          {new Date(pickupData?.dateTime).toLocaleTimeString()}</td>
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
        </tbody>
      </table>

      <h1>{pickupData?.isConfirm?.confirm && "Accepted By"}</h1>
      {pickupData?.isConfirm?.confirm && (
        <table className="w-full">
          <tbody  className="w-full">
          <tr>
            <td>Staff ID: </td> <td>{pickupData?.isConfirm?.staffPhone}</td>
          </tr>
          <tr>
            <td>Staff Cost: </td>
            <td>{pickupData?.isConfirm?.cost}</td>
          </tr>
          <tr>
            <td>Accept Time: </td>
            <td>{new Date(pickupData?.isConfirm?.dateTime).toLocaleDateString()} - {new Date(pickupData?.isConfirm?.dateTime).toLocaleTimeString()}</td>
          </tr>
          </tbody>
        </table>
      )}
    </Modal>
  );
};

export default AdminDashBoardPickupListViewPopup;
