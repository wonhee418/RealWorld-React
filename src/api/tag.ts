import { API } from "./api";

export const getTag = async () => {
  const { data } = await API.get(`/tags`);

  return data.tags;
};
