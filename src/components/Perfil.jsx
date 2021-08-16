import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from "../../firebase";

export default function Perfil({navigation}) {
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

      
    <View style={styles.hojebtn1}>
        <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Apresentação")}>
            <Icon name="angle-left" style={styles.ico1} size={20}/>
        </TouchableOpacity>            
    </View>

      <Image style={styles.foto} source={require("../../images/user.jpg")} />

      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View>
            <Text style={styles.text}>Nome: {item.dados.nome} </Text>
            <Text style={styles.text1}>Documento da moto: {item.dados.documentoMoto} </Text>
            <Text style={styles.text1}>Placa: {item.dados.placaMoto} </Text>
            <Text style={styles.text1}>Cor Moto: {item.dados.corMoto} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  foto: {
    borderRadius:100,
    width: 150,
    height: 150,
    margin: "20%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  text:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:25,
  },

  text1:{
    fontSize:25,
    justifyContent: "flex-start",
    marginBottom:18,
  },

  hojebtn1:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft:10,
    width:'100%',
  },

  hojeTouch1:{
    alignItems:'center',
    backgroundColor:'#FFC107',
    borderRadius:20,
    justifyContent:'center',
    height:30,
    marginTop:20,
    width:30,
  },


});
