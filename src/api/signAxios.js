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

export const putResign = async(data) => {
  try {
    const res = await api.put(`/user/resign`, data)
    const result =res.status;
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
