import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import { LOGIN_SCREEN, TAB_SCREEN } from "./routes";

import LoginScreen from "./LoginScreen/index";
import TabScreen from "./TabScreen";

export default createSwitchNavigator(
  {
    [TAB_SCREEN]: TabScreen,
    [LOGIN_SCREEN]: LoginScreen
  },
  {
    initialRouteName: "LOGIN_SCREEN",
    headerMode: "none",
    mode: "modal"
  }
);
