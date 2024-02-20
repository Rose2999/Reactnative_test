import React, { useState } from "react";
import {View, StyleSheet, TextInput,TouchableOpacity,Text} from 'react-native';

const ButtonComponent=()=>{
  const [count,setCount]=useState<number>(0);
  const onPress=()=>{
    setCount(prevCount=>prevCount+1);
    console.log("we are here"+count);
  };
    return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text>Login{count}</Text>
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