import api from "./client";

export const postTossPay = async payReq => {
  try {
    const res = await api.post(
      `/v1/api/payment?payType=${payReq.payType}&amount=${payReq.amount}&email=${payReq.email}&customerName=${payReq.customerName}`,
    );
    const result = res.status;

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getTossPaySuccess = async () => {
  try {
    const res = await api.get(`/v1/api/payment/success`);
  } catch (err) {
    console.log(err);
  }
};

export const getTossPayFailed = async () => {
  try {
    const res = await api.get(`/v1/api/payment/fail`);
  } catch (err) {
    console.log(err);
  }
};
