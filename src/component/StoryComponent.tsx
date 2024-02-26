import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { getFeedsAPI } from '../network/ApiHook';


 
type ItemProps = { title: string; imageUrl: string };
 
const Item = ({ title, imageUrl }: ItemProps) => (
  <View style={styles.storyContainer}>
    <Image source={{ uri: imageUrl }} style={styles.storyImage} />
    <Text style={styles.storyOwner}>{title}</Text>
  </View>
);
 
const StoryComponent = () => {
  const [storyList, setStoryList] = useState<any[]>([]);
    useEffect(() => {
        console.log('effect activated');
        const getStories = async () => {
          try {
            const {contentResp, errorMessage} = await getFeedsAPI(
              'v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',
            );
            setStoryList(contentResp);
            //console.log(feedList[0].feedImage);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getStories();
      }, []);
  return (
    <View style={styles.mainview} >
      <Text style={styles.storyText}>Stories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={storyList}
        renderItem={({ item }) => <Item title={item.title} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.id}
      horizontal={true}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  mainview:{
   marginTop:-10,
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 65,
    borderColor: 'red',
    borderWidth: 4,
  },
  storyText:{
    color:'black',
    padding:10,
  },
  storyOwner:{
    color:'black',

  }
});
 
export default StoryComponent;