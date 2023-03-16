import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signInRequest, signUpRequest } from "../../api/auth";
import { Auth, User } from "../../types/auth";
import { setStorageUser } from "../user/userStorge";

const useAuth = () => {
  const navigate = useNavigate();
  const { mutate: signInMutate } = useMutation(
    (data: User) => signInRequest(data),
    {
      onSuccess: (received) => {
        navigate("/");
        setStorageUser(received.user.token);
        console.log(received);
      },
    }
  );

  const { mutate: signUpMutate } = useMutation(
    (data: Auth) => signUpRequest(data),
    {
      onSuccess: (received) => {
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
