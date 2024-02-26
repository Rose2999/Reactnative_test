import React from 'react';
import {View, StyleSheet, TextInput,TouchableOpacity,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackNavigation } from './src/navigation/AppNavigation';


const App = () => {
  

  return (
  <NavigationContainer>
    <HomeStackNavigation/>
  </NavigationContainer>
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