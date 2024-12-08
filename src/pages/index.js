import HeroAboutUsSection from "@/components/About/HeroAboutUsSection";
import HomeCustomerReviewSection from "@/components/Home/HomeCustomerReviewSection";
import HomeHeddingSection from "@/components/Home/HomeHeddingSection";
import HomeHeroDeliveryPartnersSection from "@/components/Home/HomeHeroDeliveryPartnersSection";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HeroServiceFeaturesSection from "@/components/Service/HeroServiceFeaturesSection";
import HeroServiceProcessSection from "@/components/Service/HeroServiceProcessSection";
import HeroServiceSection from "@/components/Service/HeroServiceSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Page title displayed in the browser tab and search results */}
        <title>Finex - Home</title>
        {/* Description meta tag for search engines and previews */}
        <meta
          name="description"
          content="Finex: Your go-to courier service for fast, reliable, and affordable international shipping. Explore our services, meet our team, and discover how we can assist with your shipping needs."
        />
        {/* Keywords meta tag for SEO purposes */}
        <meta
          name="keywords"
          content="Finex, Courier Services, International Shipping, Fast Delivery, Reliable Courier, Affordable Shipping, DHL, Fedex, Aramex"
        />
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Finex - Home" />
        <meta
          property="og:description"
          content="Finex provides fast, reliable, and affordable international shipping solutions. Learn about our services and how we can help with your shipping needs."
        />
            <meta name="facebook-domain-verification" content="uympri4y7q1uc1ry7fs9de0b6duwkj" />
      <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '908391584774155');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=908391584774155&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
            
            </Head>
      <HomeHeroSection />
      <HeroServiceSection />
      <HeroAboutUsSection />
      <HomeHeddingSection />
      <HeroServiceFeaturesSection />
      <HeroServiceProcessSection />
      <HomeHeroDeliveryPartnersSection />
      <HomeCustomerReviewSection />
    </>
  );
}
