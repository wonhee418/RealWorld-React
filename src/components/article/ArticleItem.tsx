import { useNavigate } from "react-router-dom";
import { Article } from "../../types/article";

const ArticleItem = (props: Article) => {
  const {
    author,
    body,
    createdAt,
    description,
    updatedAt,
    favorited,
    favoritesCount,
    slug,
    tagList,
    title,
  } = props;
  const navigate = useNavigate();
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={author.image} />
        </a>
        <div className="info">
          <span className="author">{author.username}</span>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <span
        className="preview-link"
        onClick={() => navigate("/article", { state: slug })}
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </span>
    </div>
  );
};

export default ArticleItem;
