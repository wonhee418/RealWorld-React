import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { signInRequest, signUpRequest } from "../../api/auth";
import { Auth, User } from "../../types/auth";
import { setStorageUser } from "../user/userStorge";
import { isLoggedInAtom } from "../../atom/atom";

const useAuth = () => {
  const navigate = useNavigate();
  const setIsLogged = useSetRecoilState(isLoggedInAtom);
  const { mutate: signInMutate } = useMutation(
    (data: User) => signInRequest(data),
    {
      onSuccess: (received) => {
        navigate("/");
        setStorageUser(JSON.stringify(received.user));
        setIsLogged(received.user);
      },
    }
  );

  const { mutate: signUpMutate } = useMutation<AxiosError, Error, Auth>(
    (data: Auth) => signUpRequest(data),
    {
      onSuccess: (received) => {
        navigate("/login");
        console.log(received);
      },
    }
  );

  const signIn = (user: User) => {
    signInMutate(user);
  };

  const signUp = (auth: Auth) => {
    signUpMutate(auth);
  };
  return { signUp, signIn };
};

export default useAuth;
