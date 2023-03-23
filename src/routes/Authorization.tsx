import { useState } from "react";
import { isLoggedInAtom } from "../atom/atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

interface propsType {
  currentPath: string;
  children: React.ReactNode;
}

const Authorization = (props: propsType) => {
  const { currentPath, children } = props;
  // const [isLogged, routeToLoginPage] = useState();
  const isLogged = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();

  // 로그인되지 않은 경우에는 로그인 페이지로 리다이렉트
  if (!isLogged) {
    return <Login></Login>;
  }

  return <>{children}</>;
};

export default Authorization;
