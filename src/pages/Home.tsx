import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom/atom";
import ArticleItem from "../components/article/ArticleItem";
import { useGetArticle } from "../hooks/article/useGetArticle";
import { Article } from "../types/article";

const Home = () => {
  const isLogged = useRecoilValue(isLoggedInAtom);
  const { article, isLoading, isError, error, refetch } = useGetArticle();

  if (isLoading) {
    return <p>로딩중 ..</p>;
  }

  if (isError) {
    return <p>에러.. ! {error?.message}</p>;
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
            {article?.map((article: Article, i) => {
              return <ArticleItem {...article} key={i} />;
            })}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
