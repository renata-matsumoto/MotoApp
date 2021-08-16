import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HistoricoCorrida({ navigation }) {
  const [corridaFinalizada, setCorridaFinalizada] = useState([]);

  const pegaDadosCorrida = async () => {
    const corrida = firebase.db.collection("corrida");
    const querySnapshot = await corrida
      .where("status", "==", "Finalizada")
      .get();
    const dados = querySnapshot;
    const listRuns = [];
    dados.forEach((doc) => {
      listRuns.push({
        ...doc.data(),
        key: doc.id,
      });
    });
    setCorridaFinalizada(listRuns);
  };
  useEffect(() => {
    pegaDadosCorrida();
  }, []);

  return (
    <View>
      <View style={styles.hojebtn1}>
        <TouchableOpacity
          style={styles.hojeTouch1}
          onPress={() => navigation.navigate("Apresentação")}
        >
          <Icon name="angle-left" style={styles.ico1} size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.tituloCorridas}>Histórico de corridas</Text>
      {corridaFinalizada.map((a) => {
        return (
          <View style={styles.viewCorrida1}>
            <View style={styles.viewCorrida} key={a.key}>
              <Text style={styles.textFlatlist}>Origem: {a.origem}</Text>
              <Text style={styles.textFlatlist}>Destino: {a.destino}</Text>
              <Text style={styles.textFlatlist}>Status: {a.status}</Text>
            </View>
          </View>  
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tituloCorridas: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom:10,
  },
  textFlatlist: {
    fontSize: 20,
    justifyContent: "flex-start",
    margin: 2,
  },
  viewCorrida: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    width: 300,
  },

  viewCorrida1:{
    alignItems:'center',
    justifyContent:'center',
    
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
