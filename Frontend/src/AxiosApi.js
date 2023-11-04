<<<<<<< HEAD
import axios from "axios";


const  backendURL = process.env.REACT_APP_BACKEND_URL;
// const backendURL = "http://localhost:5000";
=======
const backendURL = process.env.REACT_APP_BACKEND_URL;

console.log(backendURL)
export default backendURL;
>>>>>>> 4a99af9794136ea40ece508f89025e0bf9b11223

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