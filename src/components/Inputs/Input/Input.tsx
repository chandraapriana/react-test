import type { Dispatch, SetStateAction } from "react";
const Input = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
