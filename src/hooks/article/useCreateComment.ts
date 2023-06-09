import { useMutation, useQueryClient } from "react-query";
import { createComment } from "../../api/article";
import { queryKey } from "../../lib/react-query/constants";

interface props {
  slug: string;
  commentValue: string;
}

export const useCreateComment = (slug: string) => {
  const queryClient = useQueryClient();

  const { mutate: createCommentMutate } = useMutation(
    (data: props) => createComment(data),
    {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries([queryKey.comment, slug]);
      },
    }
  );

  return createCommentMutate;
};
