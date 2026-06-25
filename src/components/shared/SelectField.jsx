import {Label, ListBox, Select} from "@heroui/react";

export function SelectField({label, options, name, defaulteSelectedKey}) {
  return (
    <Select
      className='w-full'
      defaultSelectedKey={defaulteSelectedKey ? [defaulteSelectedKey] : ''}
      name={name} 
      placeholder="Select one"
      isRequired
    >
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {
            options.map((option, idx) => (
              <ListBox.Item 
                id={option}
                key={idx} 
                textValue={option}
              >
                {option}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))
          }
        </ListBox>
      </Select.Popover>
    </Select>
  );
}