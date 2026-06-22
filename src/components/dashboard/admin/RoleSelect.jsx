import { Select, ListBox } from "@heroui/react";

const RoleSelect = () => {
  return (
    <Select className="w-full" placeholder="Change user role">
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