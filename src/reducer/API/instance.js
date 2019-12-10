import axios from "axios";

const instance = axios.create({
  // baseURL: "https://dashboard.uchet.kz/api/v1/",
  headers: {
    "Content-Type": "application/json"
    // "tokenOperator": sessionStorage.getItem('tokenOperator'),
    // "tokenAdmin" : sessionStorage.getItem('tokenAdmin')
  }
});

// instance.interceptors.request.use(function (config) {
//   const tokenOperator = sessionStorage.getItem('tokenOperator');
//   config.headers.tokenOperator =  tokenOperator ;
//   return config;
// });

export default instance;
