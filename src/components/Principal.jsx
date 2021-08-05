import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import ConfirmarCorrida from "./ConfirmarCorrida";
import HistoricoCorrida from "./HistoricoCorrida";
import { styles } from "../../style/style";

const Stack = createStackNavigator();

export default function Principal() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ConfirmarCorrida" component={ConfirmarCorrida} />
      <Stack.Screen name="HistoricoCorrida" component={HistoricoCorrida} />
    </Stack.Navigator>
  );
}
