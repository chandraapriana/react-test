import ButtonSolid from "../../../components/Buttons/ButtonSolid";
import Input from "../../../components/Inputs/Input";
import InputTextArea from "../../../components/Inputs/InputTextArea";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="container-contact">
        <div className="contact-text">
          <h1>
            Any questions? Write or call use. We will write back within 12h
          </h1>
          <p>
            (+62) 822 1410 6020{" "}
            <span>
              <img
                className="bullet-point"
                src="/images/ellipse_pointer.svg"
                alt=""
              />
            </span>{" "}
            aprianachandra@gmail.com
          </p>
        </div>
        <div className="contact-form">
          <Input placeholder="name" />
          <Input placeholder="email" />
          <InputTextArea />
          <ButtonSolid>
            <p>Send</p>
          </ButtonSolid>
        </div>
      </div>
    </div>
  );
};

export default Contact;
