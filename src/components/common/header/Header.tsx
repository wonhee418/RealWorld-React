import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../../atom/atom";
import { Myprofile } from "../../../types/user";
import LoginGnb from "../gnb/LoginGnb";
import LogoutGnb from "../gnb/LogoutGnb";
import clsx from "clsx";

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
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  clsx("nav-link", isActive && "active")
                }
              >
                Home
              </NavLink>
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
