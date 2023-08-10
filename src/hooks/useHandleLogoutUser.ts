import { LOGGED_USER_KEY } from "../utils/constants";

const useHandleLogoutUser = () => {
  const logout = () => {
    window.localStorage.removeItem(LOGGED_USER_KEY);
    return { status: true, message: "Logout Successfull" };
  };

  return [logout];
};

export default useHandleLogoutUser;
