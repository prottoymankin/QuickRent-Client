'use client';

import { Button, Checkbox, Form, Input, Label, TextField, toast } from '@heroui/react';
import React from 'react';
import { Plus } from '@gravity-ui/icons';
import { useRouter } from 'next/navigation';
import { createProperty } from '@/lib/actions/properties';
import { SelectField } from '@/components/shared/SelectField';
import NumberField from '@/components/shared/NumberField';
import TextAreaField from '@/components/shared/TextAreaField';

const AddPropertyForm = ({ user }) => {
  const router = useRouter();

  const propertyTypes = ["Apartment", "House", "Villa", "Studio", "Office"];
  const amenities = ["WiFi", "Parking", "Security", "Generator", "Gym","Elevator"];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const propertyData = {
      ...Object.fromEntries(formData.entries()),
      amenities: formData.getAll("amenities"),
      propertySize: Number(formData.get("propertySize")),
      rent: Number(formData.get("rent")),
      bedrooms: Number(formData.get("bedrooms")),
      bathrooms: Number(formData.get("bathrooms")),
      ownerId: user?.id,
      ownerName: user?.name,
      ownerEmail: user?.email,
      status: 'Pending'
    };

    const data = await createProperty(propertyData);
    
    if (data.acknowledged) {
      toast.success("Property added successfully");
      router.push('/dashboard/owner/my-properties');
    }
  };

  return (
    <div>
      <Form
        className="border flex max-w-3xl mx-auto flex-col gap-4 p-6 rounded-2xl"
        isRequired
        onSubmit={handleOnSubmit}
      >
        <div className='flex flex-col md:flex-row gap-6'>
          <TextField
            className='w-full'
            isRequired
            name="propertyTitle"
            type="text"
          >
            <Label>Property Title</Label>
            <Input placeholder="e.g., Modern 2 Bedroom Apartment in Dhaka" />
          </TextField>

          <TextField
            className='w-full'
            isRequired
            name="location"
            type="text"
          >
            <Label>Location</Label>
            <Input placeholder="e.g. Dhaka, Bangladesh" />
          </TextField>
        </div>
        
        <div className='flex flex-col md:flex-row gap-6'>
          <SelectField
            label={'Property Type'}
            name={'propertyType'}
            options={propertyTypes}
          />

          <SelectField
            label={'Rent Type'}
            name={'rentType'}
            options={['Monthly', 'Weekly', 'Daily']}
          />
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          <NumberField
            label={'Rent'}
            name={'rent'}
            placeholder={'e.g. 30000'}
          />

          <NumberField
            label={'Property Size (sqft)'}
            name={'propertySize'}
            placeholder={'e.g. 1200'}
          />
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          <NumberField
            label={'Bedrooms'}
            name={'bedrooms'}
            placeholder={'Enter number of bedrooms'}
          />

          <NumberField
            label={'Bathrooms'}
            name={'bathrooms'}
            placeholder={'Enter number of bathrooms'}
          />
        </div>

        <TextField
          className='w-full'
          isRequired
          name="image"
          type="text"
        >
          <Label>Property Image</Label>
          <Input placeholder="Property image link (imgbb link)" />
        </TextField>


        <TextAreaField
          label={'Description'}
          name={'description'}
          placeholder={'Describe your property, amenities, location, and nearby facilities...'}
        />

        <TextAreaField
          label={'Extra features'}
          name={'extraFeatures'}
          placeholder={'Added more extra features about your property...'}
        />

        <div className="space-y-3">
          <Label>Amenities</Label>

          <div className='flex flex-wrap gap-6 py-6'>
            {amenities.map((amenity) => (
              <Checkbox
                key={amenity}
                name="amenities"
                value={amenity}
              >
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>

                  {amenity}
                </Checkbox.Content>
              </Checkbox>
            ))}
          </div>
        </div>

        <div className='flex gap-6 justify-end'>
          <Button
            className='rounded-lg'
            type='submit'
          >
            <Plus />
            Add Property
          </Button>

          <Button
            className='rounded-lg'
            type='reset'
            variant='tertiary'
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddPropertyForm;