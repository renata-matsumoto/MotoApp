import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
} from "react-native";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    pegaDados();
  }, []);

  //busca o conteúdo da coleção:
  const pegaDados = async () => {
    //Referência do firebase firestore, acessando a coleção:
    const motorista = firebase.db.collection("motorista");

    //constante de armazenamento esperando o retorno da função:
    const resposta = await motorista.get();

    //constante que recebe os documentos alinhados no formato de array com as informações:
    const dados = resposta.docs;

    //Trazer um a um para receber e mostrar os dados organizados em objeto:
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
            <Text>Nome: {item..nome} </Text>
            <Text>Cor Moto: {item..corMoto} </Text>
            <Text>Placa: {item..placaMoto} </Text>
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
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  
});
