import { authAPI } from "../API/authAPI";
import { AsyncStorage } from "react-native";

// Загрузка
const toggleIsFetching = isFetching => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching
});

// Авторизация
export const AuthError = text => ({ type: "AUTH_ERROR", text });
const isAuthorized = bool => ({ type: "IS_AUTHORIZED", bool });
const setAuthData = data => ({ type: "SET_AUTH_DATA", data });

export const getAuthData = (username, password) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    authAPI
      .getAuthData(username, password)
      .then(user => {
        dispatch(toggleIsFetching(false));
        dispatch(AuthError("Авторизован"));
        dispatch(isAuthorized(true));
        dispatch(setAuthData(user.data));
        AsyncStorage.setItem("Token", user.data.token);
      })
      .catch(err => {
        if (err.response.status === 400) {
          dispatch(toggleIsFetching(false));
          dispatch(isAuthorized(false));
          dispatch(AuthError("не верный логин или пароль"));
          AsyncStorage.setItem("Token", "");
        }
      });
  };
};
