"use client"; // Indicates that this file should be processed by the client-side renderer

import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading
import { useRouter } from "next/router"; // Importing useRouter hook from Next.js for routing
import React, { useContext, useEffect, useState } from "react"; // Importing React hooks and utilities
import Profile from "@/public/profile.svg"; // Importing a default profile image
import {
  getRequestSend, // Importing method to handle GET requests
  ORDER_API, // API endpoint for orders
  PICKUP_API, // API endpoint for pickups
  putRequestSend, // Importing method to handle PUT requests
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

const StaffDataView = () => {
  // Main component function
  const router = useRouter(); // Getting router instance for accessing route parameters
  const { staffPhone } = router.query; // Extracting staffPhone from query parameters
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
  const [staffData, setstaffData] = useState({});

  // Handler function for updating profile information
  const uploadUpdatedHandler = async () => {
    loading.loadingStart(); // Start loading indicator
    try {
      const response = await putRequestSend(
        USER_ACCOUNT_PHONE(staffPhone), // Endpoint to update user profile
        {},
        staffData // Updated staff data
      );

      if (response.status === 200) {
        toast.success(response.message); // Show success message
        // Fetch updated staff data
        getRequestSend(USER_ACCOUNT_PHONE(staffPhone)).then((res) => {
          if (res.status == 200) {
            loading.loadingEnd(); // End loading indicator
            setstaffData({
              name: res.data.name,
              phone: res.data.phone,
              role: res.data.role,
              email: res.data.email,
            });
            setProfileImage(res.data?.profile);
            setNidFront(res.data?.nationalID?.front);
            setNidBack(res.data?.nationalID?.back);
          }
        });
      } else {
        toast.error(response.message); // Show error message
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile."); // Show error message if an exception occurs
    } finally {
      loading.loadingEnd(); // End loading indicator
    }
  };

  const [tab, setTab] = useState({
    isEdit: true,
    isPickup: false,
    isOrder: false,
  });

  // Fetch data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      loading.loadingStart(); // Start loading indicator
      getRequestSend(USER_ACCOUNT_PHONE(staffPhone)).then((res) => {
        if (res.status == 200) {
          loading.loadingEnd(); // End loading indicator
          setstaffData({
            name: res.data.name,
            phone: res.data.phone,
            role: res.data.role,
            email: res.data.email,
          });
          setProfileImage(res.data?.profile);
          setNidFront(res.data?.nationalID?.front);
          setNidBack(res.data?.nationalID?.back);
        }
      });
    };

    fetchUserData(); // Fetch user data

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
              {staffData.name || "User Name"} 
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
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = async () => {
                          loading.loadingStart(); // Start loading indicator
                          try {
                            const response = await putRequestSend(
                              USER_ACCOUNT_PHONE(staffPhone), // Endpoint to update profile
                              {},
                              {
                                profile: reader.result, // Updated profile image
                              }
                            );

                            if (response.status === 200) {
                              setProfileImage(reader.result); // Update profile image state
                              toast.success(response.message); // Show success message
                            } else {
                              toast.error(response.message); // Show error message
                            }
                          } catch (error) {
                            toast.error(
                              "An error occurred while updating the profile." // Show error message if an exception occurs
                            );
                          } finally {
                            loading.loadingEnd(); // End loading indicator
                          }
                        };
                        reader.readAsDataURL(file); // Read file as data URL
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={profileImage || Profile} // Display profile image
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
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = async () => {
                          loading.loadingStart(); // Start loading indicator
                          try {
                            const response = await putRequestSend(
                              USER_ACCOUNT_PHONE(staffPhone), // Endpoint to update NID front
                              {},
                              {
                                nationalID: {
                                  front: reader.result, // Updated NID front image
                                  back: nidBack, // Retain existing NID back image
                                },
                              }
                            );

                            if (response.status === 200) {
                              setNidFront(reader.result); // Update NID front image state
                              toast.success(response.message); // Show success message
                            } else {
                              toast.error(response.message); // Show error message
                            }
                          } catch (error) {
                            toast.error(
                              "An error occurred while updating the profile." // Show error message if an exception occurs
                            );
                          } finally {
                            loading.loadingEnd(); // End loading indicator
                          }
                        };
                        reader.readAsDataURL(file); // Read file as data URL
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={nidFront || Profile} // Display NID front image
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
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = async () => {
                          loading.loadingStart(); // Start loading indicator
                          try {
                            const response = await putRequestSend(
                              USER_ACCOUNT_PHONE(staffPhone), // Endpoint to update NID back
                              {},
                              {
                                nationalID: {
                                  front: nidFront, // Retain existing NID front image
                                  back: reader.result, // Updated NID back image
                                },
                              }
                            );

                            if (response.status === 200) {
                              setNidBack(reader.result); // Update NID back image state
                              toast.success(response.message); // Show success message
                            } else {
                              toast.error(response.message); // Show error message
                            }
                          } catch (error) {
                            toast.error(
                              "An error occurred while updating the profile." // Show error message if an exception occurs
                            );
                          } finally {
                            loading.loadingEnd(); // End loading indicator
                          }
                        };
                        reader.readAsDataURL(file); // Read file as data URL
                      }
                    }}
                  />
                  <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                  <Image
                    width={150}
                    height={150}
                    src={nidBack || Profile} // Display NID back image
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
                setstaffData({ ...staffData, name: e.target.value })
              } // Input for staff name
            />
            <InputBox
              title="Phone"
              value={staffData.phone}
              action={(e) =>
                setstaffData({ ...staffData, phone: e.target.value })
              } // Input for staff phone
            />
            <InputBox
              title="Email"
              value={staffData.email}
              action={(e) =>
                setstaffData({ ...staffData, email: e.target.value })
              } // Input for staff email
            />

            <button
              className="inline-flex items-center p-1 py-2 px-[6px] bg-defult-button rounded-lg text-white shadow-3xl justify-center text-center mt-4 "
              onClick={uploadUpdatedHandler} // Button to update profile
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
