import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import firebase from "../../firebase";
import { UserContext } from "./UserContext";
import { styles } from "../../style/style";

export default function UserView() {
  const { deslogar } = useContext(UserContext);

  const logout = async () => {
    const auth = firebase.auth;
    await auth.signOut();
    deslogar();
  };

  return (
    <View style={{ alignItems: "center", margin: 50 }}>
      <TouchableOpacity style={styles.loginTouch} onPress={logout}>
        <View>
          <Text style={styles.loginText1}>Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
