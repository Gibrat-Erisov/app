import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/index";
import { TAB_SCREEN } from "../routes";

export default class LoginFormContainer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <LoginForm toMoveMainScreen={() => navigation.navigate(TAB_SCREEN)} />
    );
  }
}
