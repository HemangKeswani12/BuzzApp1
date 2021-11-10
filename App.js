import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FacebookTabScreen from "./screens/fb";
import InstaTabScreen from "./screens/ig";

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: FacebookTabScreen },
  Instagram: { screen: InstaTabScreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});