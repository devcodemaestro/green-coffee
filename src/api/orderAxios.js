import api from "./client";

export const getMenuCate = async (cateId, setMenuData) => {
  try {
    let url;
    switch (cateId) {
      case 1:
        url = `/menu/coffee`;
        break;
      case 2:
        url = `/menu/beverage`;
        break;
      case 3:
        url = `/menu/food`;
        break;
      case 4:
        url = `/menu/goods`;
        break;
    }
    const res = await api.get(`${url}`);
    const result = res.data;
    setMenuData(result);
  } catch (err) {
    console.log(err);
  }
};

export const getOderList = async setListData => {
  try {
    const res = await api.get(`/orders/list`);
    const result = res.data;
    setListData(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const postOrderDetail = async (formData, setMenuData) => {
  try {
    const res = await api.post(`/menu/detail`, formData);
    const result = res.data;
    setMenuData(result);
  } catch (err) {
    console.log(err);
  }
};
