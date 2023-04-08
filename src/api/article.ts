import { API } from "./api";
interface props {
  slug: string;
  commentValue: string;
}

interface articleProps {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export const getArticle = async (limit: number, current: number) => {
  const { data } = await API.get(`/articles?limit=${limit}&offset=${current}`);
  return data;
};

export const getDetailArticle = async (slug: string) => {
  const { data } = await API.get(`/articles/${slug}`);
  return data.article;
};

export const createArticle = async (article: articleProps) => {
  const { data } = await API.post(`/articles`, {
    article: {
      title: article.title,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    },
  });
  return data;
};

export const removeArticle = async (slug: string) => {
  const { data } = await API.delete(`/articles/${slug}`);
  return data;
};

export const getComment = async (slug: string) => {
  const { data } = await API.get(`/articles/${slug}/comments`);
  return data;
};

export const createComment = async (props: props) => {
  const { data } = await API.post(`/articles/${props.slug}/comments`, {
    comment: {
      body: props.commentValue,
    },
  });
  return data;
};
