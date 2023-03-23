import { useMutation, useQueryClient } from "react-query";
import { createComment } from "../../api/article";

interface props {
  slug: string;
  commentValue: string;
}

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate: createCommentMutate } = useMutation(
    (data: props) => createComment(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("comment");
      },
    }
  );

  return createCommentMutate;
};
