"use client";

import NumberField from "@/components/shared/NumberField";
import { SelectField } from "@/components/shared/SelectField";
import TextAreaField from "@/components/shared/TextAreaField";
import { updateProperty } from "@/lib/actions/properties";
import { Pencil} from "@gravity-ui/icons";
import {Button, Checkbox, Input, Label, Modal, Surface, TextField, toast} from "@heroui/react";
import { useRouter } from "next/navigation";

export function EditPropertyModal({ property, route }) {
  const router = useRouter();

  const propertyTypes = ["Apartment", "House", "Villa", "Studio", "Office"];
  const amenities = ["WiFi", "Parking", "Security", "Generator", "Gym","Elevator"];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updateData = {
      ...Object.fromEntries(formData.entries()),
      amenities: formData.getAll("amenities"),
      propertySize: Number(formData.get("propertySize")),
      rent: Number(formData.get("rent")),
      bedrooms: Number(formData.get("bedrooms")),
      bathrooms: Number(formData.get("bathrooms"))
    };

    const result = await updateProperty(property?._id, updateData);
    
    if (result.acknowledged) {
      toast.success('Property updated successfully.');
      router.push(route);
    }
  }

  return (
    <Modal>
      <Button isIconOnly variant="secondary">
        <Pencil />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form 
                  className="flex flex-col gap-4"
                  onSubmit={handleOnSubmit}
                >
                  <TextField
                    className='w-full'
                    defaultValue={property?.propertyTitle}
                    isRequired
                    name="propertyTitle"
                    type="text"
                  >
                    <Label>Property Title</Label>
                    <Input placeholder="e.g., Modern 2 Bedroom Apartment in Dhaka" />
                  </TextField>

                  <TextField
                    className='w-full'
                    defaultValue={property?.location}
                    isRequired
                    name="location"
                    type="text"
                  >
                    <Label>Location</Label>
                    <Input placeholder="e.g. Dhaka, Bangladesh" />
                  </TextField>

                  <SelectField
                    label={'Property Type'}
                    name={'propertyType'}
                    options={propertyTypes}
                    defaulteSelectedKey={property?.propertyType}
                  />

                  <SelectField
                    label={'Rent Type'}
                    name={'rentType'}
                    options={['Monthly', 'Weekly', 'Daily']}
                    defaulteSelectedKey={property?.rentType}
                  />

                  <NumberField
                    defaultValue={property?.rent}
                    label={'Rent'}
                    name={'rent'}
                    placeholder={'e.g. 30000'}
                  />

                  <NumberField
                    defaultValue={property?.propertySize}
                    label={'Property Size (sqft)'}
                    name={'propertySize'}
                    placeholder={'e.g. 1200'}
                  />

                  <NumberField
                    defaultValue={property?.bedrooms}
                    label={'Bedrooms'}
                    name={'bedrooms'}
                    placeholder={'Enter number of bedrooms'}
                  />
        
                  <NumberField
                    defaultValue={property?.bathrooms}
                    label={'Bathrooms'}
                    name={'bathrooms'}
                    placeholder={'Enter number of bathrooms'}
                  />

                  <TextField
                    className='w-full'
                    defaultValue={property?.image}
                    isRequired
                    name="image"
                    type="text"
                  >
                    <Label>Property Image</Label>
                    <Input placeholder="Property image link (imgbb link)" />
                  </TextField>

                  <TextAreaField
                    defaultValue={property?.description}
                    label={'Description'}
                    name={'description'}
                    placeholder={'Describe your property, amenities, location, and nearby facilities...'}
                  />
          
                  <TextAreaField
                    defaultValue={property?.extraFeatures}
                    label={'Extra features'}
                    name={'extraFeatures'}
                    placeholder={'Added more extra features about your property...'}
                  />

                  <div className="space-y-3">
                    <Label>Amenities</Label>
          
                    <div className='flex flex-wrap gap-6 py-6'>
                      {amenities.map((amenity) => (
                        <Checkbox
                          defaultSelected={property?.amenities?.includes(amenity)}
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

                  <Modal.Footer>
                    <Button 
                      slot="close" 
                      variant="secondary"
                    >
                      Cancel
                    </Button>

                    <Button 
                      slot="close"
                      type='submit'
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}