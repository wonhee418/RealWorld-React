export interface Comment {
  id: number;
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
  const { id, body, author, createdAt } = props;

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <span className="comment-author">
          <img src={author.image} className="comment-author-img" />
        </span>
        &nbsp;
        <span className="comment-author">{author.username}</span>
        <span className="date-posted">{createdAt}</span>
      </div>
    </div>
  );
};

export default CommentItem;
