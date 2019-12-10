// import instance from "./instance";
import axios from "axios";

export const authAPI = {
  async getAuthData(username, password) {
    // let data = {
    //   username,
    //   password
    // };
    // console.log(data);

    // axios
    //   .post("https://dashboard.uchet.kz/api/v1/auth/login/", {
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     password: "f1rstb1t",
    //     username: "Timur"
    //   })
    //   .then(res => console.log(res));

    // axios({
    //   method: "POST",
    //   url: "https://dashboard.uchet.kz/api/v1/auth/login/",
    //   data: { username, password },
    //   config: {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     }
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    fetch("https://dashboard.uchet.kz/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        password: "f1rstb1t",
        username: "Timur"
      })
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // let resp = await instance.post(
    //   "https://cors-anywhere.herokuapp.com/https://dashboard.uchet.kz/api/v1/auth/login/",
    //   {
    //     password: "f1rstb1t",
    //     username: "Timur"
    //   }
    // );
    // console.log(instance);
    // console.log(resp);
    // resp.catch(err => console.log(err.response));
    // let resp = await fetch(
    //   "https://cors-anywhere.herokuapp.com/https://dashboard.uchet.kz/api/v1/auth/login/",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       password: "f1rstb1t",
    //       username: "Timur"
    //     })
    //   }
    // );
    // console.log(resp);
  }
};
