import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { styles } from "../../style/style";

export default function Login() {
  return (
    <View style={styles.containerLogin}>
    <Image style={styles.loginImg} source={require('../../images/logoMoto2.jpeg')}/>
    </View>
  );
}
