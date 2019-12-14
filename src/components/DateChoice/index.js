import React from "react";
import { Form, Picker, DatePicker, Container, Content } from "native-base";
import { View, StyleSheet } from "react-native";
export default class StackedLabelExample extends React.Component {
  constructor(props) {
    super(props);

    this.setDate = this.setDate.bind(this);
    this.state = {
      selected2: undefined,
      chosenDate: new Date()
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const { boxContainer, content } = styles;
    return (
      <Form>
        <View style={content}>
          <View style={[boxContainer, { width: "35%" }]}>
            <Picker
              selectedValue={this.state.selected2}
              style={{ height: "100%", width: "100%" }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selected2: itemValue })
              }
            >
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
          <View style={[boxContainer]}>
            <DatePicker
              defaultDate={new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "black", fontSize: 14 }}
              placeHolderTextStyle={{ color: "#979797", fontSize: 14 }}
              onDateChange={this.setDate}
              disabled={false}
            />
            <View style={{ borderLeftColor: "#979797", borderLeftWidth: 1 }}>
              <DatePicker
                defaultDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "black", fontSize: 14 }}
                placeHolderTextStyle={{ color: "#979797", fontSize: 14 }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
          </View>
        </View>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 20,
    height: 40,
    backgroundColor: "white",
    borderColor: "#979797",
    borderWidth: 2,
    flexDirection: "row"
  },

  content: {
    justifyContent: "space-around",
    flexDirection: "row"
  }
});
