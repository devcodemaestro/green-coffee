import api from "./client";

export const postPassCheck = async (data, setErrState) => {
  try {
    const res = await api.post(`/user/checkpw`, data);
    const result = res.status;
    return { result };
  } catch (err) {
    const { response } = err;
    const { status } = response;
    if (status === 500) {
      setErrState(true);
    }
  }
};

export const putUserInfo = async payload => {
  try {
    const res = await api.put(`/user/update`, payload);
    const status = res.status;
    return { status };
  } catch (err) {
    console.log(err);
  }
};

export const postLogout = async () => {
  try {
    const res = await api.post(`/user/logout`);
    const result = res.status;

    return { result };
  } catch (err) {
    console.log(err);
  }
};
