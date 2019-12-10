import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen/index";
import { LOGIN_SCREEN } from "./routes";
export default createSwitchNavigator(
  {
    [LOGIN_SCREEN]: LoginScreen
  },
  {
    initialRouteName: "LOGIN_SCREEN",
    headerMode: "none",
    mode: "modal"
  }
);
