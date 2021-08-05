import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "../../style/style";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Tela de login</Text>
      <Button
        title="Ir para corrida"
        onPress={() => navigation.navigate("ConfirmarCorrida")}
      />
    </View>
  );
}
