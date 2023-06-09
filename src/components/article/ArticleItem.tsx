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
  const date = new Date(createdAt).toDateString();
  return (
    <div className="article-preview">
      <div className="article-meta">
        <img src={author.image} alt="authorImg" />
        <div className="info cursor-pointer">
          <span className="author text-[#5CB85C]">{author.username}</span>
          <span className="date">{date}</span>
        </div>

        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <span
        className="preview-link"
        onClick={() =>
          navigate(`/article/${slug}`, { state: { slug, author } })
        }
      >
        <h1 className="cursor-pointer">{title}</h1>
        <p className="cursor-pointer">{description}</p>
        <span className="cursor-pointer">Read more...</span>
        <ul className="tag-list">
          {tagList.map((item) => {
            return (
              <li className="tag-default tag-pill tag-outline ng-binding ng-scope cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
};

export default ArticleItem;
