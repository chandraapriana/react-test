import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonSolid from "../Buttons/ButtonSolid";

import { useState } from "react";

const Header = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  return (
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
        <ButtonOutline>
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
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
