import api from "./client";
import { getCookie } from "./cookie";

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

export const cartPriceCheck = async setTotalPrice => {
  try {
    const { data } = await api.get(`/cart/cart/total`);
    setTotalPrice(data);
  } catch (err) {
    console.log(err);
  }
};
// 400에러
export const cartDeleteOut = async formData => {
  const token = getCookie("token");
  const headers = {
    accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  try {
    await api.delete(`/cart/cartout`, headers, formData);
  } catch (err) {
    console.log(err);
  }
};
