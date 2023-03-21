import { useNavigate } from "react-router-dom";
import useAuth from "../constants/auth/useAuth";
import { useRegex } from "../constants/regex";

const Register = () => {
  const { signUp } = useAuth();
  const { usernameCheckHandle, emailCheckHandle, passwordCheckHandle } =
    useRegex();
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!usernameCheckHandle(formData.get("username"))) {
      return alert("이름은 8자 이상 16자 이하입니다.");
    }

    if (!emailCheckHandle(formData.get("email"))) {
      return alert("이메일 형식이 아닙니다.");
    }

    if (!passwordCheckHandle(formData.get("password"))) {
      return alert(
        "비밀번호는 숫자와 문자 포함 형태의 6~12자리 이내여야합니다."
      );
    }

    const User = {
      user: {
        username: formData.get("username")!.toString(),
        email: formData.get("email")!.toString(),
        password: formData.get("password")!.toString(),
      },
    };
    signUp(User);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center text-[40px] pb-4">Sign up</h1>
            <p className="text-xs-center pb-4">
              <span
                className=" cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Have an account?
              </span>
            </p>
            {/* <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}
            <form onSubmit={onSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
