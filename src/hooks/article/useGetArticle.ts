import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getArticle } from "../../api/article";
import { Article } from "../../types/article";

export const useGetArticle = () => {
  const {
    data: article,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Article[], AxiosError>("article", getArticle);

  return {
    article,
    isLoading,
    isError,
    error,
    refetch,
  };
};
