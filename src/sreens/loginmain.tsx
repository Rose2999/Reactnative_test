import React from 'react';
import {View, StyleSheet, TextInput,TouchableOpacity,Text} from 'react-native';
import ButtonComponent from '../component/button';

const TextInputExample = () => {
  

  return (
    <View style={{flexDirection:'column',flex:1,justifyContent:'center'}}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        
      />
      <TextInput
        style={styles.input}
        
        
        placeholder="password"
        
      />
    <Text>Forget password?</Text>
      <ButtonComponent></ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign:'center',
    alignItems:'center'
  },
  
});

export default TextInputExample;