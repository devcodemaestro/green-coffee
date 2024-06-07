import api from "./client";

export const getEventDetail = async successFn => {
  try {
    const arr = [];
    let res = "";
    let i = 1;
    while (arr.length !== 3) {
      res = await api.get(`/event/${i}`);
      arr.push(res.data);
      i++;
    }

    successFn([...arr]);
  } catch (err) {
    console.log(err);
  }
};
