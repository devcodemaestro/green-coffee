import api from "./client";
// const baseURL = `http://back.green-coffee.shop`;
export const getEventDetail = async successFn => {
  try {
    const arr = [];
    let res = "";
    let i = 1;
    while (arr.length !== 3) {
      res = await api.get(`/event/${i}`);
      arr.push(res.data);
      console.log("res", res);
      i++;
    }
    console.log("arr", arr);

    successFn([...arr]);
  } catch (err) {
    console.log(err);
  }
};
