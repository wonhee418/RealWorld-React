import { API } from "./api";

export const getUser = async (username: string) => {
  const { data } = await API.get(`/profiles/${username}`);
  return data.profile;
};
