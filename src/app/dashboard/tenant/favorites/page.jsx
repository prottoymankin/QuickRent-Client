import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getFavouritesByUserId } from "@/lib/api/favorites";
import { getCurrentUser } from "@/lib/session";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const FavoritesPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavouritesByUserId(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Saved Properties'}
        subtitle={'Keep track of your favorite listings and revisit them anytime.'}
      />

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Favorite Properties" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>PropertyTitle</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Rent</Table.Column>
              <Table.Column>Type</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                favorites.map(property => (
                  <Table.Row key={property?._id}>
                    <Table.Cell>{property?.propertyTitle}</Table.Cell>
                    <Table.Cell>{property?.location}</Table.Cell>
                    <Table.Cell>৳{property?.rent}</Table.Cell>
                    <Table.Cell>{property?.propertyType}</Table.Cell>
                    <Table.Cell className='flex gap-4'>
                      <Link href={`/all-properties/${property?._id}`}>
                        <Button isIconOnly>
                          <FaEye />
                        </Button>
                      </Link>

                      <Button 
                        isIconOnly 
                        variant="danger">
                        <FaTrashAlt />
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

export default FavoritesPage;