import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import StatsSection from "@/components/StatsSection";
import PremiumSection from "@/components/PremiumSection";
import SkillsBreakdownSection from "@/components/SkillsBreakdownSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <StatsSection />
      <PremiumSection />
      <SkillsBreakdownSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <ReviewsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
