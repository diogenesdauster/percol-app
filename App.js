import React from "react";
import SwitchNavigator from "./routes";
import { View } from "react-native";
import CommonStatusBar from "./components/CommonStatusBar";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CommonStatusBar backgroundColor={"#009CA7"} barStyle="light-content" />
        <SwitchNavigator />
      </View>
    );
  }
}
