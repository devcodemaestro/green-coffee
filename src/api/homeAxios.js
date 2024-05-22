import api from "./client";

export const getEvent = async setEventData => {
  try {
    const res = await api.get(`/homeAd/event`);
    const result = res.data;
    setEventData(result);
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMenu = async setPopularData => {
  try {
    const res = await api.get(`/recommend/list`);
    const result = res.data;
    setPopularData(result);
  } catch (err) {
    console.log(err);
  }
};

// export const getPopularDetail = async () => {
//   try {
//     const res = await api.get(`recommend/detail`);
//     const result = res.data;
//   } catch (error) {}
// };
