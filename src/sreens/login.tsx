import React from "react";
import {View, StyleSheet, TextInput,TouchableOpacity,Text,Image} from 'react-native';

const Login=()=>{
    return (
    <View style={{flex:1,flexDirection:'row'}}>
         <Image
        
        source={require('../assets/camera.png')}
      />
      <Text>Instagram</Text>
      <Image
        
        source={require('../assets/send.png')}
      />
    </View>
    );
};
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 10,
        
      },
    });
export default Login;