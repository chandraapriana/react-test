import { USERS_KEY } from "../utils/constants";

const useHandleGetUsers = () => {
  let users = window.localStorage.getItem(USERS_KEY);
  if (users) {
    users = JSON.parse(users);
  }
  console.log(users);
  return [users];
};

export default useHandleGetUsers;
