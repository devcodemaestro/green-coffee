import api from "./client";

export const putUserInfo = async payload => {
  try {
    const res = await api.put(`/user/update`, payload);
    const status = res.status;
    return { status };
  } catch (err) {
    console.log(err);
  }
};
