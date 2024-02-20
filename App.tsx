import React from 'react';
import {View, StyleSheet, TextInput,TouchableOpacity,Text} from 'react-native';

import InstaHomeScreen from './src/sreens/InstaHomeScreen';



const App = () => {
  

  return (<View>
   <InstaHomeScreen/>
   

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

export default App;