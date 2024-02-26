import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ButtonComponent = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('we are here' + count);
    navigation.navigate('InstaHome', {});
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
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
