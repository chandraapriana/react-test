const Input = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string;
  onChange: any;
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
