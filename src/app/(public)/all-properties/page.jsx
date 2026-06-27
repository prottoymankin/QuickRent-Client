'use client';

import PropertyCard from "@/components/shared/PropertyCard";
import { filterByPropertyType, getApprovedProperties, searchProperties } from "@/lib/api/properties";
import { Label, SearchField, Select, ListBox } from "@heroui/react";
import { useEffect, useState } from "react";

const PublicAllPropertiesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [search, setSearch] = useState("");

  const propertyTypes = ["Apartment", "House", "Villa", "Studio", "Office"];

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

  useEffect(() => {
     const loadProperties = async () => {
      setIsLoading(true);

      if (propertyType) {
        const data = await filterByPropertyType(propertyType);
        setProperties(data);
      } else {
        const data = await getApprovedProperties();
        setProperties(data);
      }

      setIsLoading(false);
    };

    loadProperties();
  }, [propertyType]);

  return (
    <div className='max-w-7xl mx-auto p-6 space-y-10 w-full'>
      <div>
        <SearchField 
          name="search"
          value={search}
          onChange={setSearch}
        >
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-full" placeholder="Search by location and name" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Select 
          className="w-full"
          onSelectionChange={(key) => setPropertyType(key)}
          placeholder="Filter"
          selectedKey={propertyType}
        >
          <Label>Property Type</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {
                propertyTypes.map((type, idx) => (
                  <ListBox.Item 
                    id={type}
                    key={idx} 
                    textValue={type}
                  >
                    {type}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))
              }
            </ListBox>
          </Select.Popover>
        </Select>
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