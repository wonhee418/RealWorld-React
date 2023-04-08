import { useMutation, useQueryClient } from "react-query";
import { createArticle } from "../../api/article";
import { useNavigate } from "react-router-dom";

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
        console.log(received);
        queryClient.invalidateQueries(["article", "1"]);
        navigate("/");
      },
    }
  );

  return createArticleMutate;
};
