import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom/atom";
import CommentItem from "../components/article/CommentItem";
import { useCreateComment } from "../hooks/article/useCreateComment";
import { useGetComments } from "../hooks/article/useGetComments";
import { useGetDetailArticle } from "../hooks/article/useGetDetailArticle";
import { Comment } from "../types/article";

const Article = () => {
  const { state: slug } = useLocation();
  const { article, isLoading, isError, error, refetch } =
    useGetDetailArticle(slug);
  const myProfile = useRecoilValue(isLoggedInAtom);
  const { comments, commentsIsLoading } = useGetComments(slug);
  const [commentValue, setCommentValue] = useState("");
  const createCommentMutate = useCreateComment();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCommentMutate({ slug, commentValue });
  };

  const commentValueChangeHandle = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => [event.preventDefault(), setCommentValue(event.target.value)];

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          {isLoading && <p>피드 로딩중..</p>}
          <h1>{article?.title}</h1>

          <div className="article-meta">
            <span>
              <img src={article?.author.image} alt="profileImg" />
            </span>
            <div className="info">
              <span className="author">{article?.author.username}</span>
              <span className="date">{article?.createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author.username}
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post
              <span className="counter">({article?.favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            {isLoading && <p>피드 로딩중..</p>}

            <p>{article?.body}</p>
          </div>
        </div>
        <ul className="tag-list mb-4">
          {article?.tagList.map((tag) => {
            return (
              <li
                className="tag-default tag-pill tag-outline ng-binding ng-scope"
                key={tag}
              >
                {tag}
              </li>
            );
          })}
        </ul>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img src={article?.author.image} alt="profileImg" />
            </a>
            <div className="info text-[#5CB85C]">
              <span className="author">{article?.author.username}</span>
              <span className="date">{article?.createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post
              <span className="counter">({article?.favoritesCount})</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form" onSubmit={onSubmit}>
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                  value={commentValue}
                  onChange={commentValueChangeHandle}
                ></textarea>
              </div>
              <div className="card-footer">
                <img
                  src={myProfile.image}
                  alt="profileImg"
                  className="comment-author-img"
                />
                <button
                  className="btn btn-sm btn-primary bg-[#5cb85c]"
                  type="submit"
                >
                  Post Comment
                </button>
              </div>
            </form>
            <>
              {commentsIsLoading && <p>댓글 로딩중..</p>}
              {comments?.comments &&
                comments.comments.map((comment: Comment) => {
                  return <CommentItem {...comment} />;
                })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
