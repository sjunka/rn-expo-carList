import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/styles";

import Garage from "./src/screens/Garage";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />
      <Garage />
    </View>
  );
}
