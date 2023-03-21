import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../../atom/atom";
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
        className="nav-item nav-link cursor-pointer"
        onClick={() => onNavigate("/editor")}
      >
        <i className="ion-compose"></i>&nbsp;New Article
      </li>
      <li
        className="nav-item nav-link cursor-pointer"
        onClick={() => onNavigate("/editor")}
      >
        <i className="ion-gear-a"></i>&nbsp;Settings
      </li>
      <li
        className="nav-item nav-link cursor-pointer"
        onClick={() => onNavigate(`/profile`)}
      >
        <img src={user.image} className="user-pic" alt="propfileImg" />
        {user.username}
      </li>
    </>
  );
};

export default LoginGnb;
