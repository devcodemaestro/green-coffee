import api from "./client";

export const getSearchMenu = async (payload, setSearchData) => {
  try {
    const res = await api.get(`/menu/${payload}`);
    const result = res.data;
    console.log(result);
    setSearchData(result);
  } catch (err) {
    console.log(err);
  }
};
