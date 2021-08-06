import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../../style/style";

export default function LoginInterno() {
  return (
   
    <View style={styles.container}>

      <View>
        <Image style={styles.loginImg1} source={require('../../images/logoMoto2.jpeg')}/>
      </View>

      <Text style={styles.loginText}>Login</Text>

      <View>

      <TextInput style={styles.loginInput} 
                    placeholder='email'
                    onChangeText={(value)=>handleInputChange('email', value)}/>
                    
        
      <TextInput style={styles.loginInput} 
                    placeholder='senha'
                    onChangeText={(value)=>handleInputChange('senha', value)}/>
                    
      </View>
      
      <TouchableOpacity style={styles.loginTouch}><View><Text style={styles.loginText1}>Login</Text></View></TouchableOpacity>

    </View>
  
    

  );
}
