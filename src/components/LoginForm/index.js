import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Button, TouchableHighlight } from "react-native";
import { getAuthData } from "../../reducer/action/auth-action";

class LoginFormContainer extends Component {
  state = {
    errorName: "",
    errorPassword: "",
    username: "Timur",
    password: "f1rstb1t"
  };

  validate = () => {
    let valid = true;

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

  handleSubmit = () => {
    // if (this.validate()) {
    this.props.getAuthData(this.state.username, this.state.password);
    // }
  };

  InputChange = (text, type) => {
    switch (type) {
      case "name":
        this.setState({ username: text });
        break;
      case "age":
        this.setState({ password: text });
        break;

      default:
        break;
    }
  };

  componentDidMount() {
    // this.props.getAuthData(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Button title="Create" onPress={this.handleSubmit} />
      </View>
      //   <CreateForm
      //     InputChange={this.InputChange}
      //     errors={this.state}
      //     handleSubmit={this.handleSubmit}
      //   />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  getAuthData
})(LoginFormContainer);
