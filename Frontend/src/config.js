const isDevelopment = process.env.NODE_ENV === 'development';


module.exports = {
  apiBaseUrl: isDevelopment ? process.env.REACT_APP_LOCAL_BACKEND_URL : process.env.REACT_APP_SERVER_BACKEND_URL,
};
// const backendURL = process.env.REACT_APP_BACKEND_URL;