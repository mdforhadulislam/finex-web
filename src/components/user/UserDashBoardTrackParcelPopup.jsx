import Modal from '@/utils/Modal';
import TrackParcelLocationBox from '@/utils/TrackParcelLocationBox';
import Image from 'next/image';
import React from 'react'
import BoxIcon from "@/public/BOX.png";

const UserDashBoardTrackParcelPopup = ({ trackData }) => {
    return (
      <Modal>
        <div className="w-full h-auto p-2 mt-3">
          <div className="w-full h-auto grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 relative">
            <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-1">
              <div className="text-lg font-semibold">
                Trak Id: {trackData?.ourTrackingId}
              </div>
              <div className="w-full h-auto capitalize flex justify-left align-middle items-center gap-4 font-semibold text-base text-gray-700">
                {}
                <h1 className="">
                  {trackData?.parcel?.from?.country.toUpperCase().split("-")[0]}
                </h1>{" "}
                TO <h1>{trackData?.parcel?.to?.country.toUpperCase()}</h1>
              </div>
              <div className="w-full h-auto py-3">
                <Image
                  width={100}
                  height={100}
                  src={BoxIcon.src}
                  alt="Box Icon"
                />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-1 text-sm">
              <div className="text-lg font-semibold">Sender</div>
              <div>Name : {trackData?.parcel?.sender?.name}</div>
              <div>Phone : {trackData?.parcel?.sender?.phone}</div>
              <div>Email : {trackData?.parcel?.sender?.email}</div>
              <div>From : {trackData?.parcel?.sender?.address}</div>
              <div>weight: {trackData?.parcel?.weight}</div>
            </div>
            <div className="w-full h-auto flex flex-col gap-1  text-sm">
              <div className="text-lg font-semibold">Reciver</div>
              <div>Name : {trackData?.parcel?.reciver?.name}</div>
              <div>Phone : {trackData?.parcel?.reciver?.phone}</div>
              <div>Email : {trackData?.parcel?.reciver?.email}</div>
              <div>To : {trackData?.parcel?.reciver?.address?.address}</div>
              <div>weight: {trackData?.parcel?.weight}</div>
            </div>
          </div>
          {/* grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 */}
          <div className="w-full h-auto flex lg:flex-row flex-col gap-2">
            <div className="w-full lg:w-[35%] col-span-1 h-auto pb-5">
              <div className="w-full h-auto pb-4 pr-4">
                <h1 className="text-lg font-semibold pb-4">Shipment Item List</h1>
                <div className="w-full lg:h-[100px] overflow-auto scrollbar">
                  <table className="w-auto pb-2 border-none ">
                    {trackData?.parcel?.item?.list.map((item, index) => (
                      <tr key={index}>
                        <td className="border-none text-base py-[2px] px-1">
                          {index + 1} .
                        </td>{" "}
                        <td className="border-none text-base  py-[2px] px-1">
                          {" "}
                          {item.name}
                        </td>{" "}
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
  
              <h1 className="text-lg font-semibold pb-8">Shipment Update</h1>
              <div className="w-full h-auto">
                <div className="flex flex-col  text-gray-50">
                  {[
                    trackData?.handoverBy?.trackingDetails
                      ?.reverse()
                      .find((oItem) => oItem.level == 1),
                  ].map((item) => (
                    <TrackParcelLocationBox item={item} key={"box-1"} />
                  ))}
  
                  {[
                    trackData?.handoverBy?.trackingDetails
                      ?.reverse()
                      .find((oItem) => oItem.level == 2),
                  ].map((item) => (
                    <TrackParcelLocationBox item={item} key={"box-2"} />
                  ))}
  
                  {[
                    trackData?.handoverBy?.trackingDetails
                      ?.reverse()
                      .find((oItem) => oItem.level == 3),
                  ].map((item) => (
                    <TrackParcelLocationBox item={item} key={"box-3"} />
                  ))}
                </div>
              </div>
            </div>
  
            <div className="w-full lg:w-[65%] col-span-2 ">
              <h1 className="text-lg font-semibold pb-4">
                Shipment Travel History
              </h1>
              <div className="w-full h-auto flex flex-col gap-3 ">
                <div className=" flex sm:gap-2 flex-col sm:flex-row font-medium text-base item-center sm:h-[50px]">
                  <h1 className="sm:w-[250px]">MM-DD-YYYY {" - "}</h1>
                  <p className="sm:w-[320px] text-sm font-normal text-left">
                    Description {" - "}
                  </p>
                  <h1 className="sm:w-[230px] text-right">Location</h1>
                </div>
                {trackData?.handoverBy?.trackingDetails?.map((item) => (
                  <div
                    key={item?.id}
                    className=" flex sm:gap-2 flex-col sm:flex-row font-medium text-base item-center sm:h-[50px]"
                  >
                    <h1 className="sm:w-[250px]">
                      {new Date(
                        item?.date?.toLocaleString()
                      ).toLocaleDateString()}{" "}
                      {" - "}
                    </h1>
                    <p className="sm:w-[320px] text-sm font-normal text-left">
                      {item?.description}
                    </p>
                    <h1 className="sm:w-[230px] text-right">
                      {" - "} {item?.location}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };
export default UserDashBoardTrackParcelPopup