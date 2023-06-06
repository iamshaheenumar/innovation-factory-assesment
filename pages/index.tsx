import Head from "next/head";
import HeroSection from "@/components/home/heroSection/HeroSection";
import FeaturesSection from "@/components/home/featuresSection/FeaturesSection";
import StatsSection from "@/components/home/statsSection/StatsSection";
import BestPlacesSection from "@/components/home/bestPlacesSection/BestPlacesSection";
import Footer from "@/components/common/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flight Booking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <BestPlacesSection />
      <Footer />
    </>
  );
}
