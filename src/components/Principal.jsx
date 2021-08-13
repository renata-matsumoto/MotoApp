import React, { useContext } from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "../../style/style";
import { UserContext } from "./UserContext";
import Apresentacao from "./Apresentacao";
import Perfil from "./Perfil";
import ConfirmarCorrida from "./ConfirmarCorrida";
import UserView from "./UserView";
import HistoricoCorrida from "./HistoricoCorrida";

const Drawer = createDrawerNavigator();

export default function Principal({ navigation }) {
  const { deslogar } = useContext(UserContext);

  return (
    <Drawer.Navigator initialRouteName="Corridas">
      <Drawer.Screen
        name="Corridas"
        component={ConfirmarCorrida}
      />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Histórico" component={HistoricoCorrida} />
      <Drawer.Screen name="Logout" component={UserView} />
    </Drawer.Navigator>
  );
}
