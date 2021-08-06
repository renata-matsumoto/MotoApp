import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { styles } from "../../style/style";

export default function ConfirmarCorrida({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}> Solicitações de corridas</Text>
      <Button
        title="Histórico de corridas"
        onPress={() => navigation.navigate("HistoricoCorrida")}
      />
    </View>
  );
}
