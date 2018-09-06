import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#27C3CE"
      }
    }
  }
});
const AuthStack = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: { header: null }
  }
});

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth"
  }
);