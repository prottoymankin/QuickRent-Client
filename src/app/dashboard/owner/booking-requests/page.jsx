import BookingStatusUpdateBtn from "@/components/dashboard/owner/BookingStatusUpdateBtn";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getBookingRequestById } from "@/lib/api/bookings";
import { getCurrentUser } from "@/lib/session";
import { formatDate } from "@/utils/formatDate";
import { Check, Xmark } from "@gravity-ui/icons";
import { Chip, Table } from "@heroui/react";

const BookinRequestPage =  async () => {
  const user = await getCurrentUser();
  const requests = await getBookingRequestById(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Booking Requests'}
        subtitle={'Review and manage booking requests for your properties.'}
      />

      {
        requests.length > 0 ? (
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Booking Requests" className="w-full">
                <Table.Header>
                  <Table.Column isRowHeader>Tenant Name</Table.Column>
                  <Table.Column>Property Title</Table.Column>
                  <Table.Column>Property Amount</Table.Column>
                  <Table.Column>Move In Date</Table.Column>
                  <Table.Column>Payment Status</Table.Column>
                  <Table.Column>Booking Status</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>
                <Table.Body>
                  {
                    requests.map(req => (
                      <Table.Row key={req?._id}>
                        <Table.Cell>{req?.tenantName}</Table.Cell>
                        <Table.Cell>{req?.propertyTitle}</Table.Cell>
                        <Table.Cell>৳{req?.propertyAmount}</Table.Cell>
                        <Table.Cell>{formatDate(req?.moveInDate)}</Table.Cell>
                        <Table.Cell>
                          <Chip 
                            color='success'
                            variant='secondary'
                          >
                            {req?.paymentStatus}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell>
                          <Chip 
                            color={
                              req?.bookingStatus === 'Pending' ? "warning" : req?.bookingStatus === 'Approved' ? 'success' : 'danger'
                            }
                            variant="secondary"
                          >
                            {req?.bookingStatus}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell className='flex gap-4'>
                          <BookingStatusUpdateBtn
                            icon={<Check />}
                            status={'Approved'}
                            variant={'primary'}
                            id={req?._id}
                          />

                          <BookingStatusUpdateBtn
                            icon={<Xmark />}
                            status={'Reject'}
                            variant={'danger'}
                            id={req?._id}
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
            title="No Booking Requests"
            description="You haven't received any booking requests for your properties yet."
          />
        )
      }

    </div>
  );
};

export default BookinRequestPage;