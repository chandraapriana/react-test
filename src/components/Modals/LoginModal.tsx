import { Modal } from "react-responsive-modal";
const LoginModal = ({
  openModal,
  onCloseModal,
}: {
  openModal: boolean;
  onCloseModal: () => void;
}) => {
  return (
    <Modal open={openModal} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    </Modal>
  );
};

export default LoginModal;
