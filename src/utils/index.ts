import Cookies from "js-cookie";
export const loginUser = (email: string) => {
  Cookies.set("user", email);
};
