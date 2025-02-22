"use client";

import {
  getRequestSend,
  PUBLIC_TRACKING_API,
} from "@/components/ApiCall/ApiMethod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import ShipmentTrackParcelLocationBox from "./ShipmentTrackParcelLocationBox";
import { useLoad } from "@/context/LoadContext";

// Define the necessary types
interface Parcel {
  from: { country: string };
  to: { country: string };
  sender: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  reciver: {
    name: string;
    phone: string;
    email: string;
    address: {
      address: string;
    };
  };
  weight: string;
  item: { list: string[] };
}

interface OrderInfo {
  parcel: Parcel;
}

interface TrackingInfo {
  checkpoint_delivery_status: string;
  checkpoint_date: Date; // or string if you're getting dates in string format
  tracking_detail: string; // Description of the tracking event
  location: string; // Location of the event
}

interface CourierTracking {
  origin_info: {
    trackinfo: TrackingInfo[]; // List of tracking information
  };
  destination_city: string; // Destination city for the tracking
  origin_city: string; // Origin city for the tracking
  // Add more fields as needed
}

interface TrackInfo {
  tracking_number?: string;
  own_tracking_info: {
    tracking_info: TrackingInfo[]; // Use the new TrackingInfo type here
    courier_tracking: CourierTracking[]; // Use the new CourierTracking type here
  };
}

interface TrackData {
  order_info?: OrderInfo;
  track_info?: TrackInfo;
}

const couriers = [
  "FedEx", "UPS", "DHL", "Aramex", "SMSA", "OCS", "USPS", "Canada Post", "Royal Mail",
  "TNT", "DPD", "Yodel", "Hermes", "China Post", "Japan Post", "India Post", "Korea Post",
  "SingPost", "AusPost", "PostNL", "Hongkong Post", "SF Express", "DHL Express", "La Poste",
  "Correos Spain", "Brazil Correios", "Russia Post", "Thailand Post", "Malaysia Pos",
  "Viettel Post", "J&T Express", "Ninja Van", "Best Express", "Gati", "DTDC", "SpeedPost",
  "Parcel Force", "An Post", "Swiss Post", "BPost", "Norway Post", "Poste Italiane",
  "CTT Portugal", "Türkiye Post", "Saudi Post", "LBC Express", "Blue Dart", "SkyNet",
  "Fastway", "New Zealand Post", "Estafeta", "Canada Express", "Delhivery", "XpressBees",
  "GDEX", "City-Link Express", "Pos Indonesia", "Mexico Post", "Correos Chile", "Correos Peru",
  "Toll Group", "Cambodia Post", "Pony Express", "Vietnam Post", "Yanwen", "ZTO Express",
  "STO Express", "YTO Express", "Shree Tirupati", "Ecom Express", "DPE Express", "Armadillo",
  "Poczta Polska", "Cargo Expreso", "PostNord", "Asendia", "SunYou", "Epacket", "Nacex",
  "GLS", "Sagawa Express", "Seur", "MNG Kargo", "Cainiao", "CJ Logistics", "Tiki",
  "Shadowfax", "DPEX", "ABF Freight", "Loomis Express", "Spee-Dee Delivery", "OnTrac",
  "Tuffnells", "Purolator", "Landmark Global", "CollectPlus", "Australia Post",
  "DX Delivery", "IMEX Global Solutions", "DHL eCommerce", "Expeditors", "JNE Express",
  "Sicepat Express", "Parcel2Go", "WishPost", "LaserShip", "Skynet Malaysia", "SkyPostal",
  "Shiptor", "JD Logistics", "CEVA Logistics", "DB Schenker", "First Flight Couriers",
  "PFC Express", "Sinoair", "Newgistics", "Shree Maruti Courier", "Super Express",
  "TForce Freight", "TNT Express", "Spoton Logistics", "XPO Logistics", "GEODIS",
  "Averitt Express", "Mainfreight", "Echo Global Logistics", "Roadrunner Freight"
];

// Create a regex pattern to match all courier names
const courierRegex = new RegExp(couriers.join("|"), "gi");

// Function to replace all courier names with "Finex"
const replaceCourierWithFinex = (text:string) => text.replace(courierRegex, "Finex");

export const ShipmentTrackingDetails: React.FC<{ trackID: string }> = ({
  trackID,
}) => {
  const [trackData, setTrackData] = useState<TrackData | null>(null);
  const [resMessage , setResMessage]= useState("")

  const load = useLoad()

  useEffect(() => {
    getRequestSend(PUBLIC_TRACKING_API(trackID)).then((res) => {
      load.loadingEnd()
      if (res.status === 200) {
        setResMessage(res.message)
        toast.success(res.message);
        setTrackData(
          res.data?.order_info ? res.data : { track_info: res.data }
        );
      } else {
        toast.error(res.message);
      }
    });
  }, [trackID, load]);

  if (!trackData || resMessage == "Track Data Not Found") {
    return (
      <div className="text-center text-gray-500 font-semibold mb-20 px-2">
        We {"couldn't"} retrieve tracking information. If you need assistance,
        please contact support.
      </div>
    );
  }

  return (
    <div className="container m-auto px-2">
      <div className="w-full h-auto p-2 pb-14">
        <div
          className={`w-full h-auto grid  ${
            trackData?.order_info
              ? "grid-rows-3 sm:grid-rows-2 md:grid-rows-1 sm:grid-cols-2  md:grid-cols-3"
              : "grid-rows-1 grid-cols-1"
          }   relative`}
        >
          <div
            className={
              trackData?.order_info
                ? "sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-1"
                : ""
            }
          >
            <div className="text-lg font-semibold">
              Trak Id: {trackData?.track_info?.tracking_number}
            </div>
            <div className="w-full h-auto capitalize flex justify-left align-middle items-center gap-4 font-semibold text-base text-gray-700">
              {}
              <h1 className="">
                {trackData?.order_info
                  ? trackData?.order_info?.parcel?.from?.country.toUpperCase()
                  : trackData?.track_info?.own_tracking_info
                      ?.courier_tracking[0]?.origin_city}
              </h1>
              TO{" "}
              <h1>
                {trackData?.order_info
                  ? trackData?.order_info?.parcel?.to?.country.toUpperCase()
                  : trackData?.track_info?.own_tracking_info
                      ?.courier_tracking[0]?.destination_city}
              </h1>
            </div>
            <div className="w-full h-auto py-3">
              <Image
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
                src={"/Box.png"}
                alt="Box Icon"
              />
            </div>
          </div>
          {trackData?.order_info ? (
            <>
              <div className={`w-full h-auto flex flex-col gap-1 text-sm`}>
                <div className="text-lg font-semibold">Sender</div>
                <div>Name : {trackData?.order_info?.parcel?.sender.name}</div>
                <div>Phone : {trackData?.order_info?.parcel?.sender.phone}</div>
                <div>Email : {trackData?.order_info?.parcel?.sender.email}</div>
                <div>
                  From : {trackData?.order_info?.parcel?.sender.address}
                </div>
                <div>weight: {trackData?.order_info?.parcel?.weight}</div>
              </div>
              <div className={`w-full h-auto flex flex-col gap-1  text-sm`}>
                <div className="text-lg font-semibold">Reciver</div>
                <div>Name : {trackData?.order_info?.parcel?.reciver.name}</div>
                <div>
                  Phone : {trackData?.order_info?.parcel?.reciver.phone}
                </div>
                <div>
                  Email : {trackData?.order_info?.parcel?.reciver.email}
                </div>
                <div>
                  to :{" "}
                  {trackData?.order_info?.parcel?.reciver?.address?.address}
                </div>
                <div>weight: {trackData?.order_info?.parcel?.weight}</div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="w-full h-auto flex lg:flex-row flex-col gap-2">
          <div className="w-full lg:w-[35%] col-span-1 h-auto pb-5">
            {trackData?.order_info ? (
              <div className="w-full h-auto pb-4 pr-4">
                <h1 className="text-lg font-semibold pb-4">
                  Shipment Item List
                </h1>
                <div className="w-full lg:h-[100px] overflow-auto scrollbar">
                  <Table className="w-auto">
                    <TableBody className="w-auto">
                      {trackData?.order_info?.parcel?.item?.list.map(
                        (item, index) => (
                          <TableRow key={index} className="w-auto">
                            <TableCell className="w-auto">
                              {index + 1}
                            </TableCell>
                            <TableCell className="w-auto">{item}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              ""
            )}

            <h1 className="text-lg font-semibold pb-8">Shipment Update</h1>
            <div className="w-full h-auto">
              <div className="flex flex-col  text-gray-50">
                {["pickup_bd", "inforeceived", "transit", "delivered"].map(
                  (status) => {
                    const item = [
                      ...(trackData?.track_info?.own_tracking_info
                        ?.tracking_info || []),
                      ...(trackData?.track_info?.own_tracking_info
                        ?.courier_tracking !=null &&
                      trackData.track_info.own_tracking_info.courier_tracking
                        .length >= 0
                        ? trackData.track_info.own_tracking_info.courier_tracking[0]?.origin_info?.trackinfo?.toReversed()
                        : []),
                    ]
                      .reverse()
                      .find(
                        (oItem) => oItem?.checkpoint_delivery_status === status
                      );
                      
                    return (
                      <ShipmentTrackParcelLocationBox
                        key={status}
                        item={item || null} // Pass item or null if not found
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[65%] col-span-2 ">
            <h1 className="text-lg font-semibold pb-4">
              Shipment Travel History
            </h1>
            <div className="w-full h-auto flex flex-col gap-3 ">
              <div className=" flex sm:gap-2 flex-col sm:flex-row font-medium text-base item-center sm:h-[50px]">
                <h1 className="sm:w-[250px]">MM-DD-YY{" - "}</h1>
                <p className="sm:w-[320px] text-sm font-normal text-left">
                  Description {" - "}
                </p>
                <h1 className="sm:w-[230px] text-right">Location</h1>
              </div>
              {[
                ...(trackData?.track_info?.own_tracking_info?.tracking_info ||
                  []),
                ...(trackData?.track_info?.own_tracking_info
                  ?.courier_tracking &&
                trackData.track_info.own_tracking_info.courier_tracking.length >
                  0
                  ? trackData.track_info.own_tracking_info.courier_tracking[0]?.origin_info?.trackinfo?.toReversed()
                  : []),
              ]?.map((item, i) => (
                <div
                  key={i}
                  className=" flex sm:gap-2 flex-col sm:flex-row font-medium text-base item-center"
                >
                  <h1 className="sm:w-[250px]">
                    {new Date(
                      item?.checkpoint_date?.toLocaleString()
                    )?.toLocaleDateString()}{" "}
                    {" - "}
                  </h1>
                  <p className="sm:w-[320px] text-sm font-normal text-left">
                  {replaceCourierWithFinex(item?.tracking_detail)}
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
    </div>
  );
};
