import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Head from "next/head";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const HelpAndSupport = () => {
  return (
    <>
       <Head>
        <title>Finex - Help And Support</title>

        <meta
          title="Finex - Help And Support"
          name="description"
          content="Faster International Express (Finex) is a trusted global logistics provider offering comprehensive shipping solutions tailored to businesses and individuals worldwide. We specialize in international shipping, air freight, sea freight, express delivery, and supply chain optimization, ensuring cost-effective and reliable cargo transport. Our services include door-to-door delivery, customs clearance, import-export logistics, cargo insurance, and real-time parcel tracking to guarantee a hassle-free shipping experience.

  With a strong presence in Surat and an extensive global delivery network, Finex provides fast and secure courier services, B2B and bulk shipping, and temperature-controlled freight solutions. Our expertise in customs brokerage, bonded warehousing, and multimodal logistics allows businesses to streamline their supply chains efficiently. We compare shipping rates from leading carriers like DHL, FedEx, and UPS, offering the best freight options at competitive prices.

  Whether you require same-day shipping, commercial cargo solutions, cross-border logistics, or e-commerce fulfillment, Finex ensures seamless transport with expert freight forwarding and customs handling. Our commitment to secure, time-critical, and cost-effective shipping makes us the preferred logistics partner for businesses and exporters in India and beyond. Trust Finex for professional, high-speed, and efficient global shipping services, backed by advanced tracking and tailored logistics solutions."
        />

        <meta
          name="keywords"
          content="Faster International Express, Finex International Express, international shipping, affordable shipping, global shipping solutions, air freight, sea freight, ocean freight, express delivery, courier services, parcel tracking, DHL shipping, FedEx rates, UPS express, international logistics, cargo services, supply chain solutions, export shipping, import export logistics, customs clearance, hassle-free logistics, freight forwarding, door-to-door delivery, same-day shipping, economy shipping, best shipping rates, Surat courier services, Surat logistics provider, fast international delivery, overseas shipping, shipping companies in India, global trade shipping, cargo insurance, real-time tracking, best air freight rates,  affordable shipping solutions, air freight, sea freight, custom clearance, export rates, courier services in Surat, DHL rates comparison, FedEx shipping quotes, UPS shipping options, professional shipping solutions, global shipping services, Surat logistics provider, fast delivery services, international export assistance, reliable freight forwarding, express courier services, door-to-door shipping, efficient customs clearance, international package tracking, Surat freight services, cost-effective global logistics,  shipping quote comparison, cross-border shipping, e-commerce logistics, commercial cargo solutions, bulk shipping, B2B shipping, cargo consolidation, international warehouse, global delivery network, expedited shipping, heavy freight solutions, perishable goods shipping, customs brokerage, duty-free shipping, supply chain optimization, import duty calculator, cargo manifest, multimodal logistics, freight insurance, ocean freight forwarding, LCL shipping, FCL container shipping, port-to-port shipping, bonded warehouse, last-mile delivery, temperature-controlled shipping, white-glove delivery, commercial import export, Surat export company, Surat air cargo, Surat sea freight, Surat courier tracking, express international shipping, premium courier services, fastest delivery service, trusted shipping partner, international order fulfillment, retail shipping solutions, logistics automation, same-day freight, airline cargo rates, customs clearance India, import-export documentation, global trade compliance, shipping regulations, HS code classification, certified freight forwarding, worldwide transport solutions, customs duty reduction, global e-commerce fulfillment, Surat logistics hub, Surat freight forwarding, Surat trade services, Surat export logistics, Surat business shipping, Surat cargo handling, Surat international trade, logistics support, freight network, Finex tracking, Finex courier, Finex parcel tracking, Finex shipment tracking, Finex international express, Finex freight services, Finex shipping solutions, Finex export services, Finex cargo solutions, Finex logistics provider, Finex warehouse solutions, Finex air cargo, Finex ocean freight, Finex customs clearance, Finex supply chain management, Finex global delivery, Finex B2B shipping, Finex e-commerce logistics, Finex door-to-door services, Finex trade compliance, Finex business shipping, Finex import-export services, Finex cross-border shipping, Finex international freight forwarding, Finex commercial shipping, Finex real-time tracking, Finex expedited services, Finex logistics automation, Finex shipping comparison, Finex cost-effective logistics, Finex retail shipping, Finex bonded warehouse, Finex last-mile delivery, Finex temperature-controlled freight, Finex custom brokerage, Finex heavy freight solutions, Finex shipping regulations, Finex cargo insurance, Finex certified logistics, Finex multimodal shipping, Finex global supply chain, Finex duty-free shipping, Finex premium courier, Finex economy shipping, Finex same-day freight, Finex bulk shipping, Finex B2B freight, Finex global trade compliance, Finex trade documentation,Finex International Courier,  Finex port-to-port shipping, Finex customs handling, Finex global express, Finex import duty solutions, Finex warehouse storage, Finex e-commerce order fulfillment, Finex commercial cargo, Finex competitive freight rates, Finex trusted logistics, Finex import-export trade, Finex international retail shipping, Finex cargo manifest, Finex express parcel services, Finex certified freight forwarding, Finex global transport solutions, Finex supply chain optimization, Finex bonded logistics, Finex multimodal transport, Finex specialized freight solutions, Finex temperature-controlled storage, Finex white-glove shipping, Finex customs processing, Finex overseas warehousing, Finex international cargo tracking, Finex high-value shipment, Finex international supplier logistics, Finex business-to-consumer shipping, Finex product fulfillment, Finex regulatory compliance, Finex import logistics, Finex cargo warehousing, Finex freight cost reduction, Finex global order fulfillment, Finex cargo packaging, Finex goods handling, Finex product distribution, Finex customs inspection, Finex global network, Finex retail fulfillment services, Finex online business shipping, Finex time-critical freight, Finex secure shipping, Finex air cargo security, Finex customs clearance brokerage, Finex import control, Finex corporate shipping, Finex fulfillment center, Finex on-demand shipping, Finex just-in-time logistics, Finex special handling services, Finex warehousing solutions, Finex cargo transport management, Finex freight consolidation, Finex distribution channels, Finex logistics partner, Finex service quality, Finex express freight solutions, Finex digital freight forwarding, Finex freight brokerage services, Finex procurement logistics, Finex digital shipping tracking, Finex advanced logistics solutions, Finex international trade support, Finex shipping carrier comparison, Finex certified customs broker, Finex global import network, Finex customs solutions, Finex smart logistics, Finex trade agreements compliance, Finex cargo insurance coverage, Finex priority freight services, Finex bulk order shipping, Finex fulfillment logistics, Finex cargo safety, Finex optimized supply chain, Finex global freight network, Finex warehouse management, Finex courier cost analysis, Finex logistics data tracking, Finex cost-efficient shipping, Finex advanced freight solutions, Finex risk-free cargo shipping, Finex regulated goods shipping, Finex temperature-sensitive freight, Finex wholesale logistics, Finex global freight comparison, Finex cost-effective freight solutions, Finex order tracking, Finex high-speed courier services, Finex tailored shipping solutions, Finex express warehousing, Finex business courier services, Finex secure freight transport, Finex air cargo logistics, Finex bonded freight, Finex special cargo handling, Finex expert freight solutions, Finex global logistics network, Finex intermodal freight, Finex warehousing efficiency, Finex streamlined shipping, Finex last-mile logistics, Finex cargo protection, Finex air express freight, Finex contract logistics, Finex professional courier services, Finex optimized transport routes, Finex freight cost comparison, Finex regulatory compliance shipping, Finex import-export carrier, Finex logistics advisory, Finex supply chain data analytics, Finex e-commerce supply chain, Finex international trade logistics, Finex retail supply chain solutions, Finex cargo storage solutions, Finex time-sensitive cargo shipping, Finex import handling, Finex automated logistics, Finex customs trade facilitation, Finex freight documentation support, Finex B2C logistics solutions, Finex competitive express services, Finex international business logistics, Finex Shippment Tracking,Faster International Express, Faster International Express - Finex,"
        />
        <meta property="og:title" content="Finex - Help And Support" />
        <meta
          property="og:description"
          content="Faster International Express (Finex) is a trusted global logistics provider offering comprehensive shipping solutions tailored to businesses and individuals worldwide. We specialize in international shipping, air freight, sea freight, express delivery, and supply chain optimization, ensuring cost-effective and reliable cargo transport. Our services include door-to-door delivery, customs clearance, import-export logistics, cargo insurance, and real-time parcel tracking to guarantee a hassle-free shipping experience.

  With a strong presence in Surat and an extensive global delivery network, Finex provides fast and secure courier services, B2B and bulk shipping, and temperature-controlled freight solutions. Our expertise in customs brokerage, bonded warehousing, and multimodal logistics allows businesses to streamline their supply chains efficiently. We compare shipping rates from leading carriers like DHL, FedEx, and UPS, offering the best freight options at competitive prices.

  Whether you require same-day shipping, commercial cargo solutions, cross-border logistics, or e-commerce fulfillment, Finex ensures seamless transport with expert freight forwarding and customs handling. Our commitment to secure, time-critical, and cost-effective shipping makes us the preferred logistics partner for businesses and exporters in India and beyond. Trust Finex for professional, high-speed, and efficient global shipping services, backed by advanced tracking and tailored logistics solutions."
        />
      </Head>
      <div
        className="w-full h-auto bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/bg.png)` }}
      >
        {/* Inner container with padding and alignment */}
        <div className="lg:container h-auto m-auto sm:p-2 p-4 py-20 sm:py-24">
          {/* English heading */}
          <IsEnglish className="">
            <h1 className="font-bold text-3xl sm:text-5xl text-white">
              HELP & SUPPORT
            </h1>
          </IsEnglish>

          {/* Bangla heading */}
          <IsBangla className="">
            <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
            সহযোগিতা এবং সমর্থন
            </h1>
          </IsBangla>

          {/* English breadcrumb navigation */}
          <IsEnglish className="">
            <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
              <Link href={"/"}>HOME</Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link href={"/"}>ABOUT</Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link href={"/about/why-finex"}>HELP & SUPPORT</Link>
            </span>
          </IsEnglish>

          {/* Bangla breadcrumb navigation */}
          <IsBangla className="">
            <span className="flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white">
              <Link href={"/"} className="bfont text-xl sm:text-3xl">
                হোম
              </Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link href={"/"} className="bfont text-xl sm:text-3xl">
                আমাদের সম্পর্কে
              </Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link
                href={"/about/why-finex"}
                className="bfont text-xl sm:text-3xl"
              >
                সহযোগিতা এবং সমর্থন
              </Link>
            </span>
          </IsBangla>
        </div>
      </div>
      <div className="w-full h-auto m-auto py-10">
        <div className="lg:container sm:p-2 p-4 px-2 pb-10 pt-0 m-auto">
          <IsEnglish className="">
            <p className="text-lg mb-6">
              At <strong>Finex Courier</strong>, we believe that exceptional
              customer support is not just a service—it’s a commitment. From the
              moment a shipment is booked to the time it reaches its final
              destination, our customers are at the heart of everything we do.
              Whether you’re shipping a single parcel or managing large-scale
              logistics operations, Finex stands by your side with a robust Help
              & Support system designed to provide fast, reliable, and
              personalized assistance at every step.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Our Commitment to You
            </h3>
            <p className="mb-6">
              Finex Courier was founded on the belief that logistics should be
              transparent, accessible, and customer-centric. As a result, our
              Help & Support team is more than just a traditional customer
              service department—it is an extension of your logistics
              operations. We are dedicated to offering guidance, resolving
              issues quickly, and ensuring that every interaction you have with
              Finex is smooth, efficient, and satisfying.
            </p>

            <p className="mb-6">
              We serve a diverse range of clients across Bangladesh and
              internationally, and we understand that every customer’s needs are
              unique. That’s why we’ve built a multi-tiered support system that
              caters to individuals, small businesses, and large corporations
              alike.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Core Elements of Our Support System
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">1. 24/7 Customer Service</h4>
                <p>
                  We know that logistics doesn’t sleep. Your shipments are on
                  the move day and night—and so are we. Our customer support
                  team is available 24 hours a day, 7 days a week, ensuring you
                  can reach us whenever you need to. Whether it{"'"}s a delivery
                  delay, customs inquiry, or tracking issue, we’re here to
                  assist you.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Phone Support for immediate assistance</li>
                  <li>Live Chat on our website and mobile app</li>
                  <li>Email Support with rapid response time</li>
                  <li>
                    Social Media Messaging (Facebook, WhatsApp, Instagram)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold">
                  2. Real-Time Shipment Tracking
                </h4>
                <p>
                  Transparency is a core value of our customer support approach.
                  Our advanced tracking system lets you monitor your shipment in
                  real-time across each leg of its journey. If you ever have a
                  concern about the status or location of your package, our
                  support team can provide real-time updates and explanations.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Tracking number on the Finex Courier website</li>
                  <li>The Finex mobile app</li>
                  <li>Direct messaging with our support team</li>
                </ul>
              </div>

             

              <div>
                <h4 className="text-xl font-bold">3. Multilingual Support</h4>
                <p>
                  Bangladesh is a diverse country with people from various
                  linguistic backgrounds. Finex offers Bangla and English
                  support to cater to the broadest possible customer base.
                  Whether you{"'"}re communicating by phone, email, or chat, you
                  can expect clear, friendly service in your preferred language.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-10 mb-4">
              Help Topics We Cover
            </h3>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>
                <strong>Shipment Booking Assistance:</strong> Step-by-step
                booking guidance, service suggestions, and best route planning.
              </li>
              <li>
                <strong>Customs and Documentation Guidance:</strong> Assistance
                with declarations, import/export laws, and required paperwork.
              </li>
              <li>
                <strong>Lost or Delayed Shipments:</strong> Investigation and
                real-time updates to recover or resolve delivery issues.
              </li>
              <li>
                <strong>Claims and Insurance Support:</strong> Smooth claim
                verification and compensation processing.
              </li>
              <li>
                <strong>Service Feedback and Complaints:</strong> Timely
                response and resolution through our feedback system.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              Support for Individuals and E-commerce Clients
            </h3>
            <p className="mb-2">
              <strong>For Individual Customers:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Guidance on service selection</li>
              <li>Packaging and pickup support</li>
              <li>SMS/email notifications</li>
              <li>Live delivery updates</li>
            </ul>

            <p className="mb-2">
              <strong>For E-commerce Merchants:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>API integration support</li>
              <li>Order tracking and returns</li>
              <li>Return logistics handling</li>
              <li>COD reconciliation help</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              Finex Mobile App – Support on the Go
            </h3>
            <p className="mb-6">
              Our mobile app provides a user-friendly portal to chat with live
              agents, track packages, access FAQs, submit tickets, and locate
              service centers. Available on both iOS and Android.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Knowledge Base & FAQ
            </h3>
            <p className="mb-6">
              Visit our online Help Center for shipping guides, tutorials,
              customs info, and FAQ answers to solve issues independently and
              with confidence.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Personalized Customer Experience
            </h3>
            <p className="mb-6">
              Our human-first approach ensures each ticket, call, or chat is
              handled by trained professionals who provide empathetic and
              accurate support.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Service Centers & On-Ground Support
            </h3>
            <p className="mb-6">
              With nationwide service centers, Finex offers face-to-face
              assistance, packaging support, supply sales, and business setup
              help. Use our website tool to find a nearby center.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Why Our Customers Trust Finex Help & Support
            </h3>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>Rapid response times</li>
              <li>95%+ resolution on first contact</li>
              <li>Friendly, bilingual agents</li>
              <li>Complete care from booking to delivery</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              Your Feedback Matters
            </h3>
            <p className="mb-6">
              Help us grow by sharing your experience. Leave feedback via the
              app, website, account managers, or social channels.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
            <p className="mb-6">
              At Finex Courier, we don’t just deliver parcels—we deliver peace
              of mind. Our Help & Support team is the backbone of our promise to
              serve you with integrity, reliability, and care. Whether you{"'"}
              re a first-time customer or a long-term partner, you can trust
              that we will be there when you need us most.
            </p>

            <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Need Help Now?</h3>
              <p className="mb-4">
                Contact us anytime. We{"'"}re here to support your success:
              </p>
              <ul className="list-none mb-4">
                <li>
                  <strong>Phone:</strong> +880 1645-034000, +880 1577-057714
                </li>
                <li>
                  <strong>Email:</strong> info@finex.ltd & finex.in.ex@gmail.com
                </li>
                <li>
                  <strong>Live Chat:</strong> Available via our Whats{"'"}app
                  and Facebook Messanger
                </li>
              </ul>
              <p>
                Your feedback helps us grow and improve. Let us know how we can
                serve you better!
              </p>
            </div>
          </IsEnglish>
          <IsBangla className="">
          <p className="text-2xl mb-6 bfont">
    <strong className="bfont text-2xl">ফিনেক্স কুরিয়ার</strong> এ, আমরা বিশ্বাস করি গ্রাহক সহযোগিতা কেবল একটি পরিষেবা নয়—এটি একটি প্রতিশ্রুতি। একটি চালান বুকিংয়ের মুহূর্ত থেকে শুরু করে গন্তব্যে পৌঁছানো পর্যন্ত, আমাদের গ্রাহকরা সবসময় আমাদের কাজের মূল কেন্দ্রবিন্দুতে থাকে। আপনি একটি একক পার্সেল পাঠাচ্ছেন বা বড় পরিসরের লজিস্টিকস পরিচালনা করছেন, ফিনেক্স আপনার পাশে রয়েছে একটি শক্তিশালী {'"হেল্প ও সাপোর্ট"'} সিস্টেম নিয়ে যা দ্রুত, নির্ভরযোগ্য এবং ব্যক্তিগত সহযোগিতা প্রদান করে প্রতিটি ধাপে।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">আপনার প্রতি আমাদের প্রতিশ্রুতি</h3>
  <p className="mb-6 text-2xl bfont">
    ফিনেক্স কুরিয়ার প্রতিষ্ঠিত হয়েছে এই বিশ্বাসে যে লজিস্টিকস হওয়া উচিত স্বচ্ছ, সবার জন্য সহজলভ্য ও গ্রাহককেন্দ্রিক। আমাদের {'"হেল্প ও সাপোর্ট"'} টিম একটি সাধারণ কাস্টমার সার্ভিস বিভাগ নয়—এটি আপনার লজিস্টিকস অপারেশনের একটি সম্প্রসারণ। আমরা দ্রুত সমস্যার সমাধান, সঠিক দিকনির্দেশনা ও প্রতিটি ইন্টারঅ্যাকশনকে সহজ ও সন্তোষজনক করে তোলার জন্য নিবেদিত।
  </p>

  <p className="mb-6 text-2xl bfont">
    আমরা বাংলাদেশজুড়ে ও আন্তর্জাতিকভাবে বৈচিত্র্যময় গ্রাহকদের সেবা দিচ্ছি এবং বুঝি যে প্রতিটি গ্রাহকের প্রয়োজন আলাদা। এজন্যই আমরা একটি মাল্টি-টিয়ার সাপোর্ট সিস্টেম গড়ে তুলেছি যা ব্যক্তি, ছোট ব্যবসা ও বড় কর্পোরেটদের জন্য উপযোগী।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">আমাদের সাপোর্ট সিস্টেমের মূল উপাদানসমূহ</h3>
  <div className="space-y-6 bfont">
    <div>
      <h4 className="text-3xl font-bold bfont">১। ২৪/৭ গ্রাহক সহযোগিতা</h4>
      <p className="bfont text-2xl">
        আমরা জানি যে লজিস্টিকস কখনও থেমে থাকে না। আপনার চালান দিনরাত চলমান—এবং আমরাও তাই। আমাদের সাপোর্ট টিম ২৪ ঘণ্টা, ৭ দিন খোলা থাকে, যাতে আপনি প্রয়োজনে যেকোনো সময় যোগাযোগ করতে পারেন।
      </p>
      <ul className="list-disc list-inside ml-4">
        <li className="text-2xl bfont">ফোন সাপোর্ট – দ্রুত সহযোগিতার জন্য</li>
        <li className="text-2xl bfont">লাইভ চ্যাট – ওয়েবসাইট ও মোবাইল অ্যাপে</li>
        <li className="text-2xl bfont">ইমেইল সাপোর্ট – দ্রুত রেসপন্স সহ</li>
        <li className="text-2xl bfont">সোশ্যাল মিডিয়া – Facebook, WhatsApp, Instagram</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold bfont text-3xl">২। রিয়েল-টাইম চালান ট্র্যাকিং</h4>
      <p className="bfont text-2xl">
        স্বচ্ছতা আমাদের সাপোর্টের মূলনীতি। আমাদের উন্নত ট্র্যাকিং সিস্টেমের মাধ্যমে আপনি রিয়েল-টাইমে আপনার চালানের অবস্থান জানতে পারবেন। যেকোনো সন্দেহ থাকলে, আমাদের টিম সাথে সাথে আপডেট দিতে প্রস্তুত।
      </p>
      <ul className="list-disc list-inside ml-4">
        <li className="text-2xl bfont">ফিনেক্স ওয়েবসাইটে ট্র্যাকিং নম্বর</li>
        <li className="text-2xl bfont">ফিনেক্স মোবাইল অ্যাপে ট্র্যাকিং</li>
        <li className="text-2xl bfont">সরাসরি মেসেজিংয়ের মাধ্যমে সাপোর্ট টিমের সহযোগিতা</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold bfont text-3xl">৩। দ্বিভাষিক সাপোর্ট</h4>
      <p className="bfont text-2xl">
        বাংলাদেশ একটি ভাষাগতভাবে বৈচিত্র্যময় দেশ। ফিনেক্স বাংলা ও ইংরেজিতে সাপোর্ট প্রদান করে যাতে প্রত্যেকেই সহজে এবং স্বাচ্ছন্দ্যে যোগাযোগ করতে পারেন।
      </p>
    </div>
  </div>

  <h3 className="text-3xl font-semibold mt-10 mb-4 bfont">আমরা যেসব সহযোগিতা প্রদান করি</h3>
  <ul className="list-disc list-inside ml-4 mb-6">
    <li className="bfont text-2xl"><strong className="bfont text-2xl">চালান বুকিং সহযোগিতা:</strong> বুকিং গাইড, পরিষেবা নির্বাচন ও রুট পরিকল্পনা।</li>
    <li className="bfont text-2xl"><strong className="bfont text-2xl">কাস্টমস ও ডকুমেন্টেশন সহযোগিতা:</strong> ডিক্লারেশন, আমদানি/রপ্তানি আইন ও কাগজপত্র নিয়ে সহযোগিতা।</li>
    <li className="bfont text-2xl"><strong className="bfont text-2xl">হারিয়ে যাওয়া বা বিলম্বিত চালান:</strong> তদন্ত ও তাত্ক্ষণিক আপডেট প্রদান।</li>
    <li className="bfont text-2xl"><strong className="bfont text-2xl">দাবি ও ইনস্যুরেন্স সহযোগিতা:</strong> দ্রুত যাচাই ও ক্ষতিপূরণ প্রক্রিয়া।</li>
    <li className="bfont text-2xl"><strong className="bfont text-2xl">পরিষেবা ফিডব্যাক ও অভিযোগ:</strong> প্রতিক্রিয়ার ভিত্তিতে সমস্যা সমাধান।</li>
  </ul>

  <h3 className="text-3xl font-semibold mb-4 bfont">ব্যক্তিগত ও ই-কমার্স ক্লায়েন্টদের জন্য সাপোর্ট</h3>
  <p className="mb-2 bfont text-2xl">ব্যক্তিগত গ্রাহকদের জন্য:</p>
  <ul className="list-disc list-inside ml-4 mb-4 bfont">
    <li className="bfont text-2xl">পরিষেবা নির্বাচনে দিকনির্দেশনা</li>
    <li className="bfont text-2xl">প্যাকেজিং ও পিকআপ সহযোগিতা</li>
    <li className="bfont text-2xl">SMS/ইমেইল নোটিফিকেশন</li>
    <li className="bfont text-2xl">ডেলিভারির লাইভ আপডেট</li>
  </ul>

  <p className="mb-2 bfont text-2xl">ই-কমার্স মার্চেন্টদের জন্য:</p>
  <ul className="list-disc list-inside ml-4 mb-6 bfont">
    <li className="bfont text-2xl">API ইন্টিগ্রেশন সাপোর্ট</li>
    <li className="bfont text-2xl">অর্ডার ট্র্যাকিং ও রিটার্ন ম্যানেজমেন্ট</li>
    <li className="bfont text-2xl">রিটার্ন লজিস্টিকস সহযোগিতা</li>
    <li className="bfont text-2xl">COD রিকনসিলিয়েশন সহযোগিতা</li>
  </ul>

  <h3 className="text-3xl font-semibold mb-4 bfont">ফিনেক্স মোবাইল অ্যাপ – যেকোনো সময় সহযোগিতা</h3>
  <p className="mb-6 bfont text-2xl">
    আমাদের মোবাইল অ্যাপের মাধ্যমে আপনি লাইভ চ্যাট, ট্র্যাকিং, FAQ, টিকিট সাবমিশন এবং নিকটবর্তী সার্ভিস সেন্টার খুঁজে পেতে পারবেন। অ্যাপটি iOS ও Android উভয় প্ল্যাটফর্মে উপলব্ধ।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">নলেজ বেস ও প্রায়শই জিজ্ঞাসিত প্রশ্নাবলি</h3>
  <p className="mb-6 bfont text-2xl">
    আমাদের অনলাইন হেল্প সেন্টার পরিদর্শন করুন যেখানে আপনি গাইড, টিউটোরিয়াল, কাস্টমস তথ্য এবং FAQ-এর উত্তর পাবেন, যা আপনাকে আত্মবিশ্বাসের সাথে সমস্যা সমাধান করতে সাহায্য করবে।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">ব্যক্তিকেন্দ্রিক গ্রাহক অভিজ্ঞতা</h3>
  <p className="mb-6 bfont text-2xl">
    প্রতিটি টিকিট, কল বা চ্যাট দক্ষ ও সহানুভূতিশীল সাপোর্ট এজেন্ট দ্বারা পরিচালিত হয়, যাতে আপনি সবসময় মানবিক ও নির্ভরযোগ্য সহযোগিতা পান।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">সার্ভিস সেন্টার ও সরাসরি সহযোগিতা</h3>
  <p className="mb-6 bfont text-2xl">
    আমাদের দেশেরব্যাপী সার্ভিস সেন্টারসমূহে আপনি সামনা-সামনি সহযোগিতা, প্যাকেজিং সাপোর্ট, উপকরণ কেনাকাটা ও ব্যবসা শুরু করার সহযোগিতা পাবেন।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">কেন গ্রাহকরা ফিনেক্স সাপোর্টে আস্থা রাখে</h3>
  <ul className="list-disc list-inside ml-4 mb-6 bfont">
    <li className="bfont text-2xl">দ্রুত প্রতিক্রিয়া</li>
    <li className="bfont text-2xl">৯৫% এর বেশি প্রথম সংস্পর্শে সমস্যা সমাধান</li>
    <li className="bfont text-2xl">বন্ধুত্বপূর্ণ, দ্বিভাষিক সাপোর্ট এজেন্ট</li>
    <li className="bfont text-2xl">বুকিং থেকে ডেলিভারি পর্যন্ত পূর্ণ সহযোগিতা</li>
  </ul>

  <h3 className="text-3xl font-semibold mb-4 bfont">আপনার মতামত গুরুত্বপূর্ণ</h3>
  <p className="mb-6 bfont text-2xl">
    আমাদের উন্নয়নের জন্য আপনার অভিজ্ঞতা জানানো জরুরি। অ্যাপ, ওয়েবসাইট, অ্যাকাউন্ট ম্যানেজার অথবা সোশ্যাল মিডিয়ার মাধ্যমে মতামত দিন।
  </p>

  <h3 className="text-3xl font-semibold mb-4 bfont">উপসংহার</h3>
  <p className="mb-6 bfont text-2xl">
    ফিনেক্স কুরিয়ার কেবল পার্সেল ডেলিভারি করে না—আমরা মানসিক প্রশান্তি পৌঁছে দিই। আমাদের {'"হেল্প ও সাপোর্ট"'} টিম হলো আমাদের প্রতিশ্রুতির মেরুদণ্ড—যা আপনাকে আন্তরিকতা, নির্ভরযোগ্যতা ও যত্নের সাথে সেবা দেয়। আপনি হোন নতুন গ্রাহক কিংবা দীর্ঘমেয়াদী অংশীদার—আমরা আছি আপনার পাশে।
  </p>

  <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow">
    <h3 className="text-3xl font-semibold mb-4 bfont">এখনই সহযোগিতা দরকার?</h3>
    <p className="mb-4 bfont text-2xl">আমাদের সাথে যেকোনো সময় যোগাযোগ করুন। আমরা আছি আপনার সাফল্যের পাশে:</p>
    <ul className="list-none mb-4 bfont">
      <li  className="bfont text-2xl"><strong  className="bfont text-2xl">ফোন:</strong> +880 1645-034000, +880 1577-057714</li>
      <li className="bfont text-2xl"><strong className="bfont text-2xl">ইমেইল:</strong> info@finex.ltd & finex.in.ex@gmail.com</li>
      <li className="bfont text-2xl"><strong className="bfont text-2xl">লাইভ চ্যাট:</strong> WhatsApp ও Facebook Messenger এর মাধ্যমে </li>
    </ul>
    <p className="bfont text-2xl">আপনার মতামত আমাদেরকে আরও ভালো করতে সহযোগিতা করে। কিভাবে আমরা আরও ভালো হতে পারি জানাতে ভুলবেন না!</p>
  </div>
          </IsBangla>
        </div>
      </div>
    </>
  );
};

export default HelpAndSupport;