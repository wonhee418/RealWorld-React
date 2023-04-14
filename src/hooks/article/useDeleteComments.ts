import { useMutation, useQueryClient } from "react-query";
import { removeComment } from "../../api/article";
import { queryKey } from "../../lib/react-query/constants";

interface commentProps {
  slug: string;
  id: number;
}

const useDeleteComments = (slug: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCommentMutate } = useMutation(
    (comment: commentProps) => removeComment(comment),
    {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries([queryKey.comment, slug]);
      },
    }
  );

  return deleteCommentMutate;
};

export default useDeleteComments;
