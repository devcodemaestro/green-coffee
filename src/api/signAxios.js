import api, { client } from "./client";

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

export const putResign = async data => {
  try {
    const res = await api.put(`/user/resign`, data);
    const result = res.status;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const postFindAccount = async ({
  findState,
  payload,
  setResultMsg,
  setErrMsg,
}) => {
  try {
    let url;
    switch (findState) {
      case true:
        url = `/user/findemail`;
        break;
      case false:
        url = `/user/findpw`;
        break;
    }
    const res = await api.post(url, payload);
    const resStatus = res.status;
    const result = res.data;
    console.log(result);
    switch (resStatus) {
      case 200:
        setResultMsg(result);
        break;
      case 201:
        setResultMsg(result);
        break;
      case 500:
        setErrMsg("작성하신 내용을 다시 확인해주세요.");
        break;
    }

    return resStatus;
  } catch (err) {
    console.log(err);
  }
};
