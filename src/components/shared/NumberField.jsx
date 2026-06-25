import { Input, Label, TextField } from "@heroui/react";

const NumberField = ({ label, name, placeholder, defaultValue }) => {
  return (
    <TextField
      className='w-full'
      defaultValue={defaultValue ? defaultValue : ''}
      isRequired
      name={name}
      type="number"
    >
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </TextField>
  );
};

export default NumberField;