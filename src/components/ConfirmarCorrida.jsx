import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../../firebase';
import moment from 'moment';
import Contador from './Contador';

export default function Status(){
    const [listUsers,setListUsers]=useState();
    const [corridaSolicitada,setCorridaSolicitada]=useState([]);
    const [corridaAndamento, setCorridaAndamento]=useState([]);
    const [ocupado, setOcupado]=useState(false);
    const [motoca, setMotoca]=useState([]);

    // Função para o motorista aceitar a corrida
    const aceitarCorrida = async (a) => {
          const users=firebase.db.collection('corrida');
          const doc = await users.doc(a).update({
            status:'Em andamento'
          }).then(
            ()=>alert('Corrida aceita!')
          ).catch(
            ()=>alert('Houve um erro')
          );
          setOcupado(true)
    }
    // Função para o motorista negar a corrida
    const recusarCorrida = async (a) => {
        const users=firebase.db.collection('corrida');
        const doc = await users.doc(a).update({
          status:'Retornada'
        }).then(
          ()=>alert('Recusada')
        ).catch(
          ()=>alert('Houve um erro')
        );
    }
    // Função para definir a disponibilidade do motorista
    const indisp = async (a) => {
    const users=firebase.db.collection('motorista');
    const doc = await users.doc(a).update({
            status:'Ocupado'
    })}
    const parado = async (a) => {
    const motoca=firebase.db.collection('motorista');
    const doc = await motoca.doc(a).update({
            status:'Parado'
    })}
  //  Função para finalizar corrida ativa
  const finalizarCorrida = async (a) => {
  const users=firebase.db.collection('corrida');
  const doc = await users.doc(a).update({
    status:'Finalizada'
  }).then(
    ()=>alert('Corrida Finalizada')
  ).catch(
    ()=>alert('Houve um erro')
  );
  setOcupado(false);
  }
  // Função que busca corridas em andamento
  const pegaDadosAndamento = async () => {
    const corrida = firebase.db.collection('corrida');
    const querySnapshot = await corrida.where('status','==','Em andamento').get();
    const dados = querySnapshot.docs;
    const listRuns= [];
    dados.forEach(
        doc => {
            listRuns.push({
                ...doc.data(),
                key: doc.id
            })
        })
        setCorridaAndamento(listRuns);
  }
  //Função que busca corridas encaminhadas para o motorista 
  const pegaDados = async () => {
    const corrida = firebase.db.collection('corrida');
    const querySnapshot = await corrida.where('status','==','Encaminhada').get();
    const dados = querySnapshot.docs;
    const listRuns= [];
    dados.forEach(
        doc => {
            listRuns.push({
                ...doc.data(),
                key: doc.id
            })
        })
        setCorridaSolicitada(listRuns);
  }
  // Função para buscar os dados do motorista
  const pegaDadosMotoca = async () => {
    const corrida = firebase.db.collection('Motorista');
    const querySnapshot = await corrida.get();
    const dados = querySnapshot.docs;
    const listDriver= [];
    dados.forEach(
        doc => {
            listRuns.push({
                ...doc.data(),
                key: doc.id
            })
        })
        setMotoca(listDriver);
  }
  useEffect(
      () => {pegaDadosAndamento(),pegaDados(),pegaDadosMotoca()}
  ,[]);
  if(ocupado){
    return <View>
              <Text style={styles.tituloCorridas}>
                Corrida em andamento
              </Text>
              <FlatList
                  data={corridaAndamento}
                  renderItem={({item}) => (
                      <View style={styles.viewCorrida}>
                          <Text style={styles.textFlatlist}>Origem: {item.origem}</Text>
                          <Text style={styles.textFlatlist}>Destino: {item.destino}</Text>
                          <Text style={styles.textFlatlist}>Passageiro: {item.passageiro}</Text>
                          <Text style={styles.textFlatlist}>Status: {item.status} {`\n \n`}</Text>
                          <Button
                              
                              title='Finalizar'
                              color='orange'
                              onPress={()=>{finalizarCorrida(item.key),parado(item.keyMotorista),pegaDadosAndamento(),pegaDados()}}
                          />
                      </View>
                  )}
              /> 
            </View>
  }
  return(
        <ScrollView>
            <Text style={styles.tituloCorridas}>
                Corridas disponíveis
            </Text>
            <View>
              <FlatList
                  data={corridaSolicitada}
                  renderItem={({item}) => (
                      <View style={styles.viewCorrida}>
                          <Text style={styles.textFlatlist}>Origem: {item.origem}</Text>
                          <Text style={styles.textFlatlist}>Destino: {item.destino}</Text>
                          <Text style={styles.textFlatlist}>Passageiro: {item.passageiro}</Text>
                          <Text style={styles.textFlatlist}>Status: {item.status} {`\n \n`}</Text>
                          <View style={styles.viewButton}>
                            <Button
                                title='Aceitar'
                                onPress={()=>{aceitarCorrida(item.key),indisp(item.keyMotorista),pegaDadosAndamento(),pegaDados()}}
                            />
                          </View>
                          <View style={styles.viewButton}>
                            <Button
                                title='Recusar'
                                color='red'
                                onPress={()=>{recusarCorrida(item.key),pegaDadosAndamento(),pegaDados()}}
                            />
                          </View>
                          <View>
                            {/* <Contador/> */}
                          </View>
                      </View>
                  )}
              /> 
          </View>
        </ScrollView>
        
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCorridas: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  textFlatlist:{
    textAlign:'center',
  },
  viewCorrida:{
    marginVertical:20,
  },
  viewButton:{
    width:'35%',
    alignSelf:'center',
    marginVertical:5,
  },
});