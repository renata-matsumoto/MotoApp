import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
import moment from 'moment';
import firebase from '../../firebase';

const cont = new Date(0,0,0,0,0,10); 

export default function Contador(){
  const [atualizar, setAtualizar] = useState(cont);
  const [corridaSolicitada,setCorridaSolicitada]=useState([]);

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

  useEffect(() => {
    // pegaDados()
      if(moment(atualizar).format("mm:ss")  != moment(new Date(0,0,0,0,0,0)).format("mm:ss")){
      let id = setInterval(() => {
        setAtualizar(atualizar - 1000)
      }, 1000);
    return () => clearInterval(id);
     }else{
      recusarCorrida(corridaSolicitada.key);
      // setAtualizar(atualizar + 10000);
     }
    });
    console.log(corridaSolicitada.key)
    console.log(atualizar)
  return(
    <Text style={{fontSize: 80 , textAlign:'center', justifyContent:'center', alignItems:'center', marginBottom:20}}>{moment(atualizar).format("mm:ss")}</Text>
    // <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
    // </View>
  )
}