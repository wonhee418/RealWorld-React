import { useMutation, useQueryClient } from "react-query";
import { createArticle } from "../../api/article";
import { useNavigate } from "react-router-dom";
import { queryKey } from "../../lib/react-query/constants";

interface data {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createArticleMutate } = useMutation(
    (data: data) => createArticle(data),
    {
      onSuccess: (received) => {
        queryClient.invalidateQueries([queryKey.article, "1"]);
        navigate("/");
      },
    }
  );

  return createArticleMutate;
};
