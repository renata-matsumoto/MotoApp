import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "../../firebase";
import { UserContext } from "./UserContext";
import { styles } from "../../style/style";

export default function LoginInterno() {
  const { logar, deslogar } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    email: "",
    senha: "",
    msg: "",
  });

  const handleInputChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    const auth = firebase.auth;
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          logar(user);
        } else {
          auth.signOut();
          deslogar();
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);

  const LoginInterno = async () => {
    const auth = firebase.auth;
    const { email, senha } = state;
    try {
      const resposta = await auth.signInWithEmailAndPassword(email, senha);
      setState({ ...state, msg: "Loguei" });
    } catch (error) {
      setState({ ...state, msg: "E-mail ou Senha invalido(a)" });
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  console.log(state);

  return (
    <View style={styles.container}>
      {" "}
      <View>
        <Image
          style={styles.loginImg1}
          source={require("../../images/logoMoto2.jpeg")}
        />
      </View>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <TextInput
          style={styles.loginInput}
          placeholder="E-mail"
          onChangeText={(value) => handleInputChange("email", value)}
        />

        <TextInput
          style={styles.loginInput}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(value) => handleInputChange("senha", value)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginTouch} onPress={LoginInterno}>
          <Text style={styles.loginText1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
