import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, Button,  Image, ActivityIndicator} from "react-native";
import { styles } from "../../style/style";
import { useEffect, useContext } from 'react';
import {UserContext} from './UserContext';
import firebase from "../../firebase";
  
  export default function LoginInterno(){
  
      const {logado, deslogado} = useContext(UserContext);
      const [loading, setLoading] = useState(true);
      const[state, setState] = useState({
          email:'',
          senha:'',
          msg:''
      })
  
  
      // verifica se é um novo newUser
      const [newUser, setNewUser] =useState(false);
  
  
      const handleInputChange = (name,value) => {
          setState ({
              ...state, [name]:value
          })
      }
  
      useEffect(
          () => {
              const auth = firebase.auth;
              const unsubscribed = auth.onAuthStateChanged(
                  user => {
                      if(user){
                          if(user.emailVerified){
                              logado(user);
                          }else{
                              auth.signOut();
                              deslogado();
                              setLoading(false);
                          }
                      }else{
                          setLoading(false);
                      }
                  }
              )
  
              return () => {
                  unsubscribed();
              }
          },[]
      )
      const login = async () => {
          const auth = firebase.auth;
          const {email, senha} = state;
          try{
              const resposta = await auth.signInWithEmailAndPassword(email, senha);
          }catch(error){
              setState({
                  ...state, msg: 'email ou senha inválidos'
              })
          }
      }
      const cadastrar = async () =>{
          const auth = firebase.auth;
          const {email, senha} = state;
          if(senha.length >= 6) {
              try{
                  const resposta = await auth.createUserWithEmailAndPassword (email, senha);
                  auth.currentUser.sendEmailVerification();
                  setNewUser(false);
                  setState({
                      ...state, msg: "Verifique sua conta de email"
                  })
              }catch(error){
                  setState({
                      ...state, msg: "não foi possível cadastrar o usuário"
                  })
              }
          }else{
              setState({
                  ...state, msg: "senha deve conter no mínimo 6 caracteres"
              })
          }
      }
  
      if(loading){
          return <ActivityIndicator/>
      }
      return(
        <View style={styles.container}>

          <View>
            <Image style={styles.loginImg1} source={require('../../images/logoMoto2.jpeg')}/>
          </View>

          <Text style={styles.loginText}>Login</Text>


          <View style={styles.divbtn}>
                    {newUser ?
                        <TouchableOpacity
                            onPress={cadastrar}
                            style={styles.loginTouch}
                        ><Text
                            style={styles.loginText1}
                        >Cadastrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={login}
                            style={styles.loginTouch}
                        ><Text
                            style={styles.loginText1}
                        >Login</Text>
                        </TouchableOpacity>}
          </View>


                      {newUser ?
                <Button title='Cadastrar' onPress={cadastrar}/>:
                <Button title='Logar' onPress={login}/>
                }

  
                  {/* newUser se sim Cadastrar se não login */}
                  <Text style={styles.msg}>{state.msg}</Text>
                  <Text onPress={() => setNewUser(true)}>Cadastre-se</Text>   
         
  
      </View>
      )
  }
    