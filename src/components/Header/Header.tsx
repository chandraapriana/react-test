import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonSolid from "../Buttons/ButtonSolid";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { LoginModal, RegisterModal } from "../Modals";
import { scroller } from "react-scroll";
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

  return (
    <>
      <div className="header">
        <div className="left">
          <img className="logo" src="/images/ic_logo.svg" alt="" />
          <h1>Goodys</h1>
        </div>
        <div className="right">
          <a
            className="btn-nav"
            href="#about"
            onClick={() =>
              scroller.scrollTo("about", {
                smooth: true,
                offset: -32,
                duration: 500,
              })
            }>
            About
          </a>
          <a
            className="btn-nav"
            href="#pricing"
            onClick={() =>
              scroller.scrollTo("pricing", {
                smooth: true,
                offset: -32,
                duration: 500,
              })
            }>
            Pricing
          </a>
          <a
            className="btn-nav"
            href="#about"
            onClick={() =>
              scroller.scrollTo("contact", {
                smooth: true,
                offset: 0,
                duration: 500,
              })
            }>
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
            {user && (
              <>
                <li>{user?.name?.substring(0, 10)}</li>
                <hr />
              </>
            )}
            <li
              onClick={() => {
                scroller.scrollTo("about", {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                });
                setIsShowDropdown(false);
              }}>
              About
            </li>
            <li
              onClick={() => {
                scroller.scrollTo("pricing", {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                });
                setIsShowDropdown(false);
              }}>
              Pricing
            </li>
            <li
              onClick={() => {
                scroller.scrollTo("contact", {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                });
                setIsShowDropdown(false);
              }}>
              Contact
            </li>
            <li
              onClick={() =>
                user ? handleLogoutUser() : setIsShowLoginModal(true)
              }>
              {user ? "Log out" : "Log in"}
            </li>
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
