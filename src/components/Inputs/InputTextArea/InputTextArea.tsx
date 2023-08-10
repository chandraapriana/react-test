const InputTextArea = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string;
  onChange: any;
  value: string;
}) => {
  return (
    <textarea
      name="desc"
      id="desc"
      cols={30}
      rows={10}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}></textarea>
  );
};

export default InputTextArea;
