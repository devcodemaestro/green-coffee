import axios from "axios";
import { setCookie } from "./cookie";

const api = axios.create({
  baseURL: `http://back.green-coffee.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

const client = axios.create({
  baseURL: `http://back.green-coffee.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

const postLogin = async ({ payload }) => {
  try {
    const res = await client.post(`/user/login`, payload);
    const { role, token, ...result } = res.data;
    if (role === "USER" && token) {
      setCookie("token", token);
    }
    return { role, token, result };
  } catch (err) {
    console.log(err);
  }
};

export default api;
export { postLogin, client };
