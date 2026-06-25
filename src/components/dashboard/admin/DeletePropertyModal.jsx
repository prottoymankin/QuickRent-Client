"use client";

import { deleteProperty } from "@/lib/actions/properties";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button, toast} from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeletePropertyModal({ propertyId }) {
  const router = useRouter();

  const handleDeleteProperty = async () => {
    const response = await deleteProperty(propertyId);
    
    if (response.acknowledged) {
      toast.success('Property deleted successfully.');
      router.push('/dashboard/admin/all-properties');
    }
  }

  return (
    <AlertDialog>
      <Button
        isIconOnly
        variant="danger"
      >
        <TrashBin />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete property permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the property and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleDeleteProperty} 
                variant="danger"
              >
                Delete Property
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}