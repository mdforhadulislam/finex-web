import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { LOGOUT_API, postRequestSend } from "@/data/ApiMethod";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

const DropDownMenu = ({setIsProfileClick}) => {
  const loading = useContext(LoadingContext);
  const authContext = useContext(AuthContext);


  
  const logoutHandler = () => {
    loading.loadingStart()
    postRequestSend(LOGOUT_API, { authorization: authContext.token }).then(
      (res) => {
        
    loading.loadingEnd()
        if (res.status === 200) {
          authContext.logoutHandler();
          toast.success(res.message);
          setIsProfileClick(false);
        } else {
          setIsProfileClick(false);
          toast.error(res.message);
        }
      }
    );
  };
  return (
    <div
      id="dropdownAvatar"
      className="z-10 absolute top-[270px] lg:right-3 right-2 lg:top-[65px]  bg-white divide-y divide-gray-100 rounded-lg  shadow-4xl w-44 border "
    >
      <ul
        class="py-2 text-sm text-gray-700 "
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <IsEnglish>
            <Link
              href={"/dashboard"}
              class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Dashboard
            </Link>
          </IsEnglish>
          <IsBangla>
            <Link
              href={"/dashboard"}
              class="block px-4 py-2 hover:bg-gray-100 cursor-pointer bfont text-xl"
            >
              ড্যাশবোর্ড
            </Link>
          </IsBangla>
        </li>
        <li>
          <IsEnglish>
            <Link
              href={"/auth/settings"}
              class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Settings
            </Link>
          </IsEnglish>
          <IsBangla>
            <Link
              href={"/auth/settings"}
              class="block px-4 py-2 hover:bg-gray-100 cursor-pointer  bfont text-xl"
            >
              সেটিংস্‌
            </Link>
          </IsBangla>
        </li>
        <li onClick={logoutHandler}>
          <IsEnglish>
            <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </span>
          </IsEnglish>
          <IsBangla>
            <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer  bfont text-xl">
              লগআউট
            </span>
          </IsBangla>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
