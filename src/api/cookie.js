import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    secure: true,
    sameSite: "none",
    httpOnly: false,
    // maxAge: ,
  });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = name => {
  return cookies.remove(name, { path: "/" });
};
