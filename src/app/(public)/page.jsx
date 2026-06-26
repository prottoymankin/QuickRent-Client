import Banner from "@/components/homepage/Banner";
import FeaturedProperties from "@/components/homepage/FeaturedProperties";
import Statistics from "@/components/homepage/Statistics";
import TopLocations from "@/components/homepage/TopLocations";
import WhyChoose from "@/components/homepage/WhyChoose";

const HomePage = () => {
  return (
    <div className="p-6 space-y-25">
      <Banner />
      <FeaturedProperties />
      <WhyChoose />
      <Statistics />
      <TopLocations />
    </div>
  );
};

export default HomePage;