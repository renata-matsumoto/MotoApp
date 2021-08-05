import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { styles } from "../../style/style";

export default function HistoricoCorrida({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Histórico de corridas</Text>
      <Button
        title="Voltar para login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
