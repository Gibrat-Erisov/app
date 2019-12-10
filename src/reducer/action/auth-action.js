import { authAPI } from "../API/authAPI";

// Загрузка
const toggleIsFetching = isFetching => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching
});

// Авторизация
const setAuthData = data => ({ type: "SET_AUTH_DATA", data });
export const getAuthData = (username, password) => {
  return dispatch => {
    // dispatch(toggleIsFetching(true));

    authAPI.getAuthData(username, password).then(user => {
      console.log(user);
    });
  };
};
