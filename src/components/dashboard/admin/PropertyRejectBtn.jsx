"use client";

import { rejectProperty } from "@/lib/actions/properties";
import { Xmark} from "@gravity-ui/icons";
import {Button, Modal, Surface, TextArea, toast} from "@heroui/react";
import { useRouter } from "next/navigation";

export const PropertyRejectBtn = ({ propertyId }) => {
  const router = useRouter();

  const handleRejectProperty = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const rejectReason = formData.get('rejectReason'); 

    const updateData = {
      status: 'Rejected',
      rejectReason
    };

    const response = await rejectProperty(propertyId, updateData);

    if (response.acknowledged) {
      toast.success('Property rejected successfully.');
      router.push('/dashboard/admin/all-properties');
    }
  }

  return (
    <Modal>
      <Button
        className='bg-red-100 text-red-500'
        isIconOnly
      >
        <Xmark />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Provide Rejection Reason</Modal.Heading>
              <p className="text-sm leading-5 text-muted">
                Explain why this property is being rejected. This feedback will be visible to the property owner.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form 
                  className="flex flex-col gap-4"
                  onSubmit={handleRejectProperty}
                >
                  <TextArea
                    aria-label="Rejection feedback"
                    className="h-32 w-full"
                    required
                    name='rejectReason'
                    placeholder="Provide rejection feedback..."
                  />

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
                      variant='danger'
                    >
                      Confirm Reject
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