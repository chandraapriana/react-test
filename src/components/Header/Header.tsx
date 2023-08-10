import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonSolid from "../Buttons/ButtonSolid";

import { useState } from "react";
import { LoginModal, RegisterModal } from "../Modals";

const Header = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false);

  return (
    <>
      <div className="header">
        <div className="left">
          <img className="logo" src="/images/ic_logo.svg" alt="" />
          <h1>Goodys</h1>
        </div>
        <div className="right">
          <a className="btn-nav" href="#about">
            About
          </a>
          <a className="btn-nav" href="#about">
            Pricing
          </a>
          <a className="btn-nav" href="#about">
            Contact
          </a>
          <ButtonOutline onClick={() => setIsShowLoginModal(true)}>
            <p>Log in</p>
          </ButtonOutline>
        </div>
        <div className="mobile">
          <ButtonSolid
            type="icon"
            onClick={() => setIsShowDropdown((prevValue) => !prevValue)}>
            <img className="btn-dropdown" src="/images/ic_bars.svg" alt="" />
          </ButtonSolid>

          <ul className={`dropdown-content ${isShowDropdown ? "show" : ""}`}>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li onClick={() => setIsShowLoginModal(true)}>Login</li>
          </ul>
        </div>
      </div>
      <LoginModal
        openModal={isShowLoginModal}
        onCloseModal={() => setIsShowLoginModal(false)}
        onClick={() => {
          setIsShowLoginModal(false);
          setIsShowRegisterModal(true);
        }}
      />
      <RegisterModal
        openModal={isShowRegisterModal}
        onCloseModal={() => setIsShowRegisterModal(false)}
        onClick={() => {
          setIsShowRegisterModal(false);
          setIsShowLoginModal(true);
        }}
      />
    </>
  );
};

export default Header;
