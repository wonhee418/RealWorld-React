import Footer from "./Footer";
import Header from "./header/Header";

interface childrenProps {
  children: React.ReactNode;
}

const Layout = (props: childrenProps) => {
  return (
    <div className="">
      <Header />
      <div className="">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
