import EmptyState from "@/components/dashboard/shared/EmptyState";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getBookingsById } from "@/lib/api/bookings";
import { getCurrentUser } from "@/lib/session";
import { formatDate } from "@/utils/formatDate";
import { Chip, Table } from "@heroui/react";

const MyBookingsPage = async () => {
  const user = await getCurrentUser();
  const bookings = await getBookingsById(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Booked Properties'}
        subtitle={'Track the status of your booked properties and payment history.'}
      />

      {
        bookings.length > 0 ? (
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="w-full">
                <Table.Header>
                  <Table.Column isRowHeader>Property Name</Table.Column>
                  <Table.Column>Booking Date</Table.Column>
                  <Table.Column>Amount Paid</Table.Column>
                  <Table.Column>Booking Status</Table.Column>
                  <Table.Column>Payment Status</Table.Column>
                </Table.Header>
                <Table.Body>
                  {
                    bookings.map(b => (
                      <Table.Row key={b?._id}>
                        <Table.Cell>{b?.propertyTitle}</Table.Cell>
                        <Table.Cell>{formatDate(b?.bookingDate)}</Table.Cell>
                        <Table.Cell>৳{b?.propertyAmount}</Table.Cell>
                        <Table.Cell>
                          <Chip 
                            color={
                              b?.bookingStatus === 'Pending' ? "warning" : b?.bookingStatus === 'Approved' ? 'success' : 'danger'
                            }
                            variant="secondary"
                          >
                            {b?.bookingStatus}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell>
                          <Chip 
                            color='success'
                            variant='secondary'
                          >
                            {b?.paymentStatus}  
                          </Chip>
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
            title="No Bookings Yet"
            description="You haven't booked any properties yet. Explore available rentals to get started."
            buttonText="Browse Properties"
            buttonHref="/all-properties"
          />
        )
      }
    </div>
  );
};

export default MyBookingsPage;