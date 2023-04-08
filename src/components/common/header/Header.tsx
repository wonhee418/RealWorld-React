import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../../atom/atom";
import { Myprofile } from "../../../types/user";
import LoginGnb from "../gnb/LoginGnb";
import LogoutGnb from "../gnb/LogoutGnb";

const Header = () => {
  const isLogged = useRecoilValue<Myprofile>(isLoggedInAtom);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <span
            className="navbar-brand cursor-pointer"
            onClick={() => navigate("/")}
          >
            conduit
          </span>
          <ul className="nav navbar-nav pull-xs-right">
            <li
              className="nav-item cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="nav-link active">Home</span>
            </li>
            {isLogged && <LoginGnb onNavigate={navigate} />}
            {!isLogged && <LogoutGnb onNavigate={navigate} />}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
