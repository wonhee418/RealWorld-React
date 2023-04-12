import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface gnbProps {
  onNavigate: (link: string) => void;
}

const LogoutGnb = (props: gnbProps) => {
  const { onNavigate } = props;
  return (
    <>
      <li className="nav-item" onClick={() => onNavigate("/login")}>
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            clsx("nav-link cursor-pointer", isActive && "active")
          }
        >
          Sign in
        </NavLink>
      </li>
      <li className="nav-item" onClick={() => onNavigate("/register")}>
        <NavLink
          to={"/resigter"}
          className={({ isActive }) =>
            clsx("nav-link cursor-pointer", isActive && "active")
          }
        >
          Sign up
        </NavLink>
      </li>
    </>
  );
};

export default LogoutGnb;
