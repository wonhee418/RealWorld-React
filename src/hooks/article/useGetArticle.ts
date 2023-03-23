import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getArticle } from "../../api/article";
import { Articles } from "../../types/article";

export const useGetArticle = (limit: number, current: number) => {
  const {
    data: article,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Articles, AxiosError>(["article", current], () =>
    getArticle(limit, current)
  );

  return {
    article,
    isLoading,
    isError,
    error,
    refetch,
  };
};
