import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { getFeedsAPI } from '../network/ApiHook';
 



type ItemProps = { feedImage: string; likeCount: string;title:string;imageUrl:string };
 
const Item = ({ feedImage,likeCount,title, imageUrl }: ItemProps) => (
  <View style={styles.postContainer}>
    <View style={styles.profileContainer}>
    <Image source={{ uri: imageUrl }} style={styles.storyImage} />
    <Text style={styles.name}>{title}</Text>
    </View>
    <Image source={{uri:feedImage}}  style={styles.postImage}/>
    <View style={styles.iconContainer}>
        <Image source={require('../assets/love.png')} style={styles.icon}></Image>
        <Image source={require('../assets/message.png')} style={styles.icon}></Image>
        <Image source={require('../assets/send.png')} style={styles.icon}></Image>
    </View>
    <Text style={styles.likeText}>{likeCount} likes</Text>
  </View>
);
 
const MainComponent = () => {
    const [feedList, setFeedList] = useState<any[]>([]);
    useEffect(() => {
        console.log('effect activated');
        const getFeeds = async () => {
          try {
            const {contentResp, errorMessage} = await getFeedsAPI(
              'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
            );
            setFeedList(contentResp);
            //console.log(feedList[0].feedImage);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getFeeds();
      }, []);
  return (
    <View style={styles.mainview} >

      <FlatList
        showsVerticalScrollIndicator={false}
        data={feedList}
        renderItem={({ item }) => <Item feedImage={item.feedImage} likeCount={item.likeCount} title={item.title} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.id}
      horizontal={false}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  postContainer: {
    marginRight: 20,
    justifyContent:'space-between',
  },
  mainview:{
   marginTop:-10,
  },
  storyImage: {
    width: 40,
    height: 40,
    borderRadius: 65,
  },
  profileContainer:{
  padding:10,
  
  flexDirection:'row',
  
  },
  postImage:{
    height:400,
    width:400,
  },
  icon:{
    height:30,
    width:30,
  },
  iconContainer:{
    padding:10,
    flexDirection:"row",
    gap:20,
    
  },
  likeText:{
    padding:5,
    fontSize:20,
    fontWeight:"bold",
    color:'black',
    marginBottom:10,
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    padding:10,
  }
});
 
export default MainComponent;