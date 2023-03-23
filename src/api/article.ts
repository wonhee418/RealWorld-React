import { API } from "./api";
interface props {
  slug: string;
  commentValue: string;
}

export const getArticle = async (limit: number, current: number) => {
  const { data } = await API.get(`/articles?limit=${limit}&offset=${current}`);
  return data;
};

export const getDetailArticle = async (slug: string) => {
  const { data } = await API.get(`/articles/${slug}`);
  return data.article;
};

export const getComment = async (slug: string) => {
  const { data } = await API.get(`/articles/${slug}/comments`);
  return data.comments;
};

export const createComment = async (props: props) => {
  const { data } = await API.post(`/articles/${props.slug}/comments`, {
    comment: {
      body: props.commentValue,
    },
  });
  return data;
};
