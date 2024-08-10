import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import DragButton from "./DragButton";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { GiCardPickup } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { MdAccountBalance, MdWeb } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { LoadingContext } from "@/context/LoadingContext";
import { LOGOUT_API, postRequestSend } from "@/data/ApiMethod";
import { toast } from "react-toastify";

const DragBar = ({ isOpen, setIsOpen }) => {
  const authContext = useContext(AuthContext);
  const loading = useContext(LoadingContext);

  return (
    <div
      id="drawer-swipe"
      className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-50 shadow-4xl rounded-t-lg transition-transform  left-0 right-0 ${
        isOpen
          ? "transform-none bottom-[0vh]"
          : "translate-y-full  bottom-[4vh]"
      }`}
    >
      {/* click bar  */}
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 "></span>
      </div>

      {authContext?.user?.role == "admin" && (
        <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
          <DragButton title={"Dashboard"} link={"/admin"}>
            <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Pickup Request"} link={"/admin/pickup/"}>
            <GiCardPickup className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Parcel Order"} link={"/admin/order/"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Track Parcel"} link={"/admin/track/"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Profile Setting"} link={"/admin/setting"}>
            <GrUserSettings className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Staff"} link={"/admin/staff"}>
            <AiOutlineUserAdd className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Contact"} link={"/user"}>
            <RiContactsLine className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Site User"} link={"/user"}>
            <AiOutlineUserAdd className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Site Data Update"} link={"/admin/site-data"}>
            <MdWeb className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Accounts"} link={"/site-data"}>
            <MdAccountBalance className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton
            title={"LogOut"}
            link={"#"}
            onClick={() => {
              loading.loadingStart();
              postRequestSend(LOGOUT_API, {
                authorization: authContext.token,
              }).then((res) => {
                loading.loadingEnd();
                if (res.status === 200) {
                  authContext.logoutHandler();
                  toast.success(res.message);
                } else {
                  toast.error(res.message);
                }
              });
            }}
          >
            <LuLogOut className="inline w-8 h-8 text-defult" />
          </DragButton>
        </div>
      )}

      {authContext?.user?.role == "user" && (
        <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
          <DragButton title={"Dashboard"} link={"/user"}>
            <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Pickup Request"} link={"/user/pickup"}>
            <GiCardPickup className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Parcel Order"} link={"/user/order"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Track Parcel"} link={"/user/track"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Profile Setting"} link={"/user/setting"}>
            <GrUserSettings className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton
            title={"LogOut"}
            link={"#"}
            onClick={() => {
              loading.loadingStart();
              postRequestSend(LOGOUT_API, {
                authorization: authContext.token,
              }).then((res) => {
                loading.loadingEnd();
                if (res.status === 200) {
                  authContext.logoutHandler();
                  toast.success(res.message);
                } else {
                  toast.error(res.message);
                }
              });
            }}
          >
            <LuLogOut className="inline w-8 h-8 text-defult" />
          </DragButton>
        </div>
      )}

      {authContext?.user?.role == "staff" && (
        <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
          <DragButton title={"Dashboard"} link={"/staff"}>
            <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Pickup Request"} link={"/setting"}>
            <GiCardPickup className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Parcel Order"} link={"/setting"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Track Parcel"} link={"/setting"}>
            <FiBox className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton title={"Profile Setting"} link={"/setting"}>
            <GrUserSettings className="inline w-8 h-8 text-defult" />
          </DragButton>

          <DragButton
            title={"LogOut"}
            link={"#"}
            onClick={() => {
              loading.loadingStart();
              postRequestSend(LOGOUT_API, {
                authorization: authContext.token,
              }).then((res) => {
                loading.loadingEnd();
                if (res.status === 200) {
                  authContext.logoutHandler();
                  toast.success(res.message);
                } else {
                  toast.error(res.message);
                }
              });
            }}
          >
            <LuLogOut className="inline w-8 h-8 text-defult" />
          </DragButton>
        </div>
      )}
    </div>
  );
};

export default DragBar;
