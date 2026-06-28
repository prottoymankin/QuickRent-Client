'use client';

import EmptyProperties from "@/components/homepage/EmptyProperties";
import PropertyCard from "@/components/shared/PropertyCard";
import {  getApprovedProperties } from "@/lib/api/properties";
import { ArrowsRotateRight } from "@gravity-ui/icons";
import { Label, SearchField, Select, ListBox, Spinner, Pagination, TextField, Input, Button } from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PublicAllPropertiesPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [sort, setSort] = useState("default");
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [propertyType, setPropertyType] = useState(searchParams.get("propertyType") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

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

  const handleReset = () => {
    setSearch("");
    setPropertyType("");
    setSort("default");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
    router.push('/all-properties');
  };

  useEffect(() => {
    const loadProperties = async () => {
      setIsLoading(true);

      const result = await getApprovedProperties({
        page: currentPage,
        search,
        propertyType,
        sort,
        minPrice,
        maxPrice,
      });

      setProperties(result.data);
      setTotalPages(result.totalPage);
      setIsLoading(false);
    };

    loadProperties();
  }, [
    search,
    propertyType,
    sort,
    minPrice,
    maxPrice,
    currentPage,
  ]);

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

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex flex-col md:flex-row gap-6 w-full'>
          <SearchField
            className='w-full'
            name="search"
            value={search}
            onChange={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
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

        <div className="flex flex-col md:flex-row items-end gap-6 w-full">
          <TextField
            className='w-full'
            name="minPrice"
            value={minPrice}
            onChange={(value) => {
              setMinPrice(value);
              setCurrentPage(1);
            }}
          >
            <Label>Min Price</Label>
            <Input placeholder="Min Price" />
          </TextField>

          <TextField
            className='w-full'
            name="maxPrice"
            value={maxPrice}
            onChange={(value) => {
              setMaxPrice(value);
              setCurrentPage(1);
            }}
          >
            <Label>Max Price</Label>
            <Input placeholder="Max Price" />
          </TextField>

          <Button
            className='bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white'
            onClick={handleReset}
          >
            <ArrowsRotateRight />
            Reset
          </Button>
        </div>
      </div>

      {
        isLoading ? (
          <div 
            className="min-h-[50vh] flex flex-col items-center justify-center gap-2"
          >
            <Spinner size="xl" />
            <span className="text-xs text-muted">Loading...</span>
          </div>
        ) : properties.length > 0 ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property._id}
                  property={property}
                />
              ))}
            </section>

        ) : (
          <EmptyProperties />
        )
      }

      {
        properties.length > 0 && (
          <Pagination className="justify-center">
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous 
                  isDisabled={currentPage === 1}
                  onPress={() => setCurrentPage((p) => p - 1)}
                >
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    className={p === currentPage && 'bg-emerald-600 text-white'} 
                    isActive={p === currentPage}
                    onPress={() => setCurrentPage(p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next 
                  isDisabled={currentPage === totalPages}
                  onPress={() => setCurrentPage((p) => p + 1)} 
                >
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        )
      }

    </div>
  );
};

export default PublicAllPropertiesPage;