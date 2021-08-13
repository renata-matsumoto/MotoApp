import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

import firebase from "../../firebase";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    pegaDados();
  }, []);

  const pegaDados = async () => {
    const motorista = firebase.db.collection("motorista");

    const resposta = await motorista.where('key','==','Sii9i6N6xBg8IchabK1RG2yIjIB3').get();

    const dados = resposta.docs;

    const listMotorista = [];
    dados.forEach((doc) => {
      listMotorista.push({
        ...doc.data(),
        key: doc.id,
      });
    });
    setState(listMotorista);
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={require("../../images/perfil.jpg")} />

      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text>Nome: {item.dados.nome} </Text>
            <Text>Documento da moto: {item.dados.documentoMoto} </Text>
            <Text>Placa: {item.dados.placaMoto} </Text>
            <Text>Cor Moto: {item.dados.corMoto} </Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  foto: {
    width: 200,
    height: 200,
    margin: "20%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
