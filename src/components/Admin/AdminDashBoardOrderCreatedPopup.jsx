import { ModalContext } from "@/context/ModalContext";
import Logo from "@/utils/Logo";
import Modal from "@/utils/Modal";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const AdminDashBoardOrderCreatedPopup = ({ orderData }) => {
  const router = useRouter();
  const modal = useContext(ModalContext);
  return (
    <Modal>
      <div className="w-full h-auto px-3 py-2 invoice-design relative">
        {Number(orderData?.payment?.pAmount) +
          Number(orderData?.payment?.pExtraCharge) -
          Number(orderData?.payment?.pDiscount) ==
        Number(orderData?.payment?.pRecived) ? (
          <div className="w-full h-auto absolute rotate-[-45deg] left-0 top-[50%]">
            <h1 className=" text-8xl opacity-20 text-center font-bold">
              Completed Payment
            </h1>
          </div>
        ) : (
          <div className="w-full h-auto absolute rotate-[-45deg] left-0 top-[50%]">
            <h1 className=" text-8xl opacity-20 text-center font-bold">
              Due Payment
            </h1>
          </div>
        )}

        <div className="w-full h-auto flex justify-between">
          <div className="w-auto h-auto p-3">
            <Logo isFooter={true} imageStyle={"w-[130px] h-[130px]"} />
          </div>
          <div className="w-auto h-auto p-3">
            <table className="table-auto border-[2px]">
              <tbody>
              <tr>
                <td>Date:</td>
                <td>{new Date(orderData.orderDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>Order ID:</td>
                <td>{orderData?._id}</td>
              </tr>

              <tr>
                <td>Tracking ID:</td>
                <td>{orderData?.trackingId}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="my-3" />

        <div className="w-full h-auto flex gap-2">
          <div className="w-[50%] h-auto">
            <h1 className="font-medium text-lg text-center text-gray-900">
              Sender:
            </h1>

            <table className="table-auto border-[2px] w-full h-auto py-2 px-1 text-sm">
              <tbody>
              <tr>
                <td>Name: </td>
                <td>{orderData?.parcel?.sender?.name}</td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>{orderData?.parcel?.sender?.phone}</td>
              </tr>
              <tr>
                <td>E-mail: </td>
                <td>{orderData?.parcel?.sender?.email}</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>{orderData?.parcel?.sender?.address}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[50%] h-auto">
            <h1 className="font-medium text-lg text-center text-gray-900">
              Reciver:
            </h1>
            <table className="table-auto border-[2px] w-full h-auto py-2 px-1  text-sm">
           <tbody>
           <tr>
                <td>Name: </td>
                <td>{orderData?.parcel?.reciver?.name}</td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>{orderData?.parcel?.reciver?.phone}</td>
              </tr>
              <tr>
                <td>E-mail: </td>
                <td>{orderData?.parcel?.reciver?.email}</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>
                  {orderData?.parcel?.reciver?.address?.address}
                  {orderData?.parcel?.reciver?.country}
                </td>
              </tr>
           </tbody>
            </table>
          </div>
        </div>

        <div>
          <table className="table-auto border-[2px] w-full h-auto py-2 px-1  text-sm mt-2">
           <tbody>
           <tr>
              <td>Tracking ID</td>
              <td>Item</td>
              <td>Weight</td>
              <td>Total Amount</td>
            </tr>
            <tr>
              <td>{orderData?.trackingId}</td>

              <td>
                {orderData?.parcel?.item?.list?.map((item) => (
                  <div key={item.id}>{item.name},</div>
                ))}
              </td>
              <td>{orderData?.parcel?.weight}</td>
              <td>
                <div className="w-full flex justify-between">
                  <span>Weight Charge:</span>
                  <span> {Number(orderData?.payment?.pAmount)}</span>
                </div>
                <div className="w-full flex justify-between">
                  <span>Extra Charge:</span>
                  <span>{Number(orderData?.payment?.pExtraCharge)}</span>
                </div>
                <div className="w-full flex justify-between">
                  <span>Discount:</span>
                  <span> {Number(orderData?.payment?.pDiscount)}</span>
                </div>
                <hr />
                <div className="w-full flex justify-between">
                  <span>Total Charge:</span>
                  <span>
                    {Number(orderData?.payment?.pAmount) +
                      Number(orderData?.payment?.pExtraCharge) -
                      Number(orderData?.payment?.pDiscount)}
                  </span>
                </div>

                <div className="w-full flex justify-between">
                  <span>Total Charge Recived:</span>
                  <span>{Number(orderData?.payment?.pRecived)}</span>
                </div>

                <hr />

                <div className="w-full flex justify-between">
                  <span>Due Charge:</span>
                  <span>
                    {Number(orderData?.payment?.pAmount) +
                      Number(orderData?.payment?.pExtraCharge) -
                      Number(orderData?.payment?.pDiscount) -
                      Number(orderData?.payment?.pRecived)}
                  </span>
                </div>
              </td>
            </tr>
           </tbody>
          </table>
        </div>
        <div className=" relative">
          <button
            className="bg-defult-button text-base rounded-md text-white py-1 mt-1 px-4 text-center w-auto absolute"
            onClick={(e) => {
              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
                "none";
              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
                "none";

              window.print();

              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
                "block";
              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
                "block";
              modal.close();
              router.push("/admin/order");
            }}
          >
            Print This
          </button>
        </div>

        <div className="w-full h-auto text-right py-2 font-semibold text-sm text-gray-800">
          Authorized By FASTER INTERNATIONAL EXPRESS-(FINEX)
        </div>
      </div>
    </Modal>
  );
};

export default AdminDashBoardOrderCreatedPopup;
