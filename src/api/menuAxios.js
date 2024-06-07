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
    const res = await api.delete(`/cart/cartout`, { data: formData });
  } catch (err) {
    console.log(err);
  }
};

export const postCustomAdd = async (formData, setCustomResultMsg) => {
  try {
    const res = await api.post(`/custom/add`, formData);
    const result = res.data;
    setCustomResultMsg(result);
  } catch (err) {
    setCustomResultMsg(err.response.data);
  }
};

export const getCustomMenu = async (setCustomData, page, setCount) => {
  const pages = page - 1;
  try {
    const res = await api.get(`/custom/search?page=${pages}&size=5`);
    const result = res.data;
    setCount(res.data.totalElements);
    setCustomData(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteCustomMenu = async formData => {
  try {
    const res = await api.delete(`/custom/customdelete`, { data: formData });
    const result = res.data;

    return result;
  } catch (err) {
    console.log(err);
  }
};
