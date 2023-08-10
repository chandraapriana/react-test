import { USERS_KEY } from "../utils/constants";
type userType = {
  name: string;
  email: string;
  password: string;
};
const useHandleGetUsers = (): [userType[] | null] => {
  const userJson = window.localStorage.getItem(USERS_KEY);
  let users: userType[];
  if (userJson) {
    users = JSON.parse(userJson);
  } else {
    users = JSON.parse("[]");
  }
  console.log(users);
  return [users];
};

export default useHandleGetUsers;
