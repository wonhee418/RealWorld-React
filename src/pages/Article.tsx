import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom/atom";
import { getStorageUser } from "../constants/user/userStorge";
import { useGetDetailArticle } from "../hooks/article/useGetDetailArticle";

const Article = () => {
  const { state } = useLocation();
  const { article, isLoading, isError, error, refetch } =
    useGetDetailArticle(state);
  const myProfile = useRecoilValue(isLoggedInAtom);
  console.log(myProfile);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>

          <div className="article-meta">
            <a href="">
              <img src={article?.author.image} />
            </a>
            <div className="info">
              <a href="" className="author">
                {article?.author.username}
              </a>
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
              <img src={article?.author.image} />
            </a>
            <div className="info text-[#5CB85C]">
              <a href="" className="author">
                {article?.author.username}
              </a>
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
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <img src={myProfile.image} className="comment-author-img" />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-edit"></i>
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
