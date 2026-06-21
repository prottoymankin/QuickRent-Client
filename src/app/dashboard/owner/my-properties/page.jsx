import { getOwenerProperties } from "@/lib/api/properties";
import { getCurrentUser } from "@/lib/session";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import {Button, Chip, Table} from "@heroui/react";

const MyPropertyPage = async () => {
  const user = await getCurrentUser();
  const properties = await getOwenerProperties(user?.id);

  return (
    <div className='space-y-10'>
      <header>
        <h2 className='font-bold text-3xl md:text-4xl'>
          Manage Properties
        </h2>

        <p>
          Keep track of your property listings and their approval status.
        </p>
      </header>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Title</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Rent</Table.Column>
              <Table.Column>Type</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                properties.map(property => (
                  <Table.Row key={property?._id}>
                    <Table.Cell>{property?.propertyTitle}</Table.Cell>
                    <Table.Cell>{property?.location}</Table.Cell>
                    <Table.Cell>{property?.rent}</Table.Cell>
                    <Table.Cell>{property?.propertyType}</Table.Cell>
                    <Table.Cell>
                      <Chip color={
                        property?.status === 'Pending' ? "warning" : property?.status === 'Approved' ? 'success' : 'danger'
                      }>
                        {property?.status}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell className='flex gap-4'>
                      <Button isIconOnly variant="secondary">
                        <Pencil />
                      </Button>

                      <Button isIconOnly variant="danger">
                        <TrashBin />
                      </Button>
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