import api from "./client";

export const getCartList = async setMenuCartData => {
  try {
    const { data } = await api.get(`/cart/search`);
    setMenuCartData(data);
  } catch (err) {
    console.log(err);
  }
};

export const postPayment = async updatedItems => {
  try {
    const res = await api.post(`/orders/neworder`, updatedItems);
    const result = res.status;

    return result;
  } catch (err) {
    console.log(err);
  }
};

// 400에러
export const deleteCart = async formData => {
  try {
    console.log(formData);
    const res = await api.delete(`/cart/cartout`, { data: formData });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
