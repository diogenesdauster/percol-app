import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hideo } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputsgroup}>
          <Hideo
            style={styles.inputs}
            iconClass={FontAwesomeIcon}
            iconName={"user"}
            iconColor={"white"}
          />
          <Hideo
            style={styles.inputs}
            iconClass={FontAwesomeIcon}
            iconName={"key"}
            iconColor={"white"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009CA7",
    alignItems: "center",
    justifyContent: "center"
  },
  inputsgroup: {
    flex: 1,
    justifyContent: "space-between"
  },
  inputs: {
    flex: 0,
    marginLeft: 30,
    marginRight: 30
  }
});
