import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../style/style";



export default function ConfirmarCorrida() {



  return (
  
    <View>

      <View>
        <Image style={styles.confirmarCorridaImg3} source={require('../../images/mapa.png')}/>
      </View>

      <View>
        <Text style={styles.confirmarCorrida1}>{`Rua Antônio Oliveira Menezes, SN, Centro, Itapipoca \n Ceará, Brazil`}</Text>
      </View>

      <View>
        <Text style={styles.confirmarCorrida}>5 minutos</Text>
      </View>

      <View style={styles.confirmaCorridaTouch}>
        <TouchableOpacity  ableOpacity style={styles.corridaTouch}>
        <View><Text style={styles.corridaText1}>Aceitar</Text></View></TouchableOpacity>   

        <TouchableOpacity style={styles.corridaTouch1}>
        <View><Text style={styles.corridaText2}>Rejeitar</Text></View></TouchableOpacity>             
      </View>
    </View>

  )
}
