import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";

interface childrenProps {
  children: React.ReactNode;
}

const Layout = (props: childrenProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
