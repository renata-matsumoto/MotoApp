import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Apresenta({ navigation }) {
  return (
    <View>
      <Text>Moto App - versão motorista</Text>
      <Button
        title="Próxima tela"
        onPress={() => navigation.navigate("ConfirmarCorrida")}
      />
    </View>
  );
}
