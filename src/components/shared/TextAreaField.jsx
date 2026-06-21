import { Label, TextArea } from "@heroui/react";

const TextAreaField = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="textarea-rows-6">{label}</Label>
      <TextArea
        aria-label={label}
        id="textarea-rows-6"
        name={name}
        placeholder={placeholder}
        rows={6}
        style={{resize: "vertical"}}
      />
    </div>
  );
};

export default TextAreaField;