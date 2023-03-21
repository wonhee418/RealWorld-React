import { API } from "./api";

export const getArticle = async () => {
  const { data } = await API.get(`/articles?limit=20&offset=0`);
  return data.articles;
};

export const getDetailArticle = async (slug: string) => {
  const { data } = await API.get(`/articles/${slug}`);
  return data.article;
};
