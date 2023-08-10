import { Modal } from "react-responsive-modal";
import Input from "../Inputs/Input";
import ButtonSolid from "../Buttons/ButtonSolid";
import { useState } from "react";
import useHandleRegister from "../../hooks/useHandleRegister";
import { toast } from "react-hot-toast";
const RegisterModal = ({
  openModal,
  onCloseModal,
  onClick,
}: {
  openModal: boolean;
  onCloseModal: () => void;
  onClick?: () => void;
}) => {
  const [register] = useHandleRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const onRegister = () => {
    const isSuccessRegister2 = register(name, email, password, repeatPassword);
    if (isSuccessRegister2.status) {
      toast.success(isSuccessRegister2.message);
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      onCloseModal();
    } else {
      toast.error(isSuccessRegister2.message);
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      center
      classNames={{ modal: "custom-modal register" }}>
      <div className="header-modal">
        <img className="logo" src="/images/ic_logo_black.svg" alt="" />
        <h1>Create New Account</h1>
        <p>please register by filling with your personal detail.</p>
      </div>
      <div className="container-modal">
        <Input placeholder="Name" onChange={setName} value={name} />
        <Input placeholder="Email" onChange={setEmail} value={email} />
        <Input placeholder="Password" onChange={setPassword} value={password} />
        <Input
          placeholder="Repeat Password"
          onChange={setRepeatPassword}
          value={repeatPassword}
        />
        <ButtonSolid onClick={onRegister}>
          <h1>Sign up</h1>
        </ButtonSolid>
      </div>
      <div className="footer-modal">
        <p>
          Already Have an Account? <span onClick={onClick}>Sign in</span>{" "}
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
