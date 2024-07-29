import { AuthContext } from "@/context/AuthContext";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Link from "next/link";
import { useContext } from "react";

const DropDownMenu = ({ isProfileClick, setIsProfileClick }) => {
  const authContext = useContext(AuthContext);

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
        <li>
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
