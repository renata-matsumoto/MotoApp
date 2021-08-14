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
import { DrawerContent } from "./DrawerContent";


const Drawer = createDrawerNavigator();

export default function Principal() {
  const { deslogar } = useContext(UserContext);

  return (
    <>
      <Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName="Apresentação">            
              <Drawer.Screen name="Apresentação" component={Apresentacao} />
                <Drawer.Screen name="Perfil" component={Perfil} />
                <Drawer.Screen name="Corridas" component={ConfirmarCorrida} />
                <Drawer.Screen name="Histórico" component={HistoricoCorrida} />
                <Drawer.Screen name="Sair" component={UserView} />
            </Drawer.Navigator>
    </>
)
}
