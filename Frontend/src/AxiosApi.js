import axios from "axios";


const  backendURL = process.env.REACT_APP_BACKEND_URL;
// const backendURL = "http://localhost:5000";

export default  backendURL;

export const httpAPI = axios.create({
    baseURL: backendURL,
});

httpAPI.interceptors.request.use(
    (config) => {
        console.log("ye thik h")
        const authToken =  localStorage.getItem("authToken");
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