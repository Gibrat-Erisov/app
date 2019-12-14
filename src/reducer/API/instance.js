import axios from "axios";

const instance = axios.create({
  baseURL: "https://dashboard.uchet.kz/api/v1/"
});

// instance.interceptors.request.use(function (config) {
//   const tokenOperator = sessionStorage.getItem('tokenOperator');
//   config.headers.tokenOperator =  tokenOperator ;
//   return config;
// });

export default instance;
