import api from "./client";

export const postCartAdd = async formData => {
  try {
    const res = await api.post(`/cart/add`, formData);
    const result = res.status;

    return result;
  } catch (err) {
    console.log(err);
  }
};
