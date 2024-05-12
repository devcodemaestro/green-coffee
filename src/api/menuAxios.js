import api from "./client";

export const getCartList = async setMenuCartData => {
  try {
    const { data } = await api.get(`/cart/search`);
    setMenuCartData(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
