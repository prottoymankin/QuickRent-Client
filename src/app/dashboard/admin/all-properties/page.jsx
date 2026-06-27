import ApprovePropertyButton from "@/components/dashboard/admin/ApprovePropertyButton";
import { PropertyRejectBtn } from "@/components/dashboard/admin/PropertyRejectBtn";
import { DeletePropertyModal } from "@/components/dashboard/shared/DeletePropertyModal";
import { EditPropertyModal } from "@/components/dashboard/shared/EditPropertyModal";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getProperties } from "@/lib/api/properties";
import { Chip, Pagination, Table } from "@heroui/react";
import Link from "next/link";

const AllPropertiesPage = async ({ searchParams }) => {
  const params = await searchParams;
  
  const { data:properties, page, totalPage } = await getProperties(params.page);

  const pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Properties Overview'}
        subtitle={'Get a complete overview of all properties and their current status.'}
      />

      {
        properties.length > 0 ? (
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="All properties" className="w-full">
                <Table.Header>
                  <Table.Column isRowHeader>Property Title</Table.Column>
                  <Table.Column>Property Type</Table.Column>
                  <Table.Column>Location</Table.Column>
                  <Table.Column>Owner Name</Table.Column>
                  <Table.Column>Rent</Table.Column>
                  <Table.Column>Status</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>
                <Table.Body>
                  {
                    properties.map(property => (
                      <Table.Row key={property._id}>
                        <Table.Cell>{property?.propertyTitle}</Table.Cell>
                        <Table.Cell>{property?.propertyType}</Table.Cell>
                        <Table.Cell>{property?.location}</Table.Cell>
                        <Table.Cell>{property?.ownerName}</Table.Cell>
                        <Table.Cell>{property?.rent}</Table.Cell>
                        <Table.Cell>
                          <Chip 
                            color={
                              property?.status === 'Pending' ? "warning" : property?.status === 'Approved' ? 'success' : 'danger'
                            }
                            variant="secondary"
                          >
                            {property?.status}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell className='flex gap-4'>
                          <ApprovePropertyButton
                            property={property}
                          />

                          <PropertyRejectBtn
                            propertyId={property?._id}
                          />

                          <EditPropertyModal
                            property={property}
                            route={'/dashboard/admin/all-properties'}
                          />

                          <DeletePropertyModal
                              propertyId={property?._id}
                              route={'/dashboard/admin/all-properties'}
                          />
                        </Table.Cell>
                      </Table.Row>
                    ))
                  }
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>

            <Table.Footer>
              <Pagination size="sm">
                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.Previous
                      isDisabled={page === 1}
                    >
                      <Link 
                        className='flex'
                        href={`/dashboard/admin/all-properties?page=${page - 1}`}
                      >
                        <Pagination.PreviousIcon />
                        Prev
                      </Link>
                    </Pagination.Previous>
                  </Pagination.Item>
                  {pages.map((p) => (
                    <Pagination.Item key={p}>
                      <Link href={`/dashboard/admin/all-properties?page=${p}`}>
                        <Pagination.Link
                          className={p === page && 'bg-emerald-600 text-white'} 
                          isActive={p === page}
                        >
                          {p}
                        </Pagination.Link>
                      </Link>
                    </Pagination.Item>
                  ))}
                  <Pagination.Item>
                    <Pagination.Next
                      isDisabled={page === totalPage}
                    >
                      <Link
                        className='flex'
                        href={`/dashboard/admin/all-properties?page=${page + 1}`}
                      >
                        Next
                        <Pagination.NextIcon />
                      </Link>
                    </Pagination.Next>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </Table.Footer>
          </Table>
        ) : (
          <EmptyState
            title="No Properties Available"
            description="There are currently no properties in the system."
          />
        )
      }
    </div>
  );
};

export default AllPropertiesPage;