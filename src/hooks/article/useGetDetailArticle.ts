import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getDetailArticle } from "../../api/article";
import { Article } from "../../types/article";
import { queryKey } from "../../lib/react-query/constants";

export const useGetDetailArticle = (slug: string) => {
  const {
    data: article,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Article, AxiosError>([queryKey.article, slug], () =>
    getDetailArticle(slug)
  );

  return {
    article,
    isLoading,
    isError,
    error,
    refetch,
  };
};
