import React from "react";
import { ScrollView } from "react-native";
import { Header } from "native-base";
import DataChoice from "../../../components/DateChoice";
import CardContent from "../../../components/CardContent";

export default class Coins extends React.Component {
  render() {
    return (
      <>
        <ScrollView>
          <DataChoice />
          <CardContent />
          <CardContent />
        </ScrollView>
      </>
    );
  }
}
