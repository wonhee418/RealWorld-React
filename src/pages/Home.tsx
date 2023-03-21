import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom/atom";
import ArticleItem from "../components/article/ArticleItem";
import { useGetArticle } from "../hooks/article/useGetArticle";
import { useGetTag } from "../hooks/tag/useGetTag";
import { Article } from "../types/article";
import { Tag } from "../types/tag";

const Home = () => {
  const isLogged = useRecoilValue(isLoggedInAtom);
  const article = useGetArticle();
  const tag = useGetTag();
  console.log(article);

  console.log(tag.tag);

  if (article.isLoading) {
    return <p>로딩중 ..</p>;
  }

  //

  if (article.isError) {
    return <p>에러.. ! {article.error?.message}</p>;
  }

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isLogged && <li className="nav-item">Your Feed</li>}

                <li className="nav-item">Global Feed</li>
              </ul>
            </div>
            {article.article?.map((article: Article, i) => {
              return <ArticleItem {...article} key={i} />;
            })}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                {/* HACK: any type 변경 필요  */}
                {tag.tag?.map((tagValue: any) => {
                  return (
                    <span className="tag-pill tag-default cursor-pointer">
                      {tagValue}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
