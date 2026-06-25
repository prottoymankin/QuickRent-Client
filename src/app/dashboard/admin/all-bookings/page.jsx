import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getAllBookings } from "@/lib/api/bookings";
import { formatDate } from "@/utils/formatDate";
import { Chip, Table } from "@heroui/react";

const AllBookingsPage = async () => {
  const bookings = await getAllBookings();

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'All Bookings'}
        subtitle={'Monitor and manage all property bookings across the platform.'}
      />

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="All bookings" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Tenant</Table.Column>
              <Table.Column>Owner</Table.Column>
              <Table.Column>Property</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column>Move In Date</Table.Column>
              <Table.Column>Payment Status</Table.Column>
              <Table.Column>Booking Status</Table.Column>
              <Table.Column>Booking Date</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                bookings.map(booking => (
                  <Table.Row key={booking?._id}>
                    <Table.Cell>{booking?.tenantName}</Table.Cell>
                    <Table.Cell>{booking?.ownerName}</Table.Cell>
                    <Table.Cell>{booking?.propertyTitle}</Table.Cell>
                    <Table.Cell>৳{booking?.propertyAmount}</Table.Cell>
                    <Table.Cell>{formatDate(booking?.moveInDate)}</Table.Cell>
                    <Table.Cell>
                      <Chip 
                        color='success'
                        variant='secondary'
                      >
                        {booking?.paymentStatus}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell>
                      <Chip 
                        color={
                          booking?.bookingStatus === 'Pending' ? "warning" : booking?.bookingStatus === 'Approved' ? 'success' : 'danger'
                        }
                        variant="secondary"
                      >
                        {booking?.bookingStatus}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell>{formatDate(booking?.bookingDate)}</Table.Cell>
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

export default AllBookingsPage;