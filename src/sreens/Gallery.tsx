import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
 
const Gallery = () => {
  const [response, setResponse] = useState<any>(null);
  const openBrowse = async () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 0}, setResponse);
  };
  return (
    <View>
      <Text>Page 1</Text>
      <TouchableOpacity onPress={openBrowse}>
        <Text>add image</Text>
      </TouchableOpacity>
      <View>
        {response?.assets &&
          response?.assets.map(({uri}: {uri: string}) => (
            <View key={uri}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{uri: uri}}
              />
            </View>
          ))}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
export default Gallery;
 