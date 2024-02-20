import React from "react";
import {View, StyleSheet, TextInput,TouchableOpacity,Text} from 'react-native';

const ButtonComponent=()=>{
    return (
    <View>
        <TouchableOpacity style={styles.button} >
        <Text>Login</Text>
      </TouchableOpacity>
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
export default ButtonComponent;