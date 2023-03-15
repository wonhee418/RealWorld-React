import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../../atom/atom";

const Header = () => {
  const isLogged = useRecoilValue(isLoggedInAtom);

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              {isLogged && (
                <a className="nav-link" href="/create">
                  {" "}
                  <i className="ion-compose"></i>&nbsp;New Article{" "}
                </a>
              )}
            </li>
            <li className="nav-item">
              {isLogged && (
                <a className="nav-link" href="/profile/setting">
                  {" "}
                  <i className="ion-gear-a"></i>&nbsp;Settings{" "}
                </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
