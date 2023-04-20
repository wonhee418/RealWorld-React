import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom/atom";
import ArticleItem from "../components/article/ArticleItem";
import { useGetArticle } from "../hooks/article/useGetArticle";
import { useGetTag } from "../hooks/tag/useGetTag";
import { Article } from "../types/article";
import Spinner from "../components/ui/spinner";
import { useQueryClient } from "react-query";
import { queryKey } from "../lib/react-query/constants";
import { getArticle } from "../api/article";

const Home = () => {
  const isLogged = useRecoilValue(isLoggedInAtom);
  const tag = useGetTag();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 20;
  const queryClient = useQueryClient();
  const { article, isLoading, isError, error } = useGetArticle(
    limit,
    currentPage
  );

  const maxArticlePage = Math.ceil((article?.articlesCount as number) / limit);

  const pageNation = () => {
    const articlePage = [];
    for (let page = 1; page <= maxArticlePage; page++) {
      articlePage.push(
        <li
          className={clsx(
            "page-item ng-scope cursor-pointer",
            page === currentPage ? "active" : ""
          )}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          <span className="page-link ng-binding">{page}</span>
        </li>
      );
    }
    return articlePage;
  };

  useEffect(() => {
    const nextPage = currentPage + 1;
    if (currentPage < limit) {
      queryClient.prefetchQuery([queryKey.article, nextPage], () =>
        getArticle(limit, nextPage)
      );
    }
    window.scrollTo(0, 0);
  }, [currentPage, queryClient]);

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
            <ul className="nav nav-pills outline-active">
              {isLogged && (
                <li className="nav-item">
                  <span className="nav-link">Your Feed</span>
                </li>
              )}

              <li className="nav-item">
                <span className="nav-link active">Global Feed</span>
              </li>
            </ul>
            {isLoading && <Spinner />}
            {article?.articles?.map((article: Article, i) => {
              return <ArticleItem {...article} key={i} />;
            })}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                {/* HACK: any type 변경 필요  */}
                {tag.isLoading && <Spinner />}
                {tag.tag?.map((tagValue: any) => {
                  return (
                    <span
                      className="tag-pill tag-default cursor-pointer"
                      key={tagValue}
                    >
                      {tagValue}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ng-isolate-scope">
            <nav>
              <ul className="pagination">{pageNation()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
