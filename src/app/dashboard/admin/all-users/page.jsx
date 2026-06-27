import RoleSelect from "@/components/dashboard/admin/RoleSelect";
import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getAllUsers } from "@/lib/api/user";
import { formatDate } from "@/utils/formatDate";
import { Table } from "@heroui/react";

const AllUserPage = async () => {
  const users = await getAllUsers();

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'All Users'}
        subtitle={'View all users and update their roles.'}
      />

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="All users" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>No.</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Joined Date</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {
                users.map((user, idx) => (
                  <Table.Row key={user?._id}>
                    <Table.Cell>{idx + 1}</Table.Cell>
                    <Table.Cell>{user?.name}</Table.Cell>
                    <Table.Cell>{user?.email}</Table.Cell>
                    <Table.Cell>{formatDate(user?.createdAt)}</Table.Cell>
                    <Table.Cell>{user?.role}</Table.Cell>
                    <Table.Cell>
                      <RoleSelect user={user} />
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

export default AllUserPage;