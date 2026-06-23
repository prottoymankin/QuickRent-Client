'use client';

import { updateUserRole } from "@/lib/actions/user";
import { Select, ListBox, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const RoleSelect = ({ user }) => {
  const router = useRouter();

  const handleOnChange = async (role) => {
    const updateData = {
      userId: user?._id,
      newRole: role
    };

    const result = await updateUserRole(updateData);
    
    if (result.acknowledged) {
      toast.success(`User role updated successfully to ${role}`);
      router.push('/dashboard/admin/all-users');
    }
  }

  return (
    <Select 
      aria-label='Role select'
      className="w-full" 
      onChange={handleOnChange}
      placeholder="Change user role"
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="Tenant" textValue="Tenant">
            Tenant
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Owner" textValue="Owner">
            Owner
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Admin" textValue="Admin">
            Admin
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default RoleSelect;