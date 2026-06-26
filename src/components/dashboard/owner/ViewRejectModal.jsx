"use client";

import {Eye, Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";

export const ViewRejectModal = ({ rejectReason }) => {
  return (
    <Modal>
      <Button 
        isIconOnly
        variant="secondary"
      >
        <Eye />
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Rejection Reason</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                {rejectReason}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 w-full" 
                slot="close"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}