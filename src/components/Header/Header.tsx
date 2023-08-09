import ButtonOutline from "../Buttons/ButtonOutline";

const Header = () => {
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
    </div>
  );
};

export default Header;
