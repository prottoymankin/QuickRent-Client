"use client";

import { SearchField, ListBox, Select, NumberField, TextField, Input, Button} from "@heroui/react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Banner = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const propertyTypes = [
    "Apartment",
    "House",
    "Villa",
    "Studio",
    "Office",
  ];

  return (
    <div>
      <div 
        className="border bg-[url(/images/banner.jpg)] bg-center bg-cover flex flex-col gap-10 items-center justify-center max-w-7xl min-h-[90vh] mx-auto overflow-hidden p-6 relative rounded-2xl w-full"
      >
        <div className="absolute bg-black/60 inset h-full w-full">
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leading-[1.1] relative space-y-4 text-center text-zinc-50 z-10"
        >
          <h1 
            className="font-bold max-w-2xl text-3xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            The Smarter Way to Rent and Manage Properties
          </h1>

          <p className="leading-[1.1] max-w-lg mx-auto">
            QuickRent connects tenants and property owners through a secure marketplace, making property discovery, booking, and management simple and hassle-free.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="bg-white/10 backdrop-blur-xs flex flex-col lg:flex-row gap-6 p-6 rounded-xl"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <SearchField 
                name="location"
                className="w-full"
                value={search}
                onChange={setSearch}
              >
                <SearchField.Group>
                  <SearchField.Input 
                    className="w-full" 
                    placeholder="Location" 
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>

              <Select 
                className="w-full"
                placeholder="Property Type"
                selectedKey={propertyType}
                onSelectionChange={setPropertyType}
              >
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox className="w-full">
                    {
                      propertyTypes.map((type, idx) => (
                        <ListBox.Item key={idx} id={type} textValue={type}>
                          {type}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))
                    }
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <TextField 
                name="maxPrice" 
                className="w-full"
                type="number"
                defaultValue={maxPrice}
                onChange={setMaxPrice}
              >
                <Input placeholder="Max Price" />
              </TextField>

              <TextField 
                name="minPrice" 
                className="w-full"
                type="number"
                defaultValue={minPrice}
                onChange={setMinPrice}
              >
                <Input placeholder="Min Price" />
              </TextField>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className='bg-emerald-600 hover:bg-emerald-700 lg:w-fit rounded-lg w-full'
              onPress={() => {
                const params = new URLSearchParams();

                if (search.trim()) {
                  params.append("search", search);
                }

                if (propertyType) {
                  params.append("propertyType", propertyType);
                }

                if (minPrice) {
                  params.append("minPrice", minPrice);
                }

                if (maxPrice) {
                  params.append("maxPrice", maxPrice);
                }

                router.push(`/all-properties?${params.toString()}`);
              }}
            >
              Search
            </Button>
          </div>
        </motion.div>


      </div>

    </div>
  );
};

export default Banner;