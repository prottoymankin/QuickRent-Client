import PropertyCard from "@/components/shared/PropertyCard";
import { getApprovedProperties } from "@/lib/api/properties";

const PublicAllPropertiesPage = async () => {
  const properties = await getApprovedProperties();
  console.log(properties);

  return (
    <div className='max-w-7xl mx-auto p-6 w-full'>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          properties.map(property => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))
        }
      </section>
    </div>
  );
};

export default PublicAllPropertiesPage;