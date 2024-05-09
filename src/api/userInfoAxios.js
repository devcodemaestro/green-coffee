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
  let data;
  switch (payload) {
    case 1:
      data = `/menu/coffee`;
      break;
    case 2:
      data = `/menu/beverage`;
      break;
    case 3:
      data = `/menu/food`;
      break;
    case 4:
      data = `/menu/goods`;
      break;
  }
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
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
