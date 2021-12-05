import React, {useEffect, useState, useLayoutEffect} from "react";
import {SafeAreaView, FlatList, View, StatusBar, StyleSheet, Platform} from "react-native";
import {fetchNews} from "../utils/newsApi";
import {MarketNewsItem} from "../components/MarketNewsItem";
import COLORS from "../utils/COLORS";


const Home = ({navigation}) => {
    useLayoutEffect(() => {
      navigation.setOptions({
          
      })
    }, [navigation])
    const [myData,setMyData]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
        fetchNews().then((data) => {
            setMyData(data.articles)
            console.log(data)
        },
        (error) => {
            setError(error);
        })
    },[])
    const renderItem = ({ item }) => (
       <MarketNewsItem imageNews={item.image} nameNews={item.title} source={item.source.url} />
    );
    const itemSeparator = () => (
        <View style={styles.itemSeparator}/>
    );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = "light-content"/>
      <View style={styles.view}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={myData}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={item => item.id}
        >
        </FlatList>
        </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
      flex:1, 
      backgroundColor:COLORS.black, 
      color: COLORS.white,
      paddingTop: Platform.OS === 'android' ? StatusBar.height : 0
  },
  itemSeparator: {
      height: 1, 
      width: "100%", 
      backgroundColor: COLORS.grey, 
      marginVertical: 12,
  },
  view: {
      backgroundColor:COLORS.black, 
      padding:12,
  },
});