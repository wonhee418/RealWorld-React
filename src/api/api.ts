import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getStorageUser } from "../constants/user/userStorge";

const BASE_URL = "https://api.realworld.io/api";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const API = axios.create(axiosConfig);
API.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getStorageUser();
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
