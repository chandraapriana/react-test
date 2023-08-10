import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonSolid from "../Buttons/ButtonSolid";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { LoginModal, RegisterModal } from "../Modals";

import useGetLoggedUser from "../../hooks/useGetLoggedUser";
import useHandleLogoutUser from "../../hooks/useHandleLogoutUser";

const Header = () => {
  const [user] = useGetLoggedUser();
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowDropdownLogout, setIsShowDropdownLogout] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false);
  const [logout] = useHandleLogoutUser();
  const handleLogoutUser = () => {
    const isLoggedOut = logout();
    if (isLoggedOut.status) {
      toast.success(isLoggedOut.message);
    } else {
      toast.error(isLoggedOut.message);
    }
    setIsShowDropdownLogout(false);
  };
  console.log(user);
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
          <ButtonOutline
            onClick={() =>
              user
                ? setIsShowDropdownLogout((prev) => !prev)
                : setIsShowLoginModal(true)
            }>
            <p>{user ? user?.name?.substring(0, 10) : "Log in"} </p>
          </ButtonOutline>
          <ul
            className={`dropdown-content logout ${
              isShowDropdownLogout ? "show" : ""
            }`}>
            <li onClick={() => handleLogoutUser()}>Logout</li>
          </ul>
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
