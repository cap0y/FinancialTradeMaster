import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DeliveryFeatureSection from "@/components/DeliveryFeatureSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AppScreensSection from "@/components/AppScreensSection";
import InteractiveAppPreview from "@/components/InteractiveAppPreview";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "바로거래 - 모바일 배달 서비스";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <FeaturesSection />
        <DeliveryFeatureSection />
        <MarketplaceSection />
        <HowItWorksSection />
        <AppScreensSection />
        <InteractiveAppPreview />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
