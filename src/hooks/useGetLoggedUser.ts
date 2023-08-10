import { LOGGED_USER_KEY } from "../utils/constants";

const useGetLoggedUser = () => {
  let user = window.localStorage.getItem(LOGGED_USER_KEY);
  if (user) {
    user = JSON.parse(user);
  }
  return [user];
};

export default useGetLoggedUser;
