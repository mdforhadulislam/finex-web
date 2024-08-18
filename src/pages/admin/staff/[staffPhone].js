"use client"; // Indicates that this file should be processed by the client-side renderer

import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading
import { useRouter } from "next/router"; // Importing useRouter hook from Next.js for routing
import React, { useContext, useEffect, useState } from "react"; // Importing React hooks and utilities
import Profile from "@/public/profile.svg"; // Importing a default profile image
import {
  getRequestSend, // Importing method to handle GET requests
  ORDER_API, // API endpoint for orders
  PICKUP_API, // API endpoint for pickups
  putRequestSend,
  USER_ACCOUNT_API, // Importing method to handle PUT requests
  USER_ACCOUNT_PHONE, // Helper function to construct API endpoint for user account
} from "@/data/ApiMethod"; // Importing API methods from a custom file
import InputBox from "@/utils/InputBox"; // Importing a custom input box component
import { MdOutlineFileDownload } from "react-icons/md"; // Importing file download icon from react-icons
import { LoadingContext } from "@/context/LoadingContext"; // Importing context for managing loading state
import { toast } from "react-toastify"; // Importing toast for notifications
import AdminDashBoardPickupListViewPopup from "@/components/Admin/AdminDashBoardPickupListViewPopup"; // Importing a component for viewing pickup details
import AdminDashBoardPickupListBox from "@/components/Admin/AdminDashBoardPickupListBox"; // Importing a component for displaying pickup list
import { ModalContext } from "@/context/ModalContext"; // Importing context for managing modal state
import AdminDashBoardOrderCreatedPopup from "@/components/Admin/AdminDashBoardOrderCreatedPopup"; // Importing a component for viewing order details
import { IoEyeOutline } from "react-icons/io5"; // Importing eye icon for viewing details
import AdminDashBoardOrderListSectionBox from "@/components/Admin/AdminDashBoardOrderListSectionBox"; // Importing a component for displaying order list
import { AuthContext } from "@/context/AuthContext";

const StaffDataView = () => {
  // Main component function
  const router = useRouter(); // Getting router instance for accessing route parameters
  const { staffPhone } = router.query; // Extracting staffPhone from query parameters

  const formData = new FormData();

  const loading = useContext(LoadingContext); // Accessing loading context to manage loading state

  const modal = useContext(ModalContext); // Accessing modal context to manage modal state

  // State hooks for various data and UI states
  const [allPickup, setAllPickup] = useState([]);
  const [selectedPickupData, setSelectedPickupData] = useState({});
  const [orderData, setOrderData] = useState([]);
  const [viewOrderData, setViewOrderData] = useState({});
  const [profileImage, setProfileImage] = useState("");
  const [nidFront, setNidFront] = useState("");
  const [nidBack, setNidBack] = useState("");
  const [staffData, setStaffData] = useState({});

  const uploadUpdatedHandler = async () => {
    loading.loadingStart();
    try {
      const response = await putRequestSend(
        `${USER_ACCOUNT_API}/?phone=${staffPhone}`,
        {},
        staffData
      );
      if (response.status === 200) {
        setStaffData(response.data);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    } finally {
      loading.loadingEnd();
    }
  };

  const [tab, setTab] = useState({
    isEdit: true,
    isPickup: false,
    isOrder: false,
  });

  // Fetch data when component mounts
  useEffect(() => {
    const fetchstaffData = async () => {
      loading.loadingStart();
      try {
        const response = await getRequestSend(USER_ACCOUNT_PHONE(staffPhone));
        if (response.status === 200) {
          setStaffData({
            name: response.data.name,
            phone: response.data.phone,
            email: response.data.email,
            role: response.data.role,
          });
          setProfileImage(response.data?.profile);
          setNidFront(response.data?.nationalID?.front);
          setNidBack(response.data?.nationalID?.back);
        }
      } catch (error) {
        console.log(error);

        toast.error("An error occurred while fetching user data.");
      } finally {
        loading.loadingEnd();
      }
    };

    fetchstaffData(); // Fetch user data

    getRequestSend(PICKUP_API).then((res) => {
      if (res.status == 200) {
        setAllPickup(res.data); // Set pickup data
      }
    });

    getRequestSend(ORDER_API).then((res) => {
      if (res.status == 200) {
        setOrderData(res.data); // Set order data
      }
    });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="w-full h-auto p-3 ">
      <div className="w-full h-auto bg-defult transition-all duration-300 rounded-md p-5 md:flex-row flex-col flex items-center justify-between gap-2">
        <div className="w-full sm:w-auto h-auto flex flex-col sm:flex-row gap-5 sm:gap-3">
          <div className="w-full flex justify-center items-center sm:block sm:w-auto h-auto p-2 bg-white rounded-md">
            <Image
              width={180}
              height={180}
              className="w-[180px] h-[180px] rounded-md shadow-3xl"
              src={profileImage || Profile} // Display profile image
              alt="Profile Image"
            />
          </div>
          <div className="w-auto h-auto flex flex-col items-start font-sans text-white mb-5">
            <h1 className="text-2xl font-bold text-white uppercase">
              {/* // Display staff name */}
              {staffData?.name || "User Name"}
            </h1>
            <div className="w-full md:w-auto flex-col mt-3">
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Role</span>:
                {/* // Display staff role */}
                <span>{staffData?.role || "N/A"}</span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Email</span>:
                {/* // Display staff email */}
                <span>{staffData?.email || "N/A"}</span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Phone</span>:
                {/* // Display staff phone */}
                <span>{staffData?.phone || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pt-4">
        <div className="sm:hidden">
          <select
            className="w-full px-3 py-[6px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            onChange={(e) => {
              if (e.target.value == "Edit Profile") {
                setTab({ isEdit: true, isPickup: false, isOrder: false }); // Switch to Edit Profile tab
              } else if (e.target.value == "All Pickup") {
                setTab({ isEdit: false, isPickup: true, isOrder: false }); // Switch to All Pickup tab
                // Fetch pickup data
                getRequestSend(PICKUP_API).then((res) => {
                  if (res.status == 200) {
                    setAllPickup(res.data);
                  }
                });
              } else if (e.target.value == "All Order") {
                setTab({ isEdit: false, isPickup: false, isOrder: true }); // Switch to All Order tab
                // Fetch order data
                getRequestSend(ORDER_API).then((res) => {
                  if (res.status == 200) {
                    setOrderData(res.data);
                  }
                });
              }
            }}
          >
            <option value={"Edit Profile"}>Edit Profile</option>
            <option value={"All Pickup"}>All Pickup</option>
            <option value={"All Order"}>All Order</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex ">
          <li
            className="w-full focus-within:z-10 cursor-pointer"
            onClick={() => {
              setTab({ isEdit: true, isPickup: false, isOrder: false }); // Switch to Edit Profile tab
            }}
          >
            <span className="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white border-r rounded-s-lg">
              Edit Profile
            </span>
          </li>
          <li
            className="w-full focus-within:z-10 cursor-pointer "
            onClick={() => {
              setTab({ isEdit: false, isPickup: true, isOrder: false }); // Switch to All Pickup tab
              // Fetch pickup data
              getRequestSend(PICKUP_API).then((res) => {
                if (res.status == 200) {
                  setAllPickup(res.data);
                }
              });
            }}
          >
            <span className="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white border-r">
              All Pickup
            </span>
          </li>
          <li
            className="w-full focus-within:z-10 cursor-pointer"
            onClick={() => {
              setTab({ isEdit: false, isPickup: false, isOrder: true }); // Switch to All Order tab
              // Fetch order data
              getRequestSend(ORDER_API).then((res) => {
                if (res.status == 200) {
                  setOrderData(res.data);
                }
              });
            }}
          >
            <span className="inline-block w-full p-2  bg-defult-button hover:bg-[#f78009] text-white  rounded-e-lg ">
              All Order
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full h-auto pt-4">
        {tab.isEdit && ( // Render Edit Profile tab content
          <div className="w-full h-auto flex flex-col gap-2">
            <div className="w-full h-auto flex gap-3 md:flex-row flex-col">
              <label htmlFor="profilePic">
                <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                  Profile
                </span>
                <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                  <input
                    type="file"
                    id="profilePic"
                    className="hidden"
                    onChange={(e) => {
                      loading.loadingStart();
                      const file = e.target.files[0];

                      if (file) {
                        formData.append("profile", e.target.files[0]);
                        fetch(USER_ACCOUNT_PHONE(staffPhone), {
                          method: "PUT",
                          body: formData,
                        })
                          .then((res) => res.json())
                          .then((res2) => {
                            loading.loadingEnd();
                            if (res2.status == 200) {
                              toast.success(res2.message);
                              getRequestSend(
                                USER_ACCOUNT_PHONE(staffPhone)
                              ).then((getData) => {
                                if (getData.status == 200) {
                                  setStaffData({
                                    name: getData.data.name,
                                    phone: getData.data.phone,
                                    email: getData.data.email,
                                    role: getData.data.role,
                                  });
                                  setProfileImage(getData.data?.profile);
                                  setNidFront(getData.data?.nationalID?.front);
                                  setNidBack(getData.data?.nationalID?.back);
                                }
                              });
                            } else {
                              toast.error(res2.message);
                            }
                          });
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={profileImage || Profile}
                    alt="Profile Pic"
                    className="w-36 h-36 border shadow-3xl rounded-md"
                  />
                </div>
              </label>

              <label htmlFor="nidFront">
                <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                  NID Front
                </span>
                <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                  <input
                    type="file"
                    id="nidFront"
                    className="hidden"
                    onChange={(e) => {
                      loading.loadingStart();
                      const file = e.target.files[0];

                      if (file) {
                        formData.append("nationalID.front", e.target.files[0]);
                        fetch(USER_ACCOUNT_PHONE(staffPhone), {
                          method: "PUT",
                          body: formData,
                        })
                          .then((res) => res.json())
                          .then((res2) => {
                            loading.loadingEnd();
                            if (res2.status == 200) {
                              toast.success(res2.message);
                              getRequestSend(
                                USER_ACCOUNT_PHONE(staffPhone)
                              ).then((getData) => {
                                if (getData.status == 200) {
                                  setStaffData({
                                    name: getData.data.name,
                                    phone: getData.data.phone,
                                    email: getData.data.email,
                                    role: getData.data.role,
                                  });
                                  setProfileImage(getData.data?.profile);
                                  setNidFront(getData.data?.nationalID?.front);
                                  setNidBack(getData.data?.nationalID?.back);
                                }
                              });
                            } else {
                              toast.error(res2.message);
                            }
                          });
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={nidFront || Profile}
                    alt="NID Front"
                    className="w-36 h-36 border shadow-3xl rounded-md"
                  />
                </div>
              </label>

              <label htmlFor="nidBack">
                <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                  NID Back
                </span>
                <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                  <input
                    type="file"
                    id="nidBack"
                    className="hidden"
                    onChange={(e) => {
                      loading.loadingStart();
                      const file = e.target.files[0];

                      if (file) {
                        formData.append("nationalID.back", e.target.files[0]);
                        fetch(USER_ACCOUNT_PHONE(staffPhone), {
                          method: "PUT",
                          body: formData,
                        })
                          .then((res) => res.json())
                          .then((res2) => {
                            loading.loadingEnd();
                            if (res2.status == 200) {
                              toast.success(res2.message);
                              getRequestSend(
                                USER_ACCOUNT_PHONE(staffPhone)
                              ).then((getData) => {
                                if (getData.status == 200) {
                                  setStaffData({
                                    name: getData.data.name,
                                    phone: getData.data.phone,
                                    email: getData.data.email,
                                    role: getData.data.role,
                                  });
                                  setProfileImage(getData.data?.profile);
                                  setNidFront(getData.data?.nationalID?.front);
                                  setNidBack(getData.data?.nationalID?.back);
                                }
                              });
                            } else {
                              toast.error(res2.message);
                            }
                          });
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={nidBack || Profile}
                    alt="NID Back"
                    className="w-36 h-36 border shadow-3xl rounded-md"
                  />
                </div>
              </label>
            </div>

            <InputBox
              title="Name"
              value={staffData.name}
              action={(e) =>
                setStaffData({ ...staffData, name: e.target.value })
              }
            />
            <InputBox
              title="Phone"
              value={staffData.phone}
              action={(e) =>
                setStaffData({ ...staffData, phone: e.target.value })
              }
            />
            <InputBox
              title="Email"
              value={staffData.email}
              action={(e) =>
                setStaffData({ ...staffData, email: e.target.value })
              }
            />

            <button
              className="inline-flex items-center p-1 py-2 px-[6px] bg-defult-button rounded-lg text-white shadow-3xl justify-center text-center mt-4 "
              onClick={uploadUpdatedHandler}
            >
              Update Profile
            </button>
          </div>
        )}
        {tab.isPickup && ( // Render All Pickup tab content
          <div className="w-full h-auto">
            <div className="w-full h-auto py-2 flex flex-col gap-3">
              {allPickup
                ?.filter((fItem) => fItem.isConfirm.staffPhone == staffPhone)
                ?.map((pickupData, index) => (
                  <AdminDashBoardPickupListBox
                    key={index}
                    pData={pickupData}
                    viewAction={() => {
                      setSelectedPickupData(pickupData); // Set selected pickup data
                      modal.open(); // Open modal to view pickup details
                    }}
                    staffPopup={true}
                  />
                ))}
              {allPickup?.filter(
                (fItem) => fItem.isConfirm.staffPhone == staffPhone
              )?.length == 0 && (
                <h1 className=" text-lg font-semibold text-center">
                  Not Found
                </h1>
              )}
            </div>

            <AdminDashBoardPickupListViewPopup
              pickupData={selectedPickupData} // Pass selected pickup data to the popup
            />
          </div>
        )}
        {tab.isOrder && ( // Render All Order tab content
          <div className="w-full h-auto">
            <div className="w-full flex align-middle items-center flex-col mt-3 p-3 gap-3">
              {orderData
                ?.filter((fItem) => fItem.creatorPhone == staffPhone)
                ?.map((item, index) => (
                  <div className="w-full h-auto relative" key={index}>
                    <AdminDashBoardOrderListSectionBox orderData={item} />

                    <div className="flex gap-2 absolute right-1 z-10 top-[3%] flex-col">
                      <IoEyeOutline
                        className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
                        onClick={() => {
                          setViewOrderData(item); // Set view order data
                          modal.open(); // Open modal to view order details
                        }}
                      />
                    </div>
                  </div>
                ))}
              {orderData?.filter((fItem) => fItem.creatorPhone == staffPhone)
                ?.length == 0 && (
                <h1 className=" text-lg font-semibold text-center">
                  Not Found
                </h1>
              )}
            </div>
            <AdminDashBoardOrderCreatedPopup
              orderData={viewOrderData} // Pass view order data to the popup
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDataView;
