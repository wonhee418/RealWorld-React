import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
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
  label: string;
}

const RouterInfo: RouterItem[] = [
  {
    path: "/",
    elemnet: <Home />,
    withAuthorization: false,
    label: "home",
  },
  {
    path: "/login",
    elemnet: <Login />,
    withAuthorization: false,
    label: "page B",
  },
  {
    path: "/register",
    elemnet: <Register />,
    withAuthorization: false,
    label: "page C",
  },
  {
    path: "/aticle",
    elemnet: <Article />,
    withAuthorization: true,
    label: "page A",
  },
  {
    path: "/profile",
    elemnet: <Profile />,
    withAuthorization: true,
    label: "page C",
  },
  {
    path: "/setting",
    elemnet: <Setting />,
    withAuthorization: false,
    label: "page C",
  },
];

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: (
            <Authorization currentPath={routerInfo.path}>
              {routerInfo.elemnet}
            </Authorization>
          ),
        }
      : {
          path: routerInfo.path,
          element: routerInfo.elemnet,
        };
  })
);

export default ReactRouterObject;
