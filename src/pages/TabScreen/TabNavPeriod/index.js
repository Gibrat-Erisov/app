import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Icon } from "native-base";

import Coins from "../TabNavDate/Coins";
import Piechart from "../TabNavDate/Piechart";
import Receipt from "../TabNavDate/Receipt";
import Settings from "../TabNavDate/Settings";

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
      activeTintColor: "red",
      inactiveTintColor: "grey",
      activeBackgroundColor: "#30d0fe"
    }
  }
);

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });
