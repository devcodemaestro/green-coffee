import api from "./client";

export const postSignUp = async ({ payload }) => {
  try {
    const res = await api.post(`/user/signup`, payload);
    const result = res.status;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
