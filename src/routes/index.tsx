import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Article from "../pages/Article";
import EditArticle from "../pages/EditArticle";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Setting from "../pages/Setting";
import Authorization from "./Authorization";

interface RouterItem {
  path: string;
  elemnet: React.ReactNode;
  withAuthorization: boolean;
  children?: [
    {
      path: string;
      element: React.ReactNode;
    }
  ];
}

const RouterInfo: RouterItem[] = [
  {
    path: "/",
    elemnet: <Home />,
    withAuthorization: false,
  },
  {
    path: "/login",
    elemnet: <Login />,
    withAuthorization: false,
  },
  {
    path: "/register",
    elemnet: <Register />,
    withAuthorization: false,
  },
  {
    path: "/article",
    elemnet: <Article />,
    withAuthorization: true,
  },
  // TODO: 페이지 동적경로 설정하기
  {
    path: "/profile",
    elemnet: <Profile />,
    withAuthorization: true,
    children: [
      {
        path: ":username",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/setting",
    elemnet: <Setting />,
    withAuthorization: false,
  },
  {
    path: "/editor",
    elemnet: <EditArticle />,
    withAuthorization: false,
  },
];

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: (
            <Layout>
              <Authorization currentPath={routerInfo.path}>
                {routerInfo.elemnet}
              </Authorization>
            </Layout>
          ),
        }
      : {
          path: routerInfo.path,
          element: <Layout>{routerInfo.elemnet}</Layout>,
        };
  })
);

export default ReactRouterObject;
