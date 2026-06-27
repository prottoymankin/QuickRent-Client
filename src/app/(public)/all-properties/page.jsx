'use client';

import PropertyCard from "@/components/shared/PropertyCard";
import { getApprovedProperties, searchProperties } from "@/lib/api/properties";
import { Label, SearchField } from "@heroui/react";
import { useEffect, useState } from "react";

const PublicAllPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadProperties = async () => {
      setIsLoading(true);
      const data = await getApprovedProperties();
      setProperties(data);
      setIsLoading(false);
    }

    loadProperties();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIsLoading(true);

      const data = await searchProperties(search);

      setProperties(data);

      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className='max-w-7xl mx-auto p-6 w-full'>
      <div>
        <SearchField 
          name="search"
          value={search}
          onChange={setSearch}
        >
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-full" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

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