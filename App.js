import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Hideo } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputs} />
        <TextInput style={styles.inputs} />
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
    justifyContent: "space-between"
  },
  inputs: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 3
  }
});
