import { LOGGED_USER_KEY } from "../utils/constants";
import useHandleGetUsers from "./useHandleGetUsers";

const useHandleLogin = () => {
  const [users] = useHandleGetUsers();

  const login = (email: string, password: string) => {
    if (!email || !password) {
      return { status: false, message: "Input is required" };
    }
    const isFoundUser = users?.find(
      (user) => user.email === email && user.password === password
    );
    if (!isFoundUser) {
      return { status: false, message: "User Not Found" };
    }
    window.localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(isFoundUser));
    return { status: true, message: "Login Successfull" };
  };

  return [login];
};

export default useHandleLogin;
