interface gnbProps {
  onNavigate: (link: string) => void;
}

const LogoutGnb = (props: gnbProps) => {
  const { onNavigate } = props;
  return (
    <>
      <li className="nav-item" onClick={() => onNavigate("/login")}>
        <span className="nav-link cursor-pointer">Sign in</span>
      </li>
      <li className="nav-item" onClick={() => onNavigate("/register")}>
        <span className="nav-link cursor-pointer">Sign up</span>
      </li>
    </>
  );
};

export default LogoutGnb;
