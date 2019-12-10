import React from "react";
import { Provider } from "react-redux";
import store from "./src/reducer/Store/store";
import { View, Text } from "react-native";
import SwitchNavigation from "./src/pages/switch";

export default function App() {
  return (
    <Provider store={store}>
      <SwitchNavigation />
    </Provider>
  );
}
