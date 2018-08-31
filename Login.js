import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          style={{ flexGrow: 1 }}
          source={require("./assets/Fachada.jpg")}
        >
          <View style={styles.backgroundContainer} />

          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#009CA7",
    opacity: 0.8
  },
  formContainer: {
    flex: 1,
    justifyContent: "space-evenly"
  }
});
