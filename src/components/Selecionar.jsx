import React, {useState,useEffect} from 'react';
import { Button, Text, View, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import firebase from '../../firebase'

export default function Select(){
    const [motorista,setMotorista]=useState([]);
    const [corridaSolicitada,setCorridaSolicitada]=useState([]);
    const [corridaRetornada,setCorridaRetornada]=useState([]);

    const pegaDadosCorrida = async () =>{
        const corrida=firebase.db.collection('corrida');
        const querySnapshot= await corrida.where('status','==','Solicitada').get();
        const dados=querySnapshot;
        const listRuns = [];
        dados.forEach(
            doc => {
                listRuns.push({
                    ...doc.data(),
                    key:doc.id
                })
            })
            setCorridaSolicitada(listRuns);
    }
    const pegaDadosCorridaRetornada = async () =>{
        const corrida=firebase.db.collection('corrida');
        const querySnapshot= await corrida.where('status','==','Retornada').get();
        const dados=querySnapshot;
        const listRuns = [];
        dados.forEach(
            doc => {
                listRuns.push({
                    ...doc.data(),
                    key:doc.id
                })
            })
            setCorridaRetornada(listRuns);
    }
    const pegaDadosMotorista = async () => {
        const motorista = firebase.db.collection('motorista');
        const querySnapshot = await motorista.get();
        const dados = querySnapshot.docs;
        const listDriver =[];
        dados.forEach(
            doc => {
                listDriver.push({
                    ...doc.data(),
                    key:doc.id
                })
            })
        setMotorista(listDriver);
    }
    const atribuirMotorista =async (key,valor) => {
        const users = firebase.db.collection('corrida');
        const doc = await users.doc(key).update({
            keyMotorista:valor,
        }).then(
            ()=>alert('Motoca definido')
        ).catch(
            ()=>alert('Not saved')
        );
    }
    const encaminharCorrida = async (a) => {
        const users = firebase.db.collection('corrida');
        const doc = await users.doc(a).update({
            status:'Encaminhada'
        }).then(
            () => alert('Encaminhada')
        ).catch(
            ()=>alert('Not saved')
        )
    }
    const pegaDadosAll = () => {
        pegaDadosCorrida();
        pegaDadosMotorista();
        pegaDadosCorridaRetornada();
        
        
    }
    useEffect(
        () => {pegaDadosAll()}
    ,[]);
    
    return(
        <View>
            <Text>Corridas Retornadas</Text>
            {corridaRetornada.map((a)=>{
                return <View key={a.key}>
                            <Text>Origem: {a.origem}</Text>
                            <Text>Destino: {a.destino}</Text>
                            <Text>keyMotoca: {a.key}</Text>
                            <Text>Status: {a.status}</Text>
                            <Text>Selecione o motorista</Text>
                            <Picker
                                ref={motorista}
                                onValueChange={(itemValue) =>
                                atribuirMotorista(a.key,itemValue)}
                                mode='dropdown'
                            >
                            <Picker.Item  label='-'/>
                                {motorista.map(e => {
                                    if(e.noGrau == 'Parado')
                                    return <Picker.Item key={e.key} label={`${e.nome}-${e.local}`} value={e.key}/>
                                        
                                })}
                            </Picker>
                            <Button
                                title='Encaminhar'
                                onPress={()=>encaminharCorrida(a.key)}
                            />
                        </View>
            })}
            <Text>Corridas Solicitadas</Text>
            {corridaSolicitada.map((a)=>{
                return <View key={a.key}>
                            <Text>Origem: {a.origem}</Text>
                            <Text>Destino: {a.destino}</Text>
                            <Text>Corrida: {a.key}</Text>
                            <Text>Status: {a.status}</Text>
                            <Text>Selecione o motorista</Text>
                            <Picker
                                ref={motorista}
                                onValueChange={(itemValue) =>
                                atribuirMotorista(a.key,itemValue)}
                                mode='dropdown'
                            >
                            <Picker.Item  label='-'/>
                                {motorista.map(e => {
                                    if(e.noGrau == 'Parado')
                                    return <Picker.Item key={e.key} label={e.nome} value={e.key}/>
                                        
                                })}
                            </Picker>
                            <Button
                                title='Encaminhar'
                                onPress={()=>encaminharCorrida(a.key)}
                            />
                        </View>
            })}
        </View>
    )
}