import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../atom/atom";
import useDeleteComments from "../../hooks/article/useDeleteComments";

export interface Comment {
  id: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

const CommentItem = (props: Comment) => {
  const { id, slug, body, author, createdAt } = props;
  const myProfile = useRecoilValue(isLoggedInAtom);
  const deleteCommentMutate = useDeleteComments(slug);
  const date = new Date(createdAt as string).toDateString();

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <span className="comment-author">
          <img
            src={author.image}
            className="comment-author-img"
            alt="authorImg"
          />
        </span>
        &nbsp;
        <span className="comment-author text-[#3d8b3d] cursor-pointer">
          {author.username}
        </span>
        <span className="date-posted">{date}</span>
        {author.username === myProfile.username && (
          <span
            className="mod-options"
            onClick={() => deleteCommentMutate({ slug, id })}
          >
            <i className="ion-trash-a"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
