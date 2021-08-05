import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "./src/components/Principal";
import { styles } from "./style/style";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Principal />
    </NavigationContainer>
  );
}
