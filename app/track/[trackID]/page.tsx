"use client";

import ShipmentTrackingBox from "@/components/Track/ShipmentTrackingBox";
import { ShipmentTrackingDetails } from "@/components/Track/ShipmentTrackingDetails";
import ShipmentTrackingFeedBack from "@/components/Track/ShipmentTrackingFeedBack";
import Head from "next/head";
import { useParams } from "next/navigation";

const ShipmentTrack = () => {
  const searchParams = useParams();
  const trackID = Array.isArray(searchParams.trackID)
    ? searchParams.trackID[0]
    : searchParams.trackID;

  return (
    <div className="px-2">
      <Head>
        <title>Finex - {searchParams.trackID} Track</title>
      </Head>
      <ShipmentTrackingBox isTrackPage={false} />
      <ShipmentTrackingDetails trackID={trackID} />
      <ShipmentTrackingFeedBack />
    </div>
  );
};
export default ShipmentTrack;
