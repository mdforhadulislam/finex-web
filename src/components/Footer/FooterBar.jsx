import Link from "next/link"; // Import Next.js Link component for client-side navigation
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"; // Import social media icons from react-icons
import Collapse from "./Collapse"; // Import the Collapse component for collapsible sections
import IsEnglish from "@/utils/IsEnglish"; // Import utility component for English text
import IsBangla from "@/utils/IsBangla"; // Import utility component for Bangla text
import { useContext } from "react"; // Import React's useContext hook for context access
import { LangugeContext } from "@/context/langugeContext"; // Import language context for managing language-based content
import Logo from "@/utils/Logo"; // Import utility component for the English logo
import LogoBn from "@/utils/LogoBn"; // Import utility component for the Bangla logo
import Head from "next/head";

// Footer links and social media details
const FooterLinks = {
  Service: [
    {
      title: "Export Air Freight",
      links: "/service",
      titleBn: "এক্সপোর্ট এয়ার ফ্রেইড",
    },
    {
      title: "Export Sea Freight",
      links: "/service",
      titleBn: "এক্সপোর্ট সী ফ্রেইড",
    },
    {
      title: "Import Air Freight",
      links: "/service",
      titleBn: "ইম্পোরট এয়ার ফ্রেইড",
    },
    {
      title: "Import Sea Freight",
      links: "/service",
      titleBn: "ইম্পোরট সী ফ্রেইড",
    },
    {
      title: "Custom Clearance",
      links: "/service",
      titleBn: "কাস্টম ক্লিয়ারেঞ্ছ",
    },
  ],
  About: [
    {
      title: "About Company",
      links: "/about",
      titleBn: "আমাদের প্রতিষ্ঠান সম্পর্কে জানুন",
    },
    {
      title: "Our Team Member",
      links: "/about",
      titleBn: "আমাদের প্রতিষ্ঠানের সদস্য",
    },
  ],
  Support: [
    {
      title: "Help & Support",
      links: "/contact",
      titleBn: "সাহায্য এবং সহযোগীতা",
    },
    {
      title: "Trust & Safety",
      links: "/contact",
      titleBn: "আস্থা এবং নিরাপত্তা",
    },
  ],
  Social: [
    {
      title: "Facebook",
      titleBn: "ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস",
      links: "https://www.facebook.com/finex.int",
      icon: <FaFacebookF />,
      color: "text-[#3b5998]",
    },
    {
      title: "Instagram",
      titleBn: "ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস",
      links: "https://www.instagram.com/faster.in.ex",
      icon: <FaInstagram />,
      color: "text-[#e1306c]",
    },
    {
      title: "Twitter",
      titleBn: "ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস",
      links: "#",
      icon: <FaTwitter />,
      color: "text-[#1da1f2]",
    },
    {
      title: "Linkedin",
      titleBn: "ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস",
      links: "#",
      icon: <FaLinkedinIn />,
      color: "text-[#0077b5]",
    },
  ],
};

// FooterBar component
const FooterBar = () => {
  // Access language context
  const lang = useContext(LangugeContext);

  return (
    <footer className="container h-auto m-auto p-5 pb-0">
      <Head>
        <meta
          name="description"
          content="Faster International Express provides top-notch logistics solutions including air and sea freight services, custom clearance, and more."
        />
        <meta
          name="keywords"
          content="logistics, air freight, sea freight, custom clearance, shipping, import, export"
        />
        <meta
          property="og:title"
          content="Faster International Express - FINEX"
        />
        <meta
          property="og:description"
          content="Faster International Express provides top-notch logistics solutions including air and sea freight services, custom clearance, and more."
        />
        <meta
          name="twitter:title"
          content="Faster International Express - FINEX"
        />
        <meta
          name="twitter:description"
          content="Faster International Express provides top-notch logistics solutions including air and sea freight services, custom clearance, and more."
        />
      </Head>

      <div className="md:border-t py-16 text-[17px] text-gray-800">
        {/* Mobile version */}
        <div className="grid gap-2 md:hidden">
          {/* Collapse component for services section */}
          <Collapse
            title={`${lang.isEnglish ? "Our Service" : ""} ${
              lang.isBangla ? "আমাদের সেবা" : ""
            }`}
          >
            <div className="mt-2 space-y-2">
              {FooterLinks.Service.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla className={"bfont text-2xl hover:text-defult"}>
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </Collapse>
          {/* Collapse component for about section */}
          <Collapse
            title={`${lang.isEnglish ? "About Us" : ""} ${
              lang.isBangla ? "আমাদের সম্পর্কে" : ""
            }`}
          >
            <div className="mt-2 space-y-2">
              {FooterLinks.About.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla className={"bfont text-2xl hover:text-defult"}>
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </Collapse>
          {/* Collapse component for support section */}
          <Collapse
            title={`${lang.isEnglish ? "Support" : ""} ${
              lang.isBangla ? "সহযোগিতা" : ""
            }`}
          >
            <div className="mt-2 space-y-2">
              {FooterLinks.Support.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla className={"bfont text-2xl hover:text-defult"}>
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </Collapse>
          {/* Collapse component for contact section */}
          <Collapse
            title={`${lang.isEnglish ? "Contact Us" : ""} ${
              lang.isBangla ? "যোগাযোগ" : ""
            }`}
          >
            <>
              <div className="mt-2">
                <IsEnglish>
                  <p className="transition-colors duration-300 hover:text-defult">
                    <a href="tel:+8801577185840">Phone no: +880 1577-185840</a>{" "}
                    {/* English phone number */}
                  </p>
                </IsEnglish>
                <IsBangla>
                  <p className="transition-colors duration-300 hover:text-defult mt-2">
                    <a href="tel:+8801577185840" className="bfont text-2xl">
                      মোবাইল ফোনঃ +৮৮০ ১৫৭৭-১৮৫৮৪০
                    </a>{" "}
                    {/* Bangla phone number */}
                  </p>
                </IsBangla>

                <IsEnglish>
                  <p className="transition-colors duration-300 hover:text-defult mt-2">
                    Email: faster.in.ex@gmail.com {/* English email */}
                  </p>
                </IsEnglish>
                <IsBangla>
                  <p className="transition-colors duration-300 hover:text-defult bfont text-2xl">
                    মেইলঃ faster.in.ex@gmail.com {/* Bangla email */}
                  </p>
                </IsBangla>

                <IsEnglish>
                  <p className="transition-colors duration-300 hover:text-defult mt-2">
                    Location: Ground Floor, House-19, Road-12, Sector-01,
                    Uttora, Dhaka-1230, Bangladesh {/* English address */}
                  </p>
                </IsEnglish>
                <IsBangla>
                  <p className="transition-colors duration-300 hover:text-defult bfont text-2xl">
                    লোকেশনঃ গ্রাউন্ড ফ্লোর, হাউস-১৯, রোড-১২, সেক্তর-০১,
                    ঢাকা-১২৩০, বাংলাদেশ {/* Bangla address */}
                  </p>
                </IsBangla>
              </div>
              <div className="flex items-center pt-4 space-x-4 sm:mt-0">
                {FooterLinks.Social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.links}
                    className={`${item.color} w-8 aspect-square bg-white rounded-full shadow-md flex justify-center items-center`}
                  >
                    {item.icon} {/* Social media icon */}
                  </a>
                ))}
              </div>
            </>
          </Collapse>
        </div>

        {/* Desktop version */}
        <div className="grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 hidden md:grid">
          {/* Services section */}
          <div>
            <IsEnglish>
              <p className="font-semibold uppercase tracking-wide text-gray-800">
                Services
              </p>
            </IsEnglish>
            <IsBangla>
              <p className="font-semibold uppercase tracking-wide text-gray-800 bfont text-2xl">
                আমাদের সেবা
              </p>
            </IsBangla>

            <div className="mt-2 space-y-2">
              {FooterLinks.Service.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla
                    className={"text-2xl bfont text-gray-600 hover:text-defult"}
                  >
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </div>
          {/* About Us section */}
          <div>
            <IsEnglish>
              <p className="font-semibold uppercase tracking-wide text-gray-800">
                About Us
              </p>
            </IsEnglish>
            <IsBangla>
              <p className="font-semibold uppercase tracking-wide text-gray-800 bfont text-2xl">
                আমাদের সম্পর্কে
              </p>
            </IsBangla>

            <div className="mt-2 space-y-2">
              {FooterLinks.About.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla
                    className={"text-2xl bfont text-gray-600 hover:text-defult"}
                  >
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </div>
          {/* Support section */}
          <div>
            <IsEnglish>
              <p className="font-semibold uppercase tracking-wide text-gray-800">
                Support
              </p>
            </IsEnglish>
            <IsBangla>
              <p className="font-semibold uppercase tracking-wide text-gray-800 bfont text-2xl">
                সহযোগিতা
              </p>
            </IsBangla>

            <div className="mt-2 space-y-2">
              {FooterLinks.Support.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 hover:text-defult"
                >
                  <IsEnglish>{item.title}</IsEnglish> {/* English title */}
                  <IsBangla
                    className={"text-2xl bfont text-gray-600 hover:text-defult"}
                  >
                    {item.titleBn}
                  </IsBangla>{" "}
                  {/* Bangla title */}
                </Link>
              ))}
            </div>
          </div>
          {/* Contact Us section */}
          <div>
            <IsEnglish>
              <p className="font-semibold uppercase tracking-wide text-gray-800">
                Contact Us
              </p>
            </IsEnglish>
            <IsBangla>
              <p className="font-semibold uppercase tracking-wide text-gray-800 bfont text-2xl">
                যোগাযোগ
              </p>
            </IsBangla>
            <div className="mt-2 text-sm">
              <IsEnglish>
                <p className="transition-colors duration-300 hover:text-defult text-[17px] mt-2">
                  <a href="tel:+8801577185840">Phone no: +880 1577-185840</a>{" "}
                  {/* English phone number */}
                </p>
              </IsEnglish>
              <IsBangla>
                <p className="transition-colors duration-300 hover:text-defult">
                  <a
                    href="tel:+8801577185840"
                    className="bfont text-2xl text-gray-600"
                  >
                    মোবাইল ফোনঃ +৮৮০ ১৫৭৭-১৮৫৮৪০
                  </a>{" "}
                  {/* Bangla phone number */}
                </p>
              </IsBangla>

              <IsEnglish>
                <p className="transition-colors duration-300 hover:text-defult text-[17px] mt-2">
                  Email: faster.in.ex@gmail.com {/* English email */}
                </p>
              </IsEnglish>
              <IsBangla>
                <p className="transition-colors duration-300 hover:text-defult bfont text-2xl text-gray-600">
                  মেইলঃ faster.in.ex@gmail.com {/* Bangla email */}
                </p>
              </IsBangla>

              <IsEnglish>
                <p className="transition-colors duration-300 hover:text-defult text-[17px] mt-2">
                  Location: Ground Floor, House-19, Road-12, Sector-01, Uttora,
                  Dhaka-1230, Bangladesh {/* English address */}
                </p>
              </IsEnglish>
              <IsBangla>
                <p className="transition-colors duration-300 hover:text-defult bfont text-2xl text-gray-600">
                  লোকেশনঃ গ্রাউন্ড ফ্লোর, হাউস-১৯, রোড-১২, সেক্তর-০১, ঢাকা-১২৩০,
                  বাংলাদেশ {/* Bangla address */}
                </p>
              </IsBangla>
            </div>

            <div className="flex items-center pt-4 space-x-4 sm:mt-0">
              {FooterLinks.Social.map((item, idx) => (
                <a
                  key={idx}
                  href={item.links}
                  className={`${item.color} w-8 aspect-square bg-white rounded-full shadow-md flex justify-center items-center`}
                >
                  {item.icon} {/* Social media icon */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom section */}
      <div className="flex items-center justify-between align-middle py-2 border-t flex-row">
        <IsEnglish className={"py-4 flex justify-center w-[40%]"}>
          <Logo
            imageStyle={
              "w-[50px] h-[50px] sm:w-[60px] sm:w-[70px] lg:w-[80px] sm:h-[60px] sm:h-[70px] lg:h-[80px]"
            }
            isFooter={true} // Add logo specific for footer
          />
        </IsEnglish>
        <IsBangla className={"py-4 flex justify-center w-[40%]"}>
          <LogoBn
            imageStyle={
              "w-[50px] h-[50px] sm:w-[60px] sm:w-[70px] lg:w-[80px] sm:h-[60px] sm:h-[70px] lg:h-[80px]"
            }
            isFooter={true} // Add logo specific for footer
          />
        </IsBangla>

        <IsEnglish className="text-sm w-full text-center">
          ©<Link href="/">`Faster International Express - FINEX`</Link> All
          right reserved. {/* English copyright */}
        </IsEnglish>

        <IsBangla className="w-full text-center bfont text-xl">
          ©
          <Link href="/" className="bfont text-xl">
            `ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স`
          </Link>{" "}
          সমস্ত অধিকার সংরক্ষিত. {/* Bangla copyright */}
        </IsBangla>

        <div />
      </div>
    </footer>
  );
};

export default FooterBar;
