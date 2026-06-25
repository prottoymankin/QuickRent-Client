import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getAllBookings } from "@/lib/api/bookings";
import { formatDate } from "@/utils/formatDate";
import { Table } from "@heroui/react";

const TransactionsPage = async () => {
  const transactions = await getAllBookings();

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'All Transactions'}
        subtitle={'Monitor and review all payment transactions across the platform.'}
      />

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Transaction Id</Table.Column>
              <Table.Column>Property Name</Table.Column>
              <Table.Column>Tenant Name</Table.Column>
              <Table.Column>Owner Name</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column>Date</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                transactions.map(transaction => (
                  <Table.Row key={transaction?._id}>
                    <Table.Cell>{transaction?.transactionId}</Table.Cell>
                    <Table.Cell>{transaction?.propertyTitle}</Table.Cell>
                    <Table.Cell>{transaction?.tenantName}</Table.Cell>
                    <Table.Cell>{transaction?.ownerName}</Table.Cell>
                    <Table.Cell>৳{transaction?.propertyAmount}</Table.Cell>
                    <Table.Cell>{formatDate(transaction?.bookingDate)}</Table.Cell>
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

export default TransactionsPage;