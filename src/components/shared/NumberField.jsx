import { Input, Label, TextField } from "@heroui/react";

const NumberField = ({ label, name, placeholder }) => {
  return (
    <TextField
      isRequired
      className='w-full'
      name={name}
      type="number"
    >
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </TextField>
  );
};

export default NumberField;