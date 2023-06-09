import { Auth, User } from "../types/auth";
import { API } from "./api";

export const signInRequest = async (user: User) => {
  const { data } = await API.post("/users/login", user);
  return data;
};

export const signUpRequest = async (auth: Auth) => {
  const { data } = await API.post("/users", auth);
  return data;
};
