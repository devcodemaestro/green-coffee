import api from "./client";

export const getMenuDetailsCate = async ({ payload }) => {
  try {
    const res = await api.post(`/menu/deail`, payload);
    const result = res.status;
    return result;
  } catch (err) {
    console.log(err);
  }
};
