import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class DrawerButton extends Component {
  onOpenDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onOpenDrawer}>
          <FontAwesome
            name="bars"
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
    );
  }
}

export default DrawerButton;
