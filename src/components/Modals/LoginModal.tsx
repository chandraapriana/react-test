import { Modal } from "react-responsive-modal";
import Input from "../Inputs/Input";
import ButtonSolid from "../Buttons/ButtonSolid";
import { toast } from "react-hot-toast";
import useHandleLogin from "../../hooks/useHandleLogin";
import { useState } from "react";
const LoginModal = ({
  openModal,
  onCloseModal,
  onClick,
}: {
  openModal: boolean;
  onCloseModal: () => void;
  onClick?: () => void;
}) => {
  const [login] = useHandleLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const isSuccessLogin = login(email, password);
    if (isSuccessLogin.status) {
      toast.success(isSuccessLogin.message);
      setEmail("");
      setPassword("");
      onCloseModal();
    } else {
      toast.error(isSuccessLogin.message);
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      center
      classNames={{ modal: "custom-modal login" }}>
      <div className="header-modal">
        <img className="logo" src="/images/ic_logo_black.svg" alt="" />
        <h1>Welcome Back</h1>
        <p>please enter your details to sign in.</p>
      </div>
      <div className="container-modal">
        <Input
          placeholder="Email"
          onChange={setEmail}
          value={email}
          type="email"
        />
        <Input
          placeholder="Password"
          onChange={setPassword}
          value={password}
          type="password"
        />
        <ButtonSolid onClick={() => onLogin()}>
          <h1>Sign in</h1>
        </ButtonSolid>
      </div>
      <div className="footer-modal">
        <p>
          Dont have an accout? <span onClick={onClick}>Create account</span>{" "}
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
