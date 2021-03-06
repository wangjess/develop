import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginCreateAccountScreen from "../screens/LoginCreateAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import GalleryNameScreen from "../screens/GalleryNameScreen";
import ShareGalleryScreen from "../screens/ShareGalleryScreen";
import SplashScreen from "../screens/SplashScreen";
import RandomTestScreen from "../screens/RandomTestScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const LoginCreateAccountStack = createStackNavigator({
  LoginCreateAccount: LoginCreateAccountScreen,
  Login: LoginScreen,
  ForgotPassword: ForgotPasswordScreen,
  CreateAccount: CreateAccountScreen,
  GalleryName: GalleryNameScreen,
  ShareGallery: ShareGalleryScreen
});
LoginCreateAccountStack.path = "";

const RandomStack = createStackNavigator({
  RandomTest: RandomTestScreen,
});

RandomStack.path = "";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      SplashScreen: SplashScreen,
      RandomTest: RandomStack,
      LoginCreateAccount: LoginCreateAccountStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "SplashScreen"
    }
  )
);
