import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { StyleSheet, TextInput, Text, View, Button, } from "react-native";


export default function HistoricoCorrida({ navigation }) {
  const [corridaFinalizada,setCorridaFinalizada]=useState([]);

  const pegaDadosCorrida = async () =>{
    const corrida=firebase.db.collection('corrida');
    const querySnapshot= await corrida.where('status','==','Finalizada').get();
    const dados=querySnapshot;
    const listRuns = [];
    dados.forEach(
        doc => {
            listRuns.push({
                ...doc.data(),
                key:doc.id
            })
        })
        setCorridaFinalizada(listRuns);
}
  useEffect(
    () => {setTimeout(() => {
      pegaDadosCorrida();
    }, 2000)
  ,[]});

  return (
    <View>
      <Text style={styles.tituloCorridas}>Histórico de corridas</Text>
        {corridaFinalizada.map((a)=>{
          return <View 
                    style={styles.viewCorrida}
                    key={a.key}>
                      <Text style={styles.textFlatlist}>Origem: {a.origem}</Text>
                      <Text style={styles.textFlatlist}>Destino: {a.destino}</Text>
                      <Text style={styles.textFlatlist}>Status: {a.status}</Text>
                  </View>
          })}
    </View>
  );
}

const styles = StyleSheet.create({
  tituloCorridas: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  textFlatlist:{
    textAlign:'center',
  },
  viewCorrida:{
    borderWidth:1,
    borderRadius:5,
    marginVertical:10,
  }
});
