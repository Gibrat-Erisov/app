import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Icon } from "native-base";

import Coins from "./Coins";
import Piechart from "./Piechart";
import Receipt from "./Receipt";
import Settings from "./Settings";

const SettingsTabs = createBottomTabNavigator(
  {
    Coins: {
      screen: Coins,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="MaterialCommunityIcons"
            name="coin"
            style={{ color: tintColor }}
            size={24}
          ></Icon>
        )
      }
    },
    Piechart: {
      screen: Piechart,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pie" style={{ color: tintColor }} size={24} />
        )
      }
    },
    Receipt: {
      screen: Receipt,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-paper" style={{ color: tintColor }} size={24} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" style={{ color: tintColor }} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Coins",
    order: ["Coins", "Piechart", "Receipt", "Settings"],

    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "gold",
      inactiveTintColor: "grey"
    }
  }
);

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });
