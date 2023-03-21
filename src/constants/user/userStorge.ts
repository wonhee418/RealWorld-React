const USER_LOCALSTORAGE_KEY = "user";
const TOKEN_LOCALSTORAGE_KEY = "token";

export const getStorageUser = () => {
  return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
};

export const setStorageUser = (user: string) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, user);
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.parse(user).token);
};

export const clearStorageUser = () => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};

export const getStorageToken = () => {
  return localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
};
