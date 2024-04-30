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
