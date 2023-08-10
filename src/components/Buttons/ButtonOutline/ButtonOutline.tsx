const ButtonOutline = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className="btn-outline">
      {children}
    </button>
  );
};

export default ButtonOutline;
