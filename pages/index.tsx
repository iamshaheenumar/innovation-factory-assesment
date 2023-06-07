import Head from "next/head";
import HeroSection from "@/components/home/heroSection/HeroSection";
import FeaturesSection from "@/components/home/featuresSection/FeaturesSection";
import StatsSection from "@/components/home/statsSection/StatsSection";
import BestPlacesSection from "@/components/home/bestPlacesSection/BestPlacesSection";
import Footer from "@/components/common/footer/Footer";
import { useEffect } from "react";
import { SELECTED_TRIP } from "@/constants/common";
import TopViewSection from "@/components/home/topViewSection/TopViewSection";
import BestPackagesSection from "@/components/home/bestPackagesSection/BestPackagesSection";
import ReviewsSection from "@/components/home/reviewsSection/ReviewsSection";

export default function Home() {

  useEffect(() => {
    sessionStorage.removeItem(SELECTED_TRIP)
  }, [])
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
      <BestPackagesSection />
      <TopViewSection />
      <ReviewsSection />
      <Footer />
    </>
  );
}
