import axios from "axios";
import { appConstants } from './appConstant'

// server url
const baseURL = appConstants.baseUrl

const APIKit = axios.create({ baseURL, timeout: 60000000, });
APIKit.interceptors.request.use(async (config) => {

    const token = localStorage.getItem("token") || sessionStorage.getItem("token")

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
});

export default APIKit;