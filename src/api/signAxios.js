import api, { client } from "./client";

export const postSignUp = async ({ payload, setSignErr, setErrModalOpen }) => {
  try {
    const res = await api.post(`/user/signup`, payload);
    const result = res.status;
    return result;
  } catch (err) {
    if (err.response) {
      setSignErr(err.response.data);
      setErrModalOpen(true);
    }
  }
};

export const putResign = async setErrMsg => {
  try {
    const res = await api.put(`/user/resign`);
    const result = res.status;
    return result;
  } catch (err) {
    setErrMsg(`${err.response.data.message}`);
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
        url = `/user/findpw?nickname=${payload.nickname}&phone=${payload.phone}`;
        break;
    }
    const res = await api.post(url, payload);
    const resStatus = res.status;
    const result = res.data;
    switch (resStatus) {
      case 200:
        setResultMsg(result);
        break;
      case 201:
        setResultMsg(result);
        break;
    }

    return resStatus;
  } catch (err) {
    setErrMsg("작성하신 내용을 다시 확인해주세요.");
  }
};

export const postEmailCode = async formData => {
  try {
    const res = await api.post(
      `/user/findPassword
`,
      formData,
    );
    const result = res.data;

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postEmailConfirm = async (formData, setErrModal, setErrMsg) => {
  try {
    const res = await api.post(`/user/verifyCodeForPassword`, formData);
    const result = res.data;

    return result;
  } catch (err) {
    setErrModal(true);
    setErrMsg(err.response.data);
  }
};
