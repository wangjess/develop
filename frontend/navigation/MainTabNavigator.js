import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AddScreen from "../screens/AddScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { UIConstants } from "../common/constants";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const AddStack = createStackNavigator(
  {
    Add: AddScreen
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: "Upload New",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
    />
  )
};

AddStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    SearchStack,
    AddStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: UIConstants.appRedColor, // active icon color
      inactiveTintColor: UIConstants.appGreenColor, // inactive icon color
      style: {
        backgroundColor: UIConstants.appMenuYellowColor // TabBar background
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
