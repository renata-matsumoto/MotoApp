import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, View, FlatList, StyleSheet } from 'react-native';
import firebase from '../../firebase';



export default function Status(){
    const [listUsers,setListUsers]=useState();
    const [corridaEncaminhada,setCorridaEncaminhada]=useState();
    const [corridaSolicitada,setCorridaSolicitada]=useState([]);

    const aceitarCorrida = async (a) => {
          const users=firebase.db.collection('corrida');
          const doc = await users.doc(a).update({
            status:'Em andamento'
          }).then(
            ()=>alert('Saved')
          ).catch(
            ()=>alert('Not saved')
          );
    }
    const recusarCorrida = async (a) => {
        const users=firebase.db.collection('corrida');
        const doc = await users.doc(a).update({
          status:'Retornada'
        }).then(
          ()=>alert('Saved')
        ).catch(
          ()=>alert('Not saved')
        );
  }
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
    useEffect(
      () => {pegaDados()}
  ,[]);
    return(
        <View style={styles.container}>
            <Button
              title='Atualizar'
              onPress={()=>{pegaDados()}}
            />
            <FlatList
                data={corridaSolicitada}
                renderItem={({item}) => (
                    <View>
                        <Text>Origem: {item.origem}</Text>
                        <Text>Destino: {item.destino}</Text>
                        <Text>Passageiro: {item.passageiro}</Text>
                        <Text>Status: {item.status} {`\n \n`}</Text>
                        <Button
                            title='Aceitar'
                            onPress={()=>{aceitarCorrida(item.key)}}
                        />
                         <Button
                            title='Recusar'
                            onPress={()=>{recusarCorrida(item.key)}}
                        />
                    </View>
                )}
            />      
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});