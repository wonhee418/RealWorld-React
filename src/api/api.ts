import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getStorageToken } from "../constants/user/userStorge";

const BASE_URL = "https://api.realworld.io/api";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

console.log("Token " + getStorageToken());

export const API = axios.create(axiosConfig);
API.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Token " + getStorageToken();
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
