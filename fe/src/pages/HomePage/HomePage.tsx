import HeroSection from "../../components/home/HeroSection/HeroSection";
import StepsSection from "../../components/home/StepsSection/StepsSection";
import FeaturedCourtsSection from "../../components/home/FeaturedCourtsSection/FeaturedCourtsSection";
import WhyChooseUsSection from "../../components/home/WhyChooseUsSection/WhyChooseUsSection";
import PromotionBannerSection from "../../components/home/PromotionBannerSection/PromotionBannerSection";
import NewsSection from "../../components/home/NewsSection/NewsSection";
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="home-white-section-bottom">
        <StepsSection />
      </div>

      <FeaturedCourtsSection />

      <WhyChooseUsSection />

      <PromotionBannerSection />

      <div className="home-white-section-top">
        <NewsSection />
      </div>
    </>
  );
}

export default HomePage;
