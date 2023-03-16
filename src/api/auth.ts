import { Auth, User } from "../types/auth";
import { API } from "./api";

// export const signInRequest = async ({ username, email, password }: Auth) => {
//   return await API.post("/users/login", {
//     username,
//     email,
//     password,
//   });
// };

export const signInRequest = async (user: User) => {
  try {
    const { data } = await API.post("/users/login", user);
    return data;
  } catch (error) {
    return error;
  }
};

export const signUpRequest = async (auth: Auth) => {
  try {
    const { data } = await API.post("/users", auth);
    return data;
  } catch (error) {
    return error;
  }
};
