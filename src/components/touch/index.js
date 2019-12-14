import React, { Component } from "react";
import { Button, Text, View, Alert } from "react-native";
import Modal from "react-native-modal";
import CardContent from "../CardContent";

export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <Text>Hello</Text>
        <Button
          style={{ backgroundColor: "blue" }}
          title="Show modal"
          onPress={this.toggleModal}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <CardContent />
            <View>
              <Button title="Hide modal" onPress={this.toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
