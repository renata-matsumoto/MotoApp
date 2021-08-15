import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "./src/components/Perfil";
import ConfirmarCorrida from "./src/components/ConfirmarCorrida";
import Apresentacao from "./src/components/Apresentacao";
import { UserContext } from "./src/components/UserContext";
import LoginInterno from "./src/components/LoginInterno";
import Principal from "./src/components/Principal";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [zerado, setZerado] = useState(false);
  

  const logar = async (user) => {
    setLogado(true);
    setUsuario(user);
  };

  const deslogar = async () => {
    setLogado(false);
    setUsuario(null);
  };
  
  

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <UserContext.Provider value={{ usuario, setUsuario, logar, deslogar, logado, setLogado, zerado, setZerado}}>
        {logado && usuario ? <Principal /> : <LoginInterno />}
      </UserContext.Provider>
    </NavigationContainer>
  );
}
