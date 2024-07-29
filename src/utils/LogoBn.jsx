import Image from "next/image";
import Link from "next/link";
import LOGO_BN from "../public/logo-bn.png";
import LOGO_FOOTER_BN from "../public/logo-footer-bn.png";

const LogoBn = ({ link, imageStyle, isFooter = false }) => {
  return (
    <Link
      href={link || "/"}
      title={"ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স"}
      about={"ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স"}
      className={`w-auto flex items-center`}
    >
      <img
        className={`${imageStyle ? imageStyle : "w-[150px] h-[50px] "} `}
        src={isFooter ? LOGO_FOOTER_BN.src : LOGO_BN.src}
        alt="logo"
      />
    </Link>
  );
};

export default LogoBn;
