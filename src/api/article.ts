import { API } from "./api";

export const getArticle = async () => {
  const { data } = await API.get(`/articles?limit=20&offset=0`);
  console.log("data = ", data);

  return data.articles;
};
