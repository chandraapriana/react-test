import { useState } from "react";
import Input from "../../../components/Inputs/Input";
import InputTextArea from "../../../components/Inputs/InputTextArea";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contact" id="contact">
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
          <Input value={name} onChange={setName} placeholder="Name" />
          <Input
            value={email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
          />
          <InputTextArea
            value={message}
            onChange={setMessage}
            placeholder="Message"
          />

          <a
            className="btn-solid"
            href={`mailto:aprianachandra@gmail.com?subject=Contact%20Us&body=${
              message +
              "%0D%0A%0D%0A%0D%0AEmail: " +
              email +
              "%0D%0AName: " +
              name
            }`}>
            <p>Send</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
