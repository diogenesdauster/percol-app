import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
        </View>

        <TextInput
          returnKeyType="next"
          autoCorrect={false}
          style={styles.input}
          placeholder="digite seu cpf"
          onSubmitEditing={() => this.inputPassword.focus()}
        />
        <TextInput
          returnKeyType="go"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}
          placeholder="digite sua senha"
          ref={input => (this.inputPassword = input)}
        />
        <TouchableOpacity style={styles.button} onPress={this.props.onSubmit}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEsqueciSenha}>
          <Text style={styles.textEsqueciSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40
  },
  input: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 60,
    textAlign: "center"
  },
  button: {
    height: 50,
    backgroundColor: "#27C3CE",
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10
  },
  textButton: {
    fontSize: 20,
    color: "#FFF",
    paddingVertical: 10,
    textAlign: "center"
  },
  buttonEsqueciSenha: {},
  textEsqueciSenha: {
    color: "#FFF",
    textAlign: "center"
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 100
  }
});
