import api from "./client";

export const postCartAdd = async formData => {
  try {
    const res = await api.post(`/cart/add`, formData);
    const result = res.status;

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const putCartQuaPlus = async id => {
  try {
    const formData = { menuId: id };
    const res = await api.put(`/cart/quantityplus`, formData);
  } catch (err) {
    console.log(err);
  }
};

export const putCartQuaMinus = async id => {
  try {
    const formData = { menuId: id };
    const res = await api.put(`/cart/quantityminus`, formData);
  } catch (err) {
    console.log(err);
  }
};

export const getCartTotalPrice = async setTotalPrice => {
  try {
    const res = await api.get(`/cart/cart/total`);
    const result = res.data;
    setTotalPrice(result);
  } catch (err) {
    console.log(err);
  }
};
