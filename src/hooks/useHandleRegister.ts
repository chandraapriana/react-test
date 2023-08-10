import { USERS_KEY } from "../utils/constants";
import useHandleGetUsers from "./useHandleGetUsers";

const useHandleRegister = () => {
  const [users] = useHandleGetUsers();
  const register = (
    name: string,
    email: string,
    password1: string,
    password2: string
  ) => {
    if (!name || !email || !password1 || !password2) {
      return { status: false, message: "Input is required" };
    }
    if (password1 !== password2) {
      return { status: false, message: "Passwords are not the same" };
    }
    const user = {
      name,
      email,
      password: password1,
    };
    if (users) {
      window.localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
    } else {
      window.localStorage.setItem(USERS_KEY, JSON.stringify([user]));
    }

    return { status: true, message: "Register successful, please login" };
  };

  return [register];
};

export default useHandleRegister;
