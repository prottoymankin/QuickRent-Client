import { ViewRejectModal } from "@/components/dashboard/owner/ViewRejectModal";
import { DeletePropertyModal } from "@/components/dashboard/shared/DeletePropertyModal";
import { EditPropertyModal } from "@/components/dashboard/shared/EditPropertyModal";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getOwenerProperties } from "@/lib/api/properties";
import { getCurrentUser } from "@/lib/session";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import {Button, Chip, Table} from "@heroui/react";

const MyPropertyPage = async () => {
  const user = await getCurrentUser();
  const properties = await getOwenerProperties(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Manage Properties'}
        subtitle={'Keep track of your property listings and their approval status.'}
      />

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="All properties" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Title</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Rent</Table.Column>
              <Table.Column>Type</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Rejection Reason</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                properties.map(property => (
                  <Table.Row key={property?._id}>
                    <Table.Cell>{property?.propertyTitle}</Table.Cell>
                    <Table.Cell>{property?.location}</Table.Cell>
                    <Table.Cell>৳{property?.rent}</Table.Cell>
                    <Table.Cell>{property?.propertyType}</Table.Cell>
                    <Table.Cell className='space-x-2'>
                      <Chip 
                        color={
                          property?.status === 'Pending' ? "warning" : property?.status === 'Approved' ? 'success' : 'danger'
                        }
                        variant="secondary"
                      >
                        {property?.status}
                      </Chip>
                    </Table.Cell>
                    
                    <Table.Cell>
                      {
                        property?.rejectReason ? (
                          <ViewRejectModal
                            rejectReason={property?.rejectReason} 
                          />
                        ) : (
                          <span>N/A</span>
                        )
                      }
                    </Table.Cell>

                    <Table.Cell className='flex gap-4'>
                      <EditPropertyModal
                        property={property}
                        route={'/dashboard/owner/my-properties'}
                      />

                      <DeletePropertyModal
                        propertyId={property?._id}
                        route={'/dashboard/owner/my-properties'}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default MyPropertyPage;