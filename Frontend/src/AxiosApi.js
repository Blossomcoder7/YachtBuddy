import axios from "axios";
import { apiBaseUrl } from './config';



// console.log(backendURL)
// const backendURL = "http://localhost:5005";
const backendURL = apiBaseUrl;
export default backendURL;


export const httpAPI = axios.create({
    baseURL: apiBaseUrl,
});

httpAPI.interceptors.request.use(
    (config) => {
        console.log("ye thik h")
        const authToken = localStorage.getItem("authToken");
        console.log(authToken);
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);