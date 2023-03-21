import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getTag } from "../../api/tag";
import { Tag } from "../../types/tag";

export const useGetTag = () => {
  const {
    data: tag,
    isLoading,
    isError,
    error,
  } = useQuery<Tag[], AxiosError>("tag", getTag);

  return {
    tag,
    isLoading,
    isError,
    error,
  };
};
