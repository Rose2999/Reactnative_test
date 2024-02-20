import React from "react";
import {View, StyleSheet,Text,Image} from 'react-native';


const HeaderComponent=()=>{
    return (
    <View style={styles.mainstyle}>
         <Image
         style={styles.tinyIcon}
        source={require('../assets/camera.png')}
      />
      <Text style={styles.headerText}>Instagram</Text>
      <Image
        style={styles.tinyIcon}
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
      mainstyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    
    },
      tinyIcon: {
        height:40,
        width:40,
      },
      headerText:{
        fontSize:40,
        color:'black',
        fontWeight:'bold',
      }
    });
export default HeaderComponent;