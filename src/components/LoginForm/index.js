import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { getAuthData, AuthError } from "../../reducer/action/auth-action";

class LoginFormContainer extends Component {
  state = {
    errorName: "",
    errorPassword: "",
    username: "",
    password: ""
  };

  validate = () => {
    let valid = true;
    this.props.AuthError("");
    if (!this.state.username) {
      this.setState({ errorName: "Заполните Name" });
      valid = false;
    } else this.setState({ errorName: "" });

    if (!this.state.password) {
      this.setState({ errorPassword: "Заполните password" });
      valid = false;
    } else this.setState({ errorPassword: "" });

    return valid;
  };

  handleSubmit = async () => {
    if (this.validate()) {
      await this.props.getAuthData(this.state.username, this.state.password);
    }
  };

  InputChange = (text, type) => {
    switch (type) {
      case "Username":
        this.setState({ username: text });
        break;
      case "Password":
        this.setState({ password: text });
        break;

      default:
        break;
    }
  };

  componentDidMount() {}

  render() {
    return (
      <LoginForm
        InputChange={this.InputChange}
        data={this.state}
        handleSubmit={this.handleSubmit}
        authError={this.props.authError}
      />
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  isAuthorized: state.auth.isAuthorized
});

export default connect(mapStateToProps, {
  getAuthData,
  AuthError
})(LoginFormContainer);
