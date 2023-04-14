import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getComment } from "../../api/article";
import { Comments } from "../../types/article";
import { queryKey } from "../../lib/react-query/constants";

export const useGetComments = (slug: string) => {
  const {
    data: comments,
    isLoading: commentsIsLoading,
    isError: commentsIsError,
    error,
    refetch,
  } = useQuery<Comments, AxiosError>([queryKey.comment, slug], () =>
    getComment(slug)
  );

  return {
    comments,
    commentsIsLoading,
    commentsIsError,
    error,
    refetch,
  };
};
