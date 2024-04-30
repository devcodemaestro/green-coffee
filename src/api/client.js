import axios from "axios";
import { setCookie } from "./cookie";

const api = axios.create({
  baseURL: `http://back.green-coffee.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

const postLogin = async ({ payload }) => {
  try {
    const res = await api.post(`/token`, payload);
    const status = res.status;
    const result = res.data;
    if (status === 200) {
      setCookie("accessToken", result);
    }
    return { status, result };
  } catch (err) {
    console.log(err);
  }
};

export default api;
export { postLogin };
