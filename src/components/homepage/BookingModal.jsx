"use client";

import {Button, DateField, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";

export function BookingModal({ property, user }) {
  return (
    <Modal>
      <Button className='rounded-lg w-full'>
        Book Property
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form 
                  className="flex flex-col gap-4"
                  action='/api/payment'
                  method='POST'
                >
                  <input
                    type="hidden"
                    name="propertyId"
                    value={property._id}
                  />

                  <TextField 
                    className="w-full" 
                    defaultValue={user?.name}
                    name="name"
                    isRequired
                    type="text" 
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input
                      placeholder="Enter your name" 
                    />
                  </TextField>

                  <TextField 
                    className="w-full" 
                    defaultValue={user?.email}
                    name="email" 
                    isRequired
                    type="email" 
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <TextField 
                    className="w-full" 
                    isRequired 
                    name="phone"
                    type="tel" 
                    variant="secondary"
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                  <DateField 
                    className="w-full" 
                    isRequired
                    name="date"
                  >
                    <Label>Move in Date</Label>
                    <DateField.Group variant="secondary">
                      <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                  </DateField>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="textarea-rows-3">Additional Notes</Label>
                    <TextArea
                      aria-label="Short feedback"
                      id="textarea-rows-3"
                      name='note'
                      placeholder="note..."
                      rows={3}
                      variant="secondary"
                    />
                  </div>

                  <Modal.Footer>
                    <Button 
                      className='rounded-lg'
                      slot="close" 
                      variant="tertiary"
                    >
                      Cancel
                    </Button>

                    <Button 
                      className='rounded-lg'
                      type='submit'
                    >
                      Confirm Booking
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