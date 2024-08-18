"use client";
import UserDashBoardHomeHeaderSection from "@/components/Users/UserDashBoardHomeHeaderSection";
import UserDashBoardHomeTrackSection from "@/components/Users/UserDashBoardHomeTrackSection";
import { AuthContext } from "@/context/AuthContext";
import { postRequestSend, VISITOR_API } from "@/data/ApiMethod";
import { useContext, useEffect } from "react";

const UserDashboard = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.watchPosition(success, error);
      function success(pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;
        postRequestSend(
          VISITOR_API,
          {},
          {
            name: auth?.user?.name,
            phone: auth?.user?.phone,
            email: auth?.user?.email,
            location: {
              lat: lat,
              lng: lng,
              accuracy,
            },
          }
        );
      }
      function error(err) {
        if (err.code === 1) {
          alert("Please allow geolocation access");
        } else {
          alert("Cannot get current location");
        }
      }
    }
  }, []);

  return (
    <>
      <UserDashBoardHomeHeaderSection />
      <UserDashBoardHomeTrackSection />
    </>
  );
};

export default UserDashboard;
