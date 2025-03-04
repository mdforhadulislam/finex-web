import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import ContactBodyFromSection from "./ContactBodyFromSection";

const ContactBodySection = () => {
  return (
    <div className="w-full h-auto">
      {/* Main container for the contact section */}
      <div className="lg:container m-auto p-4 sm:p-2 sm:py-14">
        <div className="w-full h-auto flex gap-4 md:flex-row flex-col">
          {/* Left side - Contact form and introductory text */}
          <div className="w-full h-auto p-4 flex flex-col items-center align-middle justify-center">
            {/* English content */}
            <IsEnglish className="w-full h-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Get in Touch
              </h1>
              <p className="text-base font-normal text-justify py-3">
              Have questions or need assistance with air freight or customs clearance?  <br />
              Finex is here to help! Contact us via phone, email, or our online form for expert support. Our team is ready to provide tailored solutions to meet your shipping and logistics needs. Let’s connect today!
              </p>
            </IsEnglish>

            {/* Bangla content */}
            <IsBangla className="w-full h-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bfont">
                যোগাযোগ করুন
              </h1>
              <p className="text-justify py-3 bfont text-2xl leading-6">
              আপনার কি প্রশ্ন আছে বা এয়ার ফ্রেইট ও কাস্টমস ক্লিয়ারেন্স নিয়ে সহায়তা দরকার? ফিনেক্স সবসময় আপনাকে সাহায্য করতে প্রস্তুত! ফোন, ইমেইল বা আমাদের অনলাইন ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। আপনার শিপিং ও লজিস্টিক চাহিদা অনুযায়ী আমরা সেরা সমাধান প্রদান করি। আজই যোগাযোগ করুন!
              </p>
            </IsBangla>

            {/* Contact form component */}
            <div className="w-full h-auto py-3">
              <ContactBodyFromSection />
            </div>
          </div>

          {/* Right side - Google Maps embed */}
          <div className="w-full h-auto p-4">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.3683760269063!2d90.39745618503241!3d23.78490129063545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001b793559%3A0xfeaae069a5aa15!2sFASTER%20INTERNATIONAL%20EXPRESS!5e0!3m2!1sen!2sbd!4v1741102980508!5m2!1sen!2sbd"
              width={600}
              height={450}
              loading="lazy"
              className="w-full h-full"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBodySection;
