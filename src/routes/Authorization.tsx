import { isLoggedInAtom } from "../atom/atom";
import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";

interface propsType {
  currentPath: string;
  children: React.ReactNode;
}

const Authorization = (props: propsType) => {
  const { currentPath, children } = props;
  const isLogged = useRecoilValue(isLoggedInAtom);

  // 로그인되지 않은 경우에는 로그인 페이지로 리다이렉트
  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default Authorization;
