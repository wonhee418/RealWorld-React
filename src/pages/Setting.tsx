import { useQuery } from "react-query";
import { getUser } from "../api/user";
import { Myprofile } from "../types/user";
import { clearStorageUser } from "../constants/user/userStorge";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "../atom/atom";

interface user {
  bio: null | any;
  email: string;
  image: string;
  token: string;
  username: string;
}

const Setting = () => {
  const userProfile = useRecoilValue<user>(isLoggedInAtom);
  const navigate = useNavigate();
  const setLogged = useSetRecoilState(isLoggedInAtom);
  // const {
  //   data: user,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch,
  // } = useQuery<Myprofile>("user", () =>
  //   getUser(userProfile.username as string)
  // );
  const { bio, image, username, email } = userProfile;

  const logoutHandler = () => {
    navigate("/");
    clearStorageUser();
    setLogged(null);
  };

  // if (isLoading) {
  //   return isLoading && <p>로딩중..</p>;
  // }

  // if (isError) {
  //   return <p>에러.. !</p>;
  // }
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    value={image}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    value={username}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                    value={bio}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    value={email}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
