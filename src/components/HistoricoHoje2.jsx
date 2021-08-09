import React from "react";
import { Text, View, ImageBackground} from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AceitarCorrida() {
  return (

    <ImageBackground style={styles.historicoHojeBack} source={require('../../images/foto.png')}>
    
    <View style={styles.container}>

      <View style={styles.container2}>

        <View style={styles.container3}>
          <Text style={styles.text}>R$ 75,00</Text>
        </View>
     
        <Text style={styles.text1}>Saldo Hoje</Text>

        <Text style={styles.text2}>15 viagens concluídas</Text>
        <Text style={styles.text2}>Ver todas as Viagens</Text>
  
      </View>
     
    </View>

    <View style={styles.container4}>
          <View style={styles.ico}>
            <Icon name="angle-double-up"size={30}/>
          </View>
          <Text style={styles.text4}>Sair</Text>
          <View style={styles.ico}>
            <Icon name="bars" size={30}/>
          </View>
        </View>

    </ImageBackground>   
  );
}
