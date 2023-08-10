import type { Dispatch, SetStateAction } from "react";
const Input = ({
  placeholder,
  onChange,
  value,
  type = "text",
}: {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  type?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
