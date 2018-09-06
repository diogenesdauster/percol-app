import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class DrawerButton extends Component {
  render() {
    const { onOpenDrawer } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onOpenDrawer}>
          <FontAwesome
            key="bars"
            style={{
              color: "white",
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
