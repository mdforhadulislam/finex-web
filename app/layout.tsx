import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/NavBar/NavBar";
import { Toaster } from "@/components/ui/sonner";
import AuthContextProvider from "@/context/AuthContext";
import LangContextProvider from "@/context/LangContext";
import LoadContextProvider from "@/context/LoadContext";
import UserTrackContext from "@/context/UserTrackContext";
import Spriner from "@/utils/Spriner";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Finex",
  description: `Finex is a trusted global logistics provider offering comprehensive shipping solutions tailored to businesses and individuals worldwide. We specialize in international shipping, air freight, sea freight, express delivery, and supply chain optimization, ensuring cost-effective and reliable cargo transport. Our services include door-to-door delivery, customs clearance, import-export logistics, cargo insurance, and real-time parcel tracking to guarantee a hassle-free shipping experience.

  With a strong presence in Surat and an extensive global delivery network, Finex provides fast and secure courier services, B2B and bulk shipping, and temperature-controlled freight solutions. Our expertise in customs brokerage, bonded warehousing, and multimodal logistics allows businesses to streamline their supply chains efficiently. We compare shipping rates from leading carriers like DHL, FedEx, and UPS, offering the best freight options at competitive prices.

  Whether you require same-day shipping, commercial cargo solutions, cross-border logistics, or e-commerce fulfillment, Finex ensures seamless transport with expert freight forwarding and customs handling. Our commitment to secure, time-critical, and cost-effective shipping makes us the preferred logistics partner for businesses and exporters in India and beyond. Trust Finex for professional, high-speed, and efficient global shipping services, backed by advanced tracking and tailored logistics solutions.`,
  
  keywords:
    "international shipping, affordable shipping, global shipping solutions, air freight, sea freight, ocean freight, express delivery, courier services, parcel tracking, DHL shipping, FedEx rates, UPS express, international logistics, cargo services, supply chain solutions, export shipping, import export logistics, customs clearance, hassle-free logistics, freight forwarding, door-to-door delivery, same-day shipping, economy shipping, best shipping rates, Surat courier services, Surat logistics provider, fast international delivery, overseas shipping, shipping companies in India, global trade shipping, cargo insurance, real-time tracking, best air freight rates,  affordable shipping solutions, air freight, sea freight, custom clearance, export rates, courier services in Surat, DHL rates comparison, FedEx shipping quotes, UPS shipping options, professional shipping solutions, global shipping services, Surat logistics provider, fast delivery services, international export assistance, reliable freight forwarding, express courier services, door-to-door shipping, efficient customs clearance, international package tracking, Surat freight services, cost-effective global logistics,  shipping quote comparison, cross-border shipping, e-commerce logistics, commercial cargo solutions, bulk shipping, B2B shipping, cargo consolidation, international warehouse, global delivery network, expedited shipping, heavy freight solutions, perishable goods shipping, customs brokerage, duty-free shipping, supply chain optimization, import duty calculator, cargo manifest, multimodal logistics, freight insurance, ocean freight forwarding, LCL shipping, FCL container shipping, port-to-port shipping, bonded warehouse, last-mile delivery, temperature-controlled shipping, white-glove delivery, commercial import export, Surat export company, Surat air cargo, Surat sea freight, Surat courier tracking, express international shipping, premium courier services, fastest delivery service, trusted shipping partner, international order fulfillment, retail shipping solutions, logistics automation, same-day freight, airline cargo rates, customs clearance India, import-export documentation, global trade compliance, shipping regulations, HS code classification, certified freight forwarding, worldwide transport solutions, customs duty reduction, global e-commerce fulfillment, Surat logistics hub, Surat freight forwarding, Surat trade services, Surat export logistics, Surat business shipping, Surat cargo handling, Surat international trade, logistics support, freight network, Finex tracking, Finex courier, Finex parcel tracking, Finex shipment tracking, Finex international express, Finex freight services, Finex shipping solutions, Finex export services, Finex cargo solutions, Finex logistics provider, Finex warehouse solutions, Finex air cargo, Finex ocean freight, Finex customs clearance, Finex supply chain management, Finex global delivery, Finex B2B shipping, Finex e-commerce logistics, Finex door-to-door services, Finex trade compliance, Finex business shipping, Finex import-export services, Finex cross-border shipping, Finex international freight forwarding, Finex commercial shipping, Finex real-time tracking, Finex expedited services, Finex logistics automation, Finex shipping comparison, Finex cost-effective logistics, Finex retail shipping, Finex bonded warehouse, Finex last-mile delivery, Finex temperature-controlled freight, Finex custom brokerage, Finex heavy freight solutions, Finex shipping regulations, Finex cargo insurance, Finex certified logistics, Finex multimodal shipping, Finex global supply chain, Finex duty-free shipping, Finex premium courier, Finex economy shipping, Finex same-day freight, Finex bulk shipping, Finex B2B freight, Finex global trade compliance, Finex trade documentation,Finex International Courier,  Finex port-to-port shipping, Finex customs handling, Finex global express, Finex import duty solutions, Finex warehouse storage, Finex e-commerce order fulfillment, Finex commercial cargo, Finex competitive freight rates, Finex trusted logistics, Finex import-export trade, Finex international retail shipping, Finex cargo manifest, Finex express parcel services, Finex certified freight forwarding, Finex global transport solutions, Finex supply chain optimization, Finex bonded logistics, Finex multimodal transport, Finex specialized freight solutions, Finex temperature-controlled storage, Finex white-glove shipping, Finex customs processing, Finex overseas warehousing, Finex international cargo tracking, Finex high-value shipment, Finex international supplier logistics, Finex business-to-consumer shipping, Finex product fulfillment, Finex regulatory compliance, Finex import logistics, Finex cargo warehousing, Finex freight cost reduction, Finex global order fulfillment, Finex cargo packaging, Finex goods handling, Finex product distribution, Finex customs inspection, Finex global network, Finex retail fulfillment services, Finex online business shipping, Finex time-critical freight, Finex secure shipping, Finex air cargo security, Finex customs clearance brokerage, Finex import control, Finex corporate shipping, Finex fulfillment center, Finex on-demand shipping, Finex just-in-time logistics, Finex special handling services, Finex warehousing solutions, Finex cargo transport management, Finex freight consolidation, Finex distribution channels, Finex logistics partner, Finex service quality, Finex express freight solutions, Finex digital freight forwarding, Finex freight brokerage services, Finex procurement logistics, Finex digital shipping tracking, Finex advanced logistics solutions, Finex international trade support, Finex shipping carrier comparison, Finex certified customs broker, Finex global import network, Finex customs solutions, Finex smart logistics, Finex trade agreements compliance, Finex cargo insurance coverage, Finex priority freight services, Finex bulk order shipping, Finex fulfillment logistics, Finex cargo safety, Finex optimized supply chain, Finex global freight network, Finex warehouse management, Finex courier cost analysis, Finex logistics data tracking, Finex cost-efficient shipping, Finex advanced freight solutions, Finex risk-free cargo shipping, Finex regulated goods shipping, Finex temperature-sensitive freight, Finex wholesale logistics, Finex global freight comparison, Finex cost-effective freight solutions, Finex order tracking, Finex high-speed courier services, Finex tailored shipping solutions, Finex express warehousing, Finex business courier services, Finex secure freight transport, Finex air cargo logistics, Finex bonded freight, Finex special cargo handling, Finex expert freight solutions, Finex global logistics network, Finex intermodal freight, Finex warehousing efficiency, Finex streamlined shipping, Finex last-mile logistics, Finex cargo protection, Finex air express freight, Finex contract logistics, Finex professional courier services, Finex optimized transport routes, Finex freight cost comparison, Finex regulatory compliance shipping, Finex import-export carrier, Finex logistics advisory, Finex supply chain data analytics, Finex e-commerce supply chain, Finex international trade logistics, Finex retail supply chain solutions, Finex cargo storage solutions, Finex time-sensitive cargo shipping, Finex import handling, Finex automated logistics, Finex customs trade facilitation, Finex freight documentation support, Finex B2C logistics solutions, Finex competitive express services, Finex international business logistics, Finex Shippment Tracking,Faster International Express, Faster International Express - Finex,",
  icons: ["/icon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LangContextProvider>
          <LoadContextProvider>
            <AuthContextProvider>
              <UserTrackContext>
                <Navbar />
                <Spriner />
                <Analytics />
                {children}
                <FooterBar />
                <Toaster
                  position="top-right"
                  className="mt-12"
                  closeButton={true}
                  expand={true}
                />
              </UserTrackContext>
            </AuthContextProvider>
          </LoadContextProvider>
        </LangContextProvider>
      </body>
    </html>
  );
}
