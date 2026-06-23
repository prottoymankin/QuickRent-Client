import {Label, SearchField, ListBox, Select, NumberField, TextField, Input, Button} from "@heroui/react";

const Banner = () => {
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
        className="border bg-[url(/images/banner.jpg)] bg-center bg-cover flex flex-col gap-10 items-center justify-center max-w-7xl min-h-[90vh] mx-auto overflow-hidden relative rounded-2xl w-full"
      >
        <div className="absolute bg-black/60 inset h-full w-full"></div>

        <div 
          className="leading-[1.1] relative space-y-4 text-center text-zinc-50 z-10"
        >
          <h1 
            className="font-bold max-w-lg text-3xl sm:text-3xl md:text-5xl"
          >
            The Smarter Way to Rent and Manage Properties
          </h1>

          <p className="leading-[1.1] max-w-lg">
            QuickRent connects tenants and property owners through a secure marketplace, making property discovery, booking, and management simple and hassle-free.
          </p>
        </div>

        <div 
          className="bg-white/10 backdrop-blur-xs  p-6 rounded-xl space-y-6"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <SearchField name="location" className='w-full'>
                <SearchField.Group>
                  <SearchField.Input 
                    className="w-full" 
                    placeholder="Location" 
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>

              <Select className="w-full" placeholder="Property Type">
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
              <TextField name="maxPrice" type="number" className='w-full'>
                <Input placeholder="Max Price" className='w-full' />
              </TextField>

              <TextField name="maxPrice" type="number" className='w-full'>
                <Input placeholder="Min Price" className='w-full' />
              </TextField>
            </div>
          </div>

          <div className="flex justify-center">
            <Button>
              Search
            </Button>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Banner;