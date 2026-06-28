import { getFeaturedProperties } from "@/lib/api/properties";
import PropertyCard from "../shared/PropertyCard";
import AnimatedGrid from "./AnimateGrid";

const FeaturedProperties = async () => {
  const featuredProperties = await getFeaturedProperties();

  return (
    <div className="max-w-7xl mx-auto space-y-10 w-full">
      <header className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Featured Properties
        </h2>

        <p className="mt-4 text-zinc-500">Discover our top-rated rental properties, offering the perfect blend of comfort, location, and value.</p>
      </header>

      <AnimatedGrid>
        {
          featuredProperties.map(property => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))
        }
      </AnimatedGrid>
    </div>
  );
};

export default FeaturedProperties;