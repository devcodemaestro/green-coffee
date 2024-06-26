import axios from "axios";
import { setCookie } from "./cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const postLogin = async ({ payload, setErrMsg }) => {
  try {
    const res = await client.post(`/user/login`, payload);
    const { role, token, refreshToken, ...result } = res.data;
    if (role === "USER" && token) {
      setCookie("token", token);
      setCookie("refreshToken", refreshToken);
    }
    return { role, token, result };
  } catch (err) {
    if (err.response.status === 400) {
      setErrMsg(err.response.data);
    }
  }
};

export default api;
export { postLogin, client };
