import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../../atom/atom";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
interface gnbProps {
  onNavigate: (link: string) => void;
}

interface user {
  bio: null | any;
  email: string;
  image: string;
  token: string;
  username: string;
}

const LoginGnb = (props: gnbProps) => {
  const { onNavigate } = props;
  const user = useRecoilValue<user>(isLoggedInAtom);

  return (
    <>
      <li
        className="nav-item cursor-pointer"
        onClick={() => onNavigate("/editor")}
      >
        <NavLink
          to={"/editor"}
          className={({ isActive }) => clsx("nav-link", isActive && "active")}
        >
          <i className="ion-compose"></i> New Article
        </NavLink>
      </li>
      <li
        className="nav-item cursor-pointer"
        onClick={() => onNavigate("/setting")}
      >
        <NavLink
          to={"/setting"}
          className={({ isActive }) => clsx("nav-link", isActive && "active")}
        >
          <i className="ion-gear-a"></i>&nbsp;Settings
        </NavLink>
      </li>
      <li
        className="nav-item cursor-pointer"
        onClick={() => onNavigate(`/profile`)}
      >
        <NavLink
          to={"/profile"}
          className={({ isActive }) => clsx("nav-link", isActive && "active")}
        >
          <img src={user.image} className="user-pic" alt="propfileImg" />
          {user.username}
        </NavLink>
      </li>
    </>
  );
};

export default LoginGnb;
