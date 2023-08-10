import { LOGGED_USER_KEY } from "../utils/constants";
type userType = {
  name: string;
  email: string;
  password: string;
};
const useGetLoggedUser = (): [userType | null] => {
  const userJSon = window.localStorage.getItem(LOGGED_USER_KEY);
  let user: userType | null = null;
  if (userJSon) {
    user = JSON.parse(userJSon);
  }

  return [user];
};

export default useGetLoggedUser;
