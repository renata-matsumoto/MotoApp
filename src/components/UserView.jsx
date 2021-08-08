import React, { useContext } from "react";
import { Button, View } from "react-native";
import firebase from "../../firebase";
import { UserContext } from "./UserContext";

export default function UserView() {
  const { deslogar } = useContext(UserContext);

  const logout = async () => {
    const auth = firebase.auth;
    await auth.signOut();
    deslogar();
  };

  return (
    <View>
      <Button color="#FFC107" title="Logout" onPress={logout} />
    </View>
  );
}
