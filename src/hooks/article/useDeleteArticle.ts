import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { removeArticle } from "../../api/article";
import { queryKey } from "../../lib/react-query/constants";

const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteArticleMutate } = useMutation(
    (slug: string) => removeArticle(slug),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.article, "1"]);
        navigate(-1);
      },
    }
  );

  return deleteArticleMutate;
};

export default useDeleteArticle;
