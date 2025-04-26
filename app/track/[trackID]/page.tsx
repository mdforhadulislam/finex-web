"use client";

import ShipmentTrackingBox from "@/components/Track/ShipmentTrackingBox";
import { ShipmentTrackingDetails } from "@/components/Track/ShipmentTrackingDetails";
import ShipmentTrackingFeedBack from "@/components/Track/ShipmentTrackingFeedBack";
import { useParams } from "next/navigation";
import GoogleAnalytics from "@/utils/GoogleAnalytics"

const ShipmentTrack = () => {
  const searchParams = useParams();
  const trackID = Array.isArray(searchParams.trackID)
    ? searchParams.trackID[0]
    : searchParams.trackID;

  return (
    <div className="px-2">
      <GoogleAnalytics/>
      <ShipmentTrackingBox isTrackPage={false} />
      <ShipmentTrackingDetails trackID={trackID} />
      <ShipmentTrackingFeedBack />
    </div>
  );
};
export default ShipmentTrack;
