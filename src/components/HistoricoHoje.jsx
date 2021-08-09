import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

export default function listHistorico({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(
    () =>
      navigation.addListener("focus", () => {
        pegaDados();
      }),
    []
  );
  console.log(state);

  const pegaDados = async () => {
    const historico = firebase.db.collection("motorista");
    const resposta = await historico.get();
    const dados = resposta.docs;
    const listHistorico = [];
    dados.forEach((doc) => {
      listHistorico.push({
        ...doc.data(),
        key: doc.id,
      });
    });
    setState(listHistorico);
    setLoading(false);
  };
  console.log(state);
  if (loading) {
    return <ActivityIndicator animating={true} size="large" color="red" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Histórico de viagens </Text>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View>
            <Text>Passageiro: {item.passageiro}</Text>
            <Text>Destino: {item.destino}</Text>
            <Text>Origem: {item.origem}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 12,
  },
  input: {
    height: 60,
    width: "90%",
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 12,
  },
});
