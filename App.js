import React, {useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {UserContext} from './src/components/UserContext';
import Principal1 from "./src/components/Principal1";
import LoginInterno from './src/components/LoginInterno';



export default function App() {

  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const logar = async (user) => {
    setLogado(true);
    setUsuario(user);
  }

  const deslogar = async () => {
    setLogado(false);
    setUsuario(null);
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <UserContext.Provider value={{ usuario, logar, deslogar }}>
      {logado ? <Principal1 /> : <LoginInterno />}
      </UserContext.Provider> */}
      <Principal1/>
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
