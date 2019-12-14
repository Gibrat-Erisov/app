import instance from "./instance";

export const authAPI = {
  async getAuthData(username, password) {
    return instance
      .post("auth/login/", {
        username,
        password
      })
      .then(response => response);
  }
};
