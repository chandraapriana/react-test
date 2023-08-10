const ButtonSolid = ({
  children,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  type?: "icon" | "button";
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={`btn-solid ${type}`}>
      {children}
    </button>
  );
};

export default ButtonSolid;
