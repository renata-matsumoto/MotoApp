import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginInterno from "./src/components/LoginInterno";
import Perfil from "./src/components/Perfil";
import HistoricoGanhos from "./src/components/HistoricoGanhos";
import ConfirmarCorrida from "./src/components/ConfirmarCorrida";
import Capa from "./src/components/Capa";
import Apresentacao from "./src/components/Apresentacao";
import HistoricoHoje from "./src/components/HistoricoHoje";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName="Apresentação">
        <Drawer.Screen name="Apresentação" component={Apresentacao} />
        <Drawer.Screen name="Capa" component={Capa} />
        <Drawer.Screen name="Login" component={LoginInterno} />
        <Drawer.Screen name="Confirmar" component={ConfirmarCorrida} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Histórico Mensal" component={HistoricoGanhos} />
        <Drawer.Screen name="Úlimas Corridas" component={HistoricoHoje} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
