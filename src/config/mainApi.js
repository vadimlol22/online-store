import axios from "axios";

import LocalStorageService from "../services/localStorageService";

const BASE_URL = "http://localhost:3001/";

const config = {
  baseURL: BASE_URL,
};

export const mainApi = axios.create(config);

mainApi.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getAccessToken();

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
