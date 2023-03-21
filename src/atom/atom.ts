import { atom } from "recoil";
import { getStorageUser } from "../constants/user/userStorge";

export const isLoggedInAtom = atom({
  key: "isLoggedInAtom",
  default: getStorageUser(),
});
