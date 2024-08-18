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
import { VscFeedback } from "react-icons/vsc";

const DragBar = ({ isOpen, setIsOpen }) => {
  const authContext = useContext(AuthContext);
  const loading = useContext(LoadingContext);

  const handleLogout = () => {
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
  };

  const roleButtons = {
    admin: [
      { title: "Dashboard", link: "/admin", icon: LuLayoutDashboard },
      { title: "Pickup Request", link: "/admin/pickup/", icon: GiCardPickup },
      { title: "Parcel Order", link: "/admin/order/", icon: FiBox },
      { title: "Track Parcel", link: "/admin/track/", icon: FiBox },
      {
        title: "Profile Setting",
        link: "/admin/setting",
        icon: GrUserSettings,
      },
      { title: "Staff", link: "/admin/staff", icon: AiOutlineUserAdd },
      { title: "Contact", link: "/admin/contact", icon: RiContactsLine },
      { title: "Site User", link: "/admin/site-user", icon: AiOutlineUserAdd },
      { title: "Site Data Update", link: "/admin/site-data", icon: MdWeb },
      { title: "Accounts", link: "/admin/account", icon: MdAccountBalance },
      { title: "Feedback", link: "/admin/feedback", icon: VscFeedback },
    ],
    user: [
      { title: "Dashboard", link: "/user", icon: LuLayoutDashboard },
      { title: "Pickup Request", link: "/user/pickup", icon: GiCardPickup },
      { title: "Parcel Order", link: "/user/order", icon: FiBox },
      { title: "Track Parcel", link: "/user/track", icon: FiBox },
      { title: "Profile Setting", link: "/user/setting", icon: GrUserSettings },
    ],
    staff: [
      { title: "Dashboard", link: "/staff", icon: LuLayoutDashboard },
      { title: "Pickup Request", link: "/staff/pickup/", icon: GiCardPickup },
      { title: "Parcel Order", link: "/staff/order/", icon: FiBox },
      { title: "Track Parcel", link: "/staff/track/", icon: FiBox },
      { title: "Accounts", link: "/staff/account/", icon: MdAccountBalance },
      { title: "Profile Setting", link: "/staff/setting/", icon: GrUserSettings },
    ],
  };

  const currentRoleButtons = roleButtons[authContext?.user?.role] || [];

  return (
    <div
      id="drawer-swipe"
      className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-50 shadow-4xl rounded-t-lg transition-transform left-0 right-0 ${
        isOpen ? "transform-none bottom-[0vh]" : "translate-y-full bottom-[4vh]"
      }`}
    >
      {/* click bar */}
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 "></span>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
        {currentRoleButtons.map(({ title, link, icon: Icon }) => (
          <DragButton key={title} title={title} link={link}>
            <Icon className="inline w-8 h-8 text-defult" />
          </DragButton>
        ))}
        <DragButton title={"LogOut"} link={"#"} onClick={handleLogout}>
          <LuLogOut className="inline w-8 h-8 text-defult" />
        </DragButton>
      </div>
    </div>
  );
};

export default DragBar;
