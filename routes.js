import React from "react";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import DrawerButton from "./components/DrawerButton";
import { View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Pernambuco Construtora",
      headerLeft: <DrawerButton navigation={navigation} />,
      headerRight: (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
            <SimpleLineIcons
              name="logout"
              size={30}
              style={{
                color: "#FFF",
                padding: 10,
                marginLeft: 10,
                fontSize: 20
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#27C3CE"
      }
    })
  }
});

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: AppStack
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: { header: null }
  }
});

export default createSwitchNavigator(
  {
    App: DrawerStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth"
  }
);
