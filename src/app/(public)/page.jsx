import Banner from "@/components/homepage/Banner";
import FeaturedProperties from "@/components/homepage/FeaturedProperties";

const HomePage = () => {
  return (
    <div className="p-6 space-y-25">
      <Banner />
      <FeaturedProperties />
    </div>
  );
};

export default HomePage;