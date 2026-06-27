'use client';

import PropertyCard from "@/components/shared/PropertyCard";
import { filterByPropertyType, getApprovedProperties, searchProperties, sortProperties } from "@/lib/api/properties";
import { Label, SearchField, Select, ListBox } from "@heroui/react";
import { useEffect, useState } from "react";

const PublicAllPropertiesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const propertyTypes = ["Apartment", "House", "Villa", "Studio", "Office"];
  const sortOptions = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Price: Low to High",
    value: "low-to-high",
  },
  {
    label: "Price: High to Low",
    value: "high-to-low",
  },
];

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

  useEffect(() => {
    const loadSortedProperties = async () => {
      if (sort === "default") {
        const data = await getApprovedProperties();
        setProperties(data);
      } else {
        const data = await sortProperties(sort);
        setProperties(data);
      }
    };

    loadSortedProperties();
  }, [sort]);

  return (
    <div className='max-w-7xl mx-auto p-6 space-y-10 w-full'>
      <header>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Find Your Perfect Rental Property
        </h2>

        <p className="max-w-3xl mt-4 text-sm sm:text-base lg:text-lg text-default-500">
          Browse verified apartments, houses, and villas. Filter by property type,
          rent type, and price to find the perfect place for your next home.
        </p>
      </header>

      <div className='flex flex-col md:flex-row gap-6'>
        <SearchField
          className='w-full'
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

        <Select
          className="w-full"
          selectedKey={sort}
          onSelectionChange={setSort}
        >
          <Label>Sort By</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {sortOptions.map((option) => (
                <ListBox.Item
                  key={option.value}
                  id={option.value}
                  textValue={option.label}
                >
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
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