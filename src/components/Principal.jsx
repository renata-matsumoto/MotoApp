import React, { useContext } from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "../../style/style";
import { UserContext } from "./UserContext";

import Capa from "./Capa";
import Apresentacao from "./Apresentacao";
import HistoricoHoje from "./HistoricoHoje";
import Perfil from "./Perfil";
import HistoricoGanhos from "./HistoricoGanhos";
import ConfirmarCorrida from "./ConfirmarCorrida";
import UserView from "./UserView";

const Drawer = createDrawerNavigator();

export default function Principal({ navigation }) {
  const { deslogar } = useContext(UserContext);

  return (
    <Drawer.Navigator initialRouteName="Apresentação">
      <Drawer.Screen name="Apresentação" component={Apresentacao} />
      <Drawer.Screen name="Capa" component={Capa} />
      <Drawer.Screen name="Confirmar" component={ConfirmarCorrida} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Histórico Mensal" component={HistoricoGanhos} />
      <Drawer.Screen name="Úlimas Corridas" component={HistoricoHoje} />
      <Drawer.Screen name="Logout" component={UserView} />
    </Drawer.Navigator>
  );
}
