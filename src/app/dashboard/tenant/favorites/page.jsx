import FabPropertyDeleteBtn from "@/components/dashboard/owner/FabPropertyDeleteBtn";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getFavouritesByUserId } from "@/lib/api/favorites";
import { getCurrentUser } from "@/lib/session";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const FavoritesPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavouritesByUserId(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Saved Properties'}
        subtitle={'Keep track of your favorite listings and revisit them anytime.'}
      />

      {
        favorites.length > 0 ? (
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
                            <Button
                              className='bg-emerald-100 text-emerald-600'
                              isIconOnly
                            >
                              <FaEye />
                            </Button>
                          </Link>

                          <FabPropertyDeleteBtn 
                            userId={user?.id}
                            propertyId={property?._id}
                          />
                        </Table.Cell>
                      </Table.Row>
                    ))
                  }
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        ) : (
          <EmptyState
            title="No Favorite Properties"
            description="You haven't added any properties to your favorites yet."
            buttonText="Explore Properties"
            buttonHref="/all-properties"
          />
        )
      }
    </div>
  );
};

export default FavoritesPage;