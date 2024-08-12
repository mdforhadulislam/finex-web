"use client";
import { LoadingContext } from "@/context/LoadingContext";
import {
  deleteRequestSend,
  getRequestSend,
  USER_ACCOUNT_API,
  USER_ACCOUNT_PHONE,
} from "@/data/ApiMethod";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import AdminSashBoardStaffListSectionBox from "./AdminSashBoardStaffListSectionBox";

const AdminDashBoardStaffListSection = () => {
  const router = useRouter();
  const [allStaff, setAllStaff] = useState([]);
  const loading = useContext(LoadingContext);

  useEffect(() => {
    getRequestSend(USER_ACCOUNT_API).then((res) => {
      if (res.status == 200) {
        setAllStaff(res.data.filter((user) => user.role == "staff"));
      }
    });
  }, []);
  return (
    <div className="w-full h-auto p-2">
      <div className="w-full h-auto flex flex-col gap-3">
        {allStaff.map((sUser) => (
          <div key={sUser._id} className="w-full h-auto relative">
            <AdminSashBoardStaffListSectionBox staffData={sUser} />
            <div className="flex gap-2 absolute right-1 z-10 top-[5%] flex-row">
              <IoEyeOutline
                className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
                onClick={() => {
                  router.push(`/admin/staff/${sUser?.phone}/`);
                }}
              />
              <MdDeleteOutline
                className="w-8 h-8 p-1 text-red-600 hover:bg-gray-100 rounded-md"
                onClick={() => {
                  loading.loadingStart();
                  deleteRequestSend(USER_ACCOUNT_PHONE(sUser?.phone)).then(
                    (res) => {
                      if (res.status == 200) {
                        toast.success(res.message);
                        getRequestSend(USER_ACCOUNT_API).then((res) => {
                          loading.loadingEnd();
                          if (res.status == 200) {
                            setAllStaff(
                              res.data.filter((user) => user.role == "staff")
                            );
                          }
                        });
                      } else {
                        loading.loadingEnd();
                        toast.error(res.message);
                      }
                    }
                  );
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashBoardStaffListSection;
