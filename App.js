import React from "react";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import { createStackNavigator } from "react-navigation";

const AppStack = createStackNavigator({ Home: { screen: HomeScreen } });
const AuthStack = createStackNavigator({ SignIn: { screen: Login } });

export default class App extends React.Component {
  render() {
    return <AuthStack />;
  }
}
