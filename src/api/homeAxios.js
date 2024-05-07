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
    const res = await api.get(`/recommend/`);
    const result = res.data;
    setPopularData(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
