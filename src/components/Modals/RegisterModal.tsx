import { Modal } from "react-responsive-modal";
import Input from "../Inputs/Input";
import ButtonSolid from "../Buttons/ButtonSolid";
const RegisterModal = ({
  openModal,
  onCloseModal,
  onClick,
}: {
  openModal: boolean;
  onCloseModal: () => void;
  onClick?: () => void;
}) => {
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
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Repeat Password" />
        <ButtonSolid>
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
